// Feature detection and polyfill loading
(function() {
    // Check for requestAnimationFrame support and add polyfill if needed
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }
})();

// Cross-browser event listener function
function addEvent(element, event, callback) {
    if (element.addEventListener) {
        element.addEventListener(event, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, callback);
    } else {
        element['on' + event] = callback;
    }
}

// Initialize when DOM is ready
function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        addEvent(document, 'DOMContentLoaded', fn);
    }
}

domReady(function() {
    // Check if particles.js is loaded
    if (typeof particlesJS !== 'function') {
        console.warn('particles.js is not loaded. The background animation will not work.');
        return;
    }
    
    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#0ff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    // Add fallback for browsers that don't support CSS animations
    if (!('animation' in document.documentElement.style) && 
        !('webkitAnimation' in document.documentElement.style) && 
        !('mozAnimation' in document.documentElement.style) && 
        !('msAnimation' in document.documentElement.style)) {
        
        console.warn('CSS animations not supported. Some visual effects may not work.');
        
        // Simple fallback for glitch effect
        var glitchText = document.querySelector('.glitch-text');
        if (glitchText) {
            setInterval(function() {
                glitchText.style.marginLeft = (Math.random() * 4 - 2) + 'px';
                glitchText.style.marginTop = (Math.random() * 4 - 2) + 'px';
            }, 100);
        }
        
        // Simple fallback for power bars
        var powerLevels = document.querySelectorAll('.power-level');
        for (var i = 0; i < powerLevels.length; i++) {
            var width = powerLevels[i].style.width || '0%';
            powerLevels[i].style.width = width;
        }
    }
});