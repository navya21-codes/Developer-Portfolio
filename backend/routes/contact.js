const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Save to database
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();

        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error sending message' 
        });
    }
});

// Get all contact messages (for admin)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ date: -1 });
        res.json({ 
            success: true, 
            data: messages 
        });
    } catch (error) {
        console.error('Get messages error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching messages' 
        });
    }
});

module.exports = router;