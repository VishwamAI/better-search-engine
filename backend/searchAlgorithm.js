function searchKids(query) {
  // Mock data for kids' search results
  const kidsData = [
    { title: "Educational Game", description: "A fun and educational game for kids." },
    { title: "Kids' Science Experiment", description: "A simple science experiment for kids to try at home." },
    { title: "Children's Storybook", description: "A storybook with engaging illustrations for children." },
    { title: "Math Puzzle", description: "A challenging math puzzle for kids to solve." },
    { title: "Art Project", description: "An art project that encourages creativity in children." },
    { title: "Dinosaur Facts", description: "Interesting facts about dinosaurs for kids." }
  ];

  // Filter and rank results based on query
  return kidsData
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      const aMatches = (a.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (a.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      const bMatches = (b.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (b.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      return bMatches - aMatches;
    });
}

function searchElders(query) {
  // Mock data for elders' search results
  const eldersData = [
    { title: "Health Tips for Seniors", description: "Tips for maintaining good health in older age." },
    { title: "Senior Exercise Routine", description: "A gentle exercise routine suitable for seniors." },
    { title: "Elderly Care Services", description: "Information on services available for elderly care." },
    { title: "Nutrition for Seniors", description: "A guide to proper nutrition for elderly individuals." },
    { title: "Community Activities", description: "Local community activities and events for seniors." },
    { title: "Healthcare Services", description: "A comprehensive list of healthcare services for seniors." },
    { title: "Medical Assistance Programs", description: "Programs providing medical assistance to elderly individuals." },
    { title: "Senior Health Clinics", description: "Clinics specializing in healthcare for seniors." }
  ];

  // Filter and rank results based on query
  return eldersData
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      const aMatches = (a.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (a.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      const bMatches = (b.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (b.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      return bMatches - aMatches;
    });
}

function searchResearchers(query) {
  // Mock data for researchers' search results
  const researchersData = [
    { title: "Research Paper on AI", description: "A comprehensive research paper on artificial intelligence." },
    { title: "Academic Journal on Biology", description: "A journal containing the latest research in biology." },
    { title: "Conference Proceedings", description: "Proceedings from a recent academic conference." },
    { title: "Quantum Physics Study", description: "A detailed study on quantum physics." },
    { title: "Machine Learning Review", description: "A review of recent advancements in machine learning." }
  ];

  // Filter and rank results based on query
  return researchersData
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      const aMatches = (a.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (a.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      const bMatches = (b.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0) +
                       (b.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      return bMatches - aMatches;
    });
}

module.exports = {
  searchKids,
  searchElders,
  searchResearchers
};
