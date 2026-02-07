console.log('Portfolio script loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    initializePortfolio();
});

function initializePortfolio() {
    setupMobileNavigation();
    setupSmoothScrolling();
    loadProjects();
    setupContactForm();
    
}

// Mobile Navigation
function setupMobileNavigation() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

// Smooth scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load and display projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    
    if (!projectsContainer) {
        console.error('projects-grid container not found!');
        createProjectsContainer();
        return;
    }
    
    console.log('Found projects container');
    displayProjects(projectsContainer);
}

function createProjectsContainer() {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        const container = document.createElement('div');
        container.id = 'projects-grid';
        container.className = 'projects-grid';
        projectsSection.appendChild(container);
        console.log('Created projects-grid container');
        displayProjects(container);
    } else {
        console.error('#projects section not found!');
    }
}

function displayProjects(container) {
    console.log('Displaying projects...');
    
    const projects = [
        {
            title: "Learning Management System",
            description: "A Comprehensive learning ecosystem featuring course management, progress tracking, and interactive learning tools. Built for educators and learners in the digital age.",
            technologies: ["React.js", "Node.js", "MongoDB", "Express", "JavaScript"],
            githubUrl: "https://github.com/navya21-codes/Learning-Management-System",
            featured: true
        },
        {
            title: "Weather Application", 
            description: "A responsive weather application that provides real-time weather information and location-based weather data. A modern weather forecasting web app built with HTML, CSS, and JavaScript using the OpenWeatherMap API.",
            technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
            githubUrl: "https://github.com/navya21-codes/Weather-App",
            featured: true
        },
        {
            title: "Real-Time Chat Application",
            description: "A real-time chat application with instant messaging, and user authentication features. This is a full-stack Real-Time Chat Application built using React on the frontend and Node.js with Socket.IO on the backend.",
            technologies: ["Socket.io", "Node.js", "Express", "JavaScript"],
            githubUrl: "https://github.com/navya21-codes/Real-Time-chat-Appplication",
            featured: false
        },
        
    ];
    
    let projectsHTML = '';
    
    projects.forEach(function(project) {
        let technologiesHTML = '';
        project.technologies.forEach(function(tech) {
            technologiesHTML += '<span class="tech-tag">' + tech + '</span>';
        });
        
        projectsHTML += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    
                </div>
                <p class="project-description">${project.description}</p>
                <div class="technologies">${technologiesHTML}</div>
                <div class="project-links">
                    <a href="${project.githubUrl}" class="project-link" target="_blank">
                        View on GitHub
                    </a>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = projectsHTML;
    console.log('Successfully displayed ' + projects.length + ' projects!');
}


// Skill level bars
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-level").forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level + "%";
    });
});




function setupContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) {
        console.error("Contact form not found");
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_vlz8hpb",
            "template_l1ea27c",
            contactForm
        ).then(
            function () {
                alert("Message sent successfully ✅");
                contactForm.reset();
            },
            function (error) {
                alert("Failed to send message ❌");
                console.error(error);
            }
        );
    });
}


document.addEventListener("DOMContentLoaded", function () {
    setupContactForm();
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
});