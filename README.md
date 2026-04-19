# Sanket Barde Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, certificates, and professional experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling navigation for a better user experience
- **Interactive Animations**: Engaging fly-in animations and hover effects throughout the site
- **Project Showcase**: Dynamic image carousel for project displays with mobile-optimized single-image view
- **Skills Display**: Visual representation of technical skills with progress bars
- **Certificates Section**: Showcase of professional certifications with verification links
- **Contact Form**: Functional contact form for inquiries
- **Dark Theme**: Sleek dark theme with red accent colors for a modern aesthetic

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with SCSS-like nesting
- **JavaScript**: Interactive features and animations
- **CSS Flexbox & Grid**: Responsive layout systems
- **CSS Animations**: Smooth transitions and animations
- **Intersection Observer API**: Scroll-triggered animations

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript for interactivity
├── LICENSE             # Project license
├── hero.png            # Hero section image
├── hero_no_bg1.png     # Hero image without background
├── logo.png            # Website logo
├── sblogo.png          # Alternative logo
├── transform.gif       # Animation preview
├── certificates/       # Certificate images
├── projects/           # Project screenshots
└── resume/             # Resume files
```

## How to Use

### Viewing the Portfolio

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SANKETBARDE/SanketBardePortfoliov2.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Portfolio
   ```

3. **Open index.html** in your preferred web browser:
   - Simply double-click `index.html` to open it in your default browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Access the portfolio**:
   - If using a local server: Open `http://localhost:8000` in your browser
   - If opening directly: The file will open in your default browser

### Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update the content in `index.html` with your own details
2. **Images**: Replace images in the `projects/`, `certificates/`, and root directories
3. **Colors**: Modify the color scheme in `style.css` (currently uses dark theme with red accents)
4. **Skills**: Update the skills section with your own technical skills
5. **Projects**: Add your own projects and update the carousel images
6. **Contact**: Update the contact form and social media links

## Features in Detail

### Responsive Design
- Mobile-first approach with breakpoints at 767px and 480px
- Optimized carousel for mobile (single image view with fade transitions)
- Desktop shows 3 images at a time with horizontal scroll

### Navigation
- Sticky navigation bar that stays visible while scrolling
- Smooth scrolling to sections when clicking navigation links
- Mobile hamburger menu for smaller screens

### Animations
- Fly-in animations for name and role elements in hero section
- Hover effects on cards and buttons
- Smooth transitions throughout the site

### Project Carousel
- Desktop: Shows 3 project images at a time with auto-scroll
- Mobile: Shows 1 project image at a time with fade transitions
- Auto-scrolls every 3 seconds

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the terms of the LICENSE file included in the repository.

## Contact

For inquiries or collaboration opportunities, please use the contact form on the portfolio or reach out through the provided social media links.

---

**Built with ❤️ by Sanket Barde**
