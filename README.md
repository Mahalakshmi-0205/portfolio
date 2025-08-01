# Mahalakshmi R's Portfolio

A retro game-styled portfolio website showcasing my skills and experience as an ECE Engineer. Optimized to work in any browser, including older versions.

## Live Demo

Visit the live site: [Mahalakshmi R's Portfolio](https://mahalakshmiramkumar.github.io/portfolio-1/)

### Quick Access URLs

The following URLs can be used to access the portfolio from any browser:

- Main URL: [https://mahalakshmiramkumar.github.io/portfolio-1/](https://mahalakshmiramkumar.github.io/portfolio-1/)
- Short URL: [go.html](https://mahalakshmiramkumar.github.io/portfolio-1/go.html) - Simple redirect with loading animation
- Redirect: [redirect.html](https://mahalakshmiramkumar.github.io/portfolio-1/redirect.html) - Basic HTML redirect
- PHP Redirect: [redirect.php](https://mahalakshmiramkumar.github.io/portfolio-1/redirect.php) - For PHP-enabled servers

### Server Options

Multiple server options are available for hosting this portfolio:

1. **GitHub Pages** (current): Automatically deployed from the main branch
2. **Netlify**: Ready to deploy with included `netlify.toml` configuration
   - [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mahalakshmiramkumar/portfolio-1)
3. **Vercel**: Ready to deploy with included `vercel.json` configuration
   - [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mahalakshmiramkumar/portfolio-1)
4. **Node.js Server**: Run locally or deploy to any Node.js hosting
   ```
   # Install dependencies (optional)
   npm install
   
   # Start the server
   npm start
   ```
5. **Python Server**: For quick local testing
   ```
   python -m http.server 8000
   ```
6. **Any HTTP Server**: The site is compatible with Apache, Nginx, or any standard web server

## Features

- Retro game-inspired design
- Interactive particle background
- Skill progress bars with animations
- Responsive layout for all devices
- Cross-browser compatibility (works in all browsers)
- Graceful degradation for older browsers

## Technologies Used

- HTML5
- CSS3 (with vendor prefixes for cross-browser support)
- JavaScript (with polyfills for older browsers)
- Particles.js
- Fallback scripts for browsers without modern features

## Local Development

To run this project locally:

1. Clone the repository
2. Navigate to the project directory
3. Start a local server (e.g., `python -m http.server 8000`)
4. Open `http://localhost:8000` in your browser

## Deployment

This site is deployed using GitHub Pages. To deploy your own version:

1. Fork this repository
2. Go to repository Settings > Pages
3. Set source branch to 'main'
4. Your site will be available at `https://[username].github.io/portfolio-1/`

## Browser Compatibility

This portfolio is designed to work in all browsers:

- Modern browsers (Chrome, Firefox, Safari, Edge): Full experience with all animations and effects
- Older browsers (IE11, older versions of Chrome/Firefox): Graceful degradation with fallback animations
- Very old browsers (IE9, etc.): Basic content display with simplified styling
- No JavaScript: Basic content remains accessible

The site uses:
- CSS vendor prefixes
- JavaScript polyfills
- Fallback mechanisms
- Feature detection