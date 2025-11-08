const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample projects data (all 3s projects)
const sampleProjects = [
    {
        title: "Learning Management System",
        description: "A Comprehensive learning ecosystem featuring course management, progress tracking, and interactive learning tools. Built for educators and learners in the digital age.",
        technologies: ["React.js", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"],
        githubUrl: "https://github.com/navya21-codes/Learning-Management-System",
        featured: true
    },
    {
        title: "Weather Application", 
        description: "A responsive weather application that provides real-time weather information and location-based weather data. A modern weather forecasting web app built with HTML, CSS, and JavaScript using the OpenWeatherMap API.",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
        githubUrl: "https://github.com/navya21-codes/Weather-App",
        featured: true
    },
    {
        title: "Real-Time Chat Application",
        description: "A real-time chat application with instant messaging, and user authentication features. This is a full-stack Real-Time Chat Application built using React on the frontend and Node.js with Socket.IO on the backend.",
        technologies: ["Socket.io", "Node.js", "Express", "JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/navya21-codes/Real-Time-chat-Appplication",
        featured: false
    },
    
];

// API Routes
app.get('/api/projects', (req, res) => {
    res.json({ success: true, data: sampleProjects });
});

app.get('/api/projects/featured', (req, res) => {
    const featuredProjects = sampleProjects.filter(project => project.featured);
    res.json({ success: true, data: featuredProjects });
});

// Contact form
app.post('/api/contact', (req, res) => {
    console.log('Contact form submitted:', req.body);
    res.json({ success: true, message: 'Message received! (Demo mode - not saved to database)' });
});

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Portfolio Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
    console.log('Running in DEMO mode - MongoDB not required');
    console.log('4 projects loaded and ready to display!');
});