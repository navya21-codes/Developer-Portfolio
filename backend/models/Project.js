const express = require('express');
const router = express.Router();

// Sample projects data - replace with database connection
const projects = [
    {
        id: 1,
        title: "Learning Management System",
        description: "A comprehensive LMS platform for online education with course management, student tracking, user authentication, and interactive features built using modern full-stack technologies.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"],
        githubUrl: "https://github.com/navya21-codes/Learning-Management-System",
        
    },
    {
        id: 2,
        title: "Weather Application",
        description: "Real-time weather forecasting app with location-based detection, 5-day forecasts, and interactive UI for checking current conditions and alerts.",
        technologies: ["JavaScript", "API", "HTML", "CSS"],
        githubUrl:  "https://github.com/navya21-codes/Weather-App",
        
    }
];

// GET all projects
router.get('/', (req, res) => {
    try {
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

module.exports = router;