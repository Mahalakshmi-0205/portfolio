// Fallback script for browsers that don't support particles.js

(function() {
    // Check if particles.js failed to load or initialize
    function checkParticles() {
        var particlesContainer = document.getElementById('particles-js');
        if (particlesContainer && particlesContainer.children.length === 0) {
            console.log('Particles.js not working, applying fallback background');
            applyFallbackBackground();
        }
    }

    // Apply a simple fallback background
    function applyFallbackBackground() {
        var particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            // Add a static background with dots
            particlesContainer.style.background = '#0a0a0a';
            
            // Create static dots as a fallback
            for (var i = 0; i < 50; i++) {
                var dot = document.createElement('div');
                dot.className = 'fallback-dot';
                dot.style.position = 'absolute';
                dot.style.width = '3px';
                dot.style.height = '3px';
                dot.style.backgroundColor = '#0ff';
                dot.style.borderRadius = '50%';
                dot.style.opacity = '0.5';
                
                // Random position
                dot.style.left = Math.floor(Math.random() * 100) + '%';
                dot.style.top = Math.floor(Math.random() * 100) + '%';
                
                particlesContainer.appendChild(dot);
            }
            
            // Add some static lines
            for (var j = 0; j < 20; j++) {
                var line = document.createElement('div');
                line.className = 'fallback-line';
                line.style.position = 'absolute';
                line.style.height = '1px';
                line.style.backgroundColor = '#0ff';
                line.style.opacity = '0.2';
                
                // Random position and width
                line.style.left = Math.floor(Math.random() * 80) + '%';
                line.style.top = Math.floor(Math.random() * 100) + '%';
                line.style.width = Math.floor(Math.random() * 100) + 'px';
                
                // Random rotation
                var rotation = Math.floor(Math.random() * 180);
                line.style.transform = 'rotate(' + rotation + 'deg)';
                
                particlesContainer.appendChild(line);
            }
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(function() {
            // Wait a bit to check if particles.js initialized
            setTimeout(checkParticles, 1000);
        }, 1);
    } else {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(checkParticles, 1000);
            });
        } else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') {
                    setTimeout(checkParticles, 1000);
                }
            });
        }
    }
})();