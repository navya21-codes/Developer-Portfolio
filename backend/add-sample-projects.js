const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const sampleProjects = [
    {
        title: "Learning Management System",
        description: "A comprehensive Learning Management System built with modern web technologies for educational institutions and online courses.",
        technologies: ["React.js", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"],
        githubUrl: "https://github.com/navya21-codes/Learning-Management-System",
        featured: true,
        
    },
    {
        title: "Weather Application",
        description: "A responsive weather application that provides real-time weather information, forecasts, and location-based weather data.",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
        githubUrl: "https://github.com/navya21-codes/Weather-App",
        featured: true,
        
    },
   
    
];

const addSampleProjects = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB');

        await Project.deleteMany({});
        console.log('Cleared existing projects');

        await Project.insertMany(sampleProjects);
        console.log('Sample projects added successfully!');

        const projects = await Project.find();
        console.log(`Total projects in database: ${projects.length}`);
        
        console.log('\n Your Projects:');
        projects.forEach(project => {
            console.log(`${project.title} (${project.featured ? ' Featured' : 'Regular'})`);
            console.log(`GitHub: ${project.githubUrl}`);
            
        });

        process.exit(0);
    } catch (error) {
        console.error('Error adding sample projects:', error);
        process.exit(1);
    }
};

addSampleProjects();