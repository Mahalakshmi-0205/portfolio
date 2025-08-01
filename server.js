/**
 * Simple Node.js server to serve the portfolio with cross-browser compatibility
 * Run with: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

// Create the server
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Handle redirects for root or specific redirect paths
  if (req.url === '/' || req.url === '/go' || req.url === '/redirect') {
    res.writeHead(302, {
      'Location': '/index.html',
      'X-UA-Compatible': 'IE=edge,chrome=1'
    });
    return res.end();
  }
  
  // Get the file path
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // If the URL doesn't have an extension, assume it's a directory and look for index.html
  if (!path.extname(filePath)) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // Get the file extension
  const extname = path.extname(filePath).toLowerCase();
  
  // Get the MIME type based on the file extension
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, try serving the 404 page
        fs.readFile(path.join(__dirname, 'redirect.html'), (err, content) => {
          if (err) {
            // If 404 page is not found, send a simple 404 response
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<html><body><h1>404 Not Found</h1><p>The page you requested could not be found.</p><p><a href="/">Go to homepage</a></p></body></html>');
          } else {
            // Serve the 404 page
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content);
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Set cross-browser compatible headers
      const headers = {
        'Content-Type': contentType,
        'X-UA-Compatible': 'IE=edge,chrome=1',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=86400'
      };
      
      // Add CORS headers for font files
      if (['.ttf', '.woff', '.woff2', '.eot', '.otf'].includes(extname)) {
        headers['Access-Control-Allow-Origin'] = '*';
      }
      
      // Success response
      res.writeHead(200, headers);
      res.end(content);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});