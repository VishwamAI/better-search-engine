const axios = require('axios');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Initialize OAuth2 client
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3001/oauth2callback'
);

// Generate a URL for the user to authorize the application
function getAuthUrl() {
  const scopes = [
    'https://www.googleapis.com/auth/classroom.courses',
    'https://www.googleapis.com/auth/classroom.coursework.me',
    'https://www.googleapis.com/auth/classroom.coursework.students',
    'https://www.googleapis.com/auth/classroom.rosters',
    'https://www.googleapis.com/auth/classroom.announcements',
    'https://www.googleapis.com/auth/classroom.topics'
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  });

  return url;
}

// Exchange authorization code for access token
async function getToken(code) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}

// Make an authorized request to the Google Classroom API
async function listCourses(accessToken) {
  oauth2Client.setCredentials({ access_token: accessToken });
  const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
  const res = await classroom.courses.list();
  return res.data.courses;
}

module.exports = {
  getAuthUrl,
  getToken,
  listCourses
};
