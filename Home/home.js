import { Application } from 'https://unpkg.com/@splinetool/runtime';

function loadSpline(canvasId, splineUrl) {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
    const app = new Application(canvas);
    app.load(splineUrl);
  } else {
    console.warn(`Canvas with id "${canvasId}" not found.`);
  }
}

// Load Spline scenes
loadSpline('canvas3d', 'https://prod.spline.design/s0PyEl1SabD9KPhn/scene.splinecode');
loadSpline('canvas3d-2', 'https://prod.spline.design/97wD7unav6HNcZhV/scene.splinecode');
function createNewsFadeInEffect() {
  // Setează starea inițială - conținutul news invizibil
  gsap.set(".n-h1-box, .desc-box-news, .button-box-news, .scroll-indicator", {
    opacity: 0,
    y: 80,
    scale: 0.8
  });

  // Setează nodes individual invizibile
  gsap.set(".nodes", {
    opacity: 0,
    y: 60,
    scale: 0.7
  });

  // Timeline principal pentru efectul de fade in
  const newsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".news",
      start: "top 90%",
      end: "top 10%",
      toggleActions: "play none none reverse"
    }
  });

  // Secvența de animații profesionale
  newsTimeline
    // 1. Fade in pentru n-h1-box
    .to(".n-h1-box", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    }, 0)
    
    // 2. Fade in pentru desc-box-news cu delay
    .to(".desc-box-news", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power2.out"
    }, 0.3)
    
    // 3. Fade in pentru nodes cu stagger profesional
    .to(".nodes", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "back.out(1.2)",
      stagger: {
        amount: 0.8,
        from: "start"
      }
    }, 0.6)
    
    // 4. Fade in pentru button și scroll indicator
    .to(".button-box-news, .scroll-indicator", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, 1.2);
}

// Wait for GSAP to load and then initialize effects
function initializeEffects() {
  // Check if GSAP is loaded
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize the fade-in effect
    createNewsFadeInEffect();
  } else {
    // If GSAP is not loaded yet, wait a bit and try again
    setTimeout(initializeEffects, 100);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeEffects);


document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const yearElTwo = document.querySelector(".year-2");
const currentYearTwo = new Date().getFullYear();
yearElTwo.textContent = currentYearTwo;


