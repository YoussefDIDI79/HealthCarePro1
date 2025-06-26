# CV Portfolio - Moncif CHERRADI

## Overview

This is a personal CV portfolio website for Moncif CHERRADI, an auxiliary nurse (Infirmier Auxiliaire). The project is a static website built with vanilla HTML, CSS, and JavaScript, showcasing professional information including profile, education, experience, skills, and contact details. The site is designed to be responsive and modern, targeting healthcare professionals.

## System Architecture

This is a simple static website architecture with no backend components:

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Hosting**: Simple HTTP server (Python's built-in server for development)
- **No Database**: All content is static and embedded in HTML
- **No Backend API**: Client-side only application

The architecture follows a traditional multi-page application pattern with smooth scrolling navigation between sections on a single page.

## Key Components

### Frontend Structure
- **index.html**: Main HTML document containing all page content and structure
- **styles.css**: Complete styling including responsive design, animations, and layout
- **script.js**: Interactive functionality for navigation, mobile menu, and scroll effects

### Navigation System
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting based on scroll position
- Backdrop blur effect on navbar

### Content Sections
- Hero/Landing section
- Professional profile
- Education/Formation
- Work experience
- Skills/Competencies  
- Contact information

## Data Flow

Since this is a static website, there is no complex data flow:

1. **User Request**: Browser requests HTML file
2. **Asset Loading**: CSS and JavaScript files are loaded
3. **Client-Side Rendering**: JavaScript handles navigation interactions
4. **User Interactions**: Scroll events, menu toggles, and navigation clicks are handled client-side

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library for UI elements
- **Google Fonts (Inter)**: Typography with multiple font weights (300-700)

### Development Dependencies
- **Python HTTP Server**: Used for local development serving
- **Node.js 20**: Available in environment but not currently utilized
- **Python 3.11**: Used for the development server

### Browser APIs
- **Scroll API**: For navigation highlighting and scroll effects
- **DOM Manipulation**: For interactive elements

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Uses Python HTTP server on port 5000
- **Live Reload**: Manual refresh required for changes
- **Local Testing**: Served via `python -m http.server 5000`

### Production Deployment Options
- **Static Hosting**: Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages)
- **CDN Distribution**: Suitable for CDN deployment due to static nature
- **No Build Process**: Direct deployment of source files

### Performance Considerations
- Minimal dependencies reduce load time
- CSS and JS are not minified (opportunity for optimization)
- Images would need optimization if added
- CDN resources are cached by browsers

## Changelog

- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.