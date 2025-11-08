const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        res.json({ 
            success: true, 
            data: projects 
        });
    } catch (error) {
        console.error('Get projects error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching projects' 
        });
    }
});

// Get featured projects
router.get('/featured', async (req, res) => {
    try {
        const projects = await Project.find({ featured: true }).sort({ date: -1 });
        res.json({ 
            success: true, 
            data: projects 
        });
    } catch (error) {
        console.error('Get featured projects error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching featured projects' 
        });
    }
});

// Get single project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ 
                success: false, 
                message: 'Project not found' 
            });
        }
        res.json({ 
            success: true, 
            data: project 
        });
    } catch (error) {
        console.error('Get project error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching project' 
        });
    }
});

module.exports = router;