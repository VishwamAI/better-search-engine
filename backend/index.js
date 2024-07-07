require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const soap = require('soap');
const { getAuthUrl, getToken, listCourses } = require('./googleClassroomIntegration');
const { searchKids, searchElders, searchResearchers } = require('./searchAlgorithm');
const app = express();
const port = 3001;

let eldercareToken = null;
let tokenExpiry = null;

// Check for required environment variables
if (!process.env.ELDERCARE_API_USERNAME || !process.env.ELDERCARE_API_PASSWORD) {
    console.error('Missing required environment variables for Eldercare API');
    process.exit(1);
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.error('Missing required environment variables for Google API');
    process.exit(1);
}

app.use(express.json());
app.use(cors({
    origin: 'https://deluxe-pudding-f77226.netlify.app'
}));

app.get('/', (req, res) => {
    res.send('Welcome to the Better Search Engine backend!');
});

app.get('/auth/google', (req, res) => {
    const url = getAuthUrl();
    res.redirect(url);
});

app.get('/oauth2callback', async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).send('Authorization code not provided');
    }

    try {
        const tokens = await getToken(code);
        // Store tokens in memory (for simplicity; use a database in production)
        global.googleTokens = tokens;
        res.send('Authorization successful. You can close this window.');
    } catch (error) {
        console.error('Error exchanging authorization code for tokens:', error);
        res.status(500).send('Error during authorization');
    }
});

app.post('/search', async (req, res) => {
    console.log('Received POST request to /search');
    console.log('Request body:', req.body);

    const { query, userGroup } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query string cannot be empty' });
    }

    let results = [];

    if (userGroup === 'kids') {
        results = searchKids(query);
    } else if (userGroup === 'elders') {
        results = searchElders(query);
    } else if (userGroup === 'researchers') {
        results = searchResearchers(query);
    } else {
        results = [
            { title: 'General result 1', description: 'Description for general result 1' },
            { title: 'General result 2', description: 'Description for general result 2' }
        ];
    }

    res.json({ results });
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
