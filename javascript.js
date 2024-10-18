function themsChanger(){
    // Get the button and body elements
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const toggleButtonIcon = themeToggleButton.querySelector("i");
    
    // Function to initialize the theme based on saved settings or system preference
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme) {
            body.classList.add(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.classList.add("dark");
        }
        
        updateNavbarAndSections(); // Update the navbar and sections to match the current theme
    
        updateThemeIcon();
    };
    
    // Function to toggle theme
    const toggleTheme = () => {
        const isDark = body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateNavbarAndSections();
    
         updateThemeIcon();
    };
    
    // Function to update navbar and sections based on theme
    const updateNavbarAndSections = () => {
        const isDark = body.classList.contains("dark");
        const nav = document.querySelector("nav");
        
        // Update navbar style based on the theme
        nav.classList.toggle("dark", isDark);
        
        // Update sections style based on the theme
        document.querySelectorAll("section").forEach(section => {
            section.classList.toggle("dark", isDark);
    
        });
        
    };
    
    const updateThemeIcon = () => {
        const isDark = body.classList.contains("dark");
        toggleButtonIcon.classList.toggle("fa-sun", !isDark); // Show sun in light mode
        toggleButtonIcon.classList.toggle("fa-moon", isDark); // Show moon in dark mode
    };
    
    // Event listener for the button
    themeToggleButton.addEventListener("click", toggleTheme);
    
    
    // Initialize theme on page load
    initializeTheme();
    
    
}
 function revealToSpan(){

  document.querySelectorAll(".reveal")
  .forEach(function(elem){
      var parent=document.createElement("span");
      var child=document.createElement("span");
  
      parent.classList.add("parent");
      child.classList.add("child");
  
      child.innerHTML=elem.innerHTML;
      parent.appendChild(child);
  
      elem.innerHTML=" ";
      elem.appendChild(parent);
  })
  
} 
function loaderAnimation(){
      
    var tl=gsap.timeline();
  tl
    .from(".child span",{
      x:100,
      stagger:.2,
      duration: 1.4,
      ease:Power3.easeInOut
    })
   
    .to(".parent .child",{
      y:"-100%",
      duration: 1,
      ease:Circ.easeInOut
    })
  
}
function homeAnimation(){
  window.onload = function() {
    const loader = document.getElementById('loader');
    const home = document.getElementById('all');
    const navbar = document.querySelector('nav');
    const menuItems = document.querySelectorAll('nav #nav-list li');
   
    // // Trigger the fade-out animation for the loader using GSAP
    gsap.to(loader,{ opacity: 1, duration: 3.2, onComplete: () => {
        loader.style.display = 'none';
        home.classList.remove('hidden');
  
        // Animate navbar
        gsap.fromTo(navbar, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5 }
        );
  
        // Animate each li element
        menuItems.forEach((item, index) => {
            gsap.fromTo(item, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.7, delay: index * 0.2 }
            );
        });
  
        // Animate other elements
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            gsap.fromTo(element, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, delay: menuItems.length * 0.2 + index * 0.3 }
            );
        });
    }});
  };
}
function navFunction(){

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle mobile menu visibility
menuIcon.addEventListener('click', () => {
  const isOpen = menuIcon.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  menuIcon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close mobile menu when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Function to change active link based on scroll position
function changeActiveLink() {
  let currentSection = 'home'; // Default to home section

  // Iterate through sections to find the one currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;  // Adjust for header height or padding
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  // Update active class for desktop and mobile nav links
  [navLinks, mobileMenuLinks].forEach(linkGroup => {
    linkGroup.forEach(link => {
      const isActive = link.getAttribute('href').includes(currentSection);
      link.classList.toggle('active', isActive);
    });
  });
}

// Call the function on scroll
window.addEventListener('scroll', changeActiveLink);

// Set only "Home" link as active when the page loads
function setHomeAsActiveOnLoad() {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes('home'));
  });
  mobileMenuLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes('home'));
  });
}

// Ensure the correct link is highlighted on page load or refresh
document.addEventListener('DOMContentLoaded', () => {
  setHomeAsActiveOnLoad();
  changeActiveLink();  // Call this to check scroll position in case the page loads mid-scroll
});





// Call the function on scroll
window.addEventListener('scroll', changeActiveLink);

// Trigger the function on page load in case a section is already in view
document.addEventListener('DOMContentLoaded', changeActiveLink);


// Scroll to Top Button with GSAP
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        gsap.to(scrollUpBtn, { display: 'block', opacity: 1, duration: 0.4 });
    } else {
        gsap.to(scrollUpBtn, { display: 'none', opacity: 0, duration: 0.4 });
    }
});

scrollUpBtn.addEventListener('click', () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0.2, ease: 'power2.inOut' });
});

}
function buttontoSection(){
    document.addEventListener('DOMContentLoaded', () => {
        // Cache DOM elements for better performance
        const scrollButton1 = document.getElementById('scrollBtn');
        const scrollButton2 = document.getElementById('box');
        const section2 = document.getElementById('about');
        const section3 = document.getElementById('contact');
      
        // Function to scroll to a specific section
        const scrollToSection = (targetSection) => {
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        };
      
        // Add event listeners for each button
        scrollButton1?.addEventListener('click', () => scrollToSection(section2));
        scrollButton2?.addEventListener('click', () => scrollToSection(section3));
      });  
}
function skillToggleButton(){

    document.addEventListener('DOMContentLoaded', () => {
        // Select elements
        const toggleSwitch = document.getElementById('toggleSwitch');
        const content1 = document.getElementById('content1');
        const content2 = document.getElementById('content2');
        const toggleBtn = document.querySelector('.toggle-btn');
        
        // Check for the presence of essential elements
        if (!toggleSwitch || !content1 || !content2 || !toggleBtn) {
            console.error('One or more elements are missing in the DOM.');
            return;  // Stop execution if elements are missing
        }
    
        // Toggle switch event listener
        toggleSwitch.addEventListener('change', () => {
            // Toggle between the content areas
            if (toggleSwitch.checked) {
                content1.classList.remove('carousel-active');
                content2.classList.add('carousel-active');
                toggleBtn.textContent = 'Tools';
            } else {
                content2.classList.remove('carousel-active');
                content1.classList.add('carousel-active');
                toggleBtn.textContent = 'Skills';
            }
        });
     });

}
function cvButton(){
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1B-lhYHHyMcJDFHsaOhKUZ6Be_ooMIXpF';

    // Function to add download functionality to a button
    function setupDownload(buttonId, messageId) {
        document.getElementById(buttonId).addEventListener('click', () => {
            const button = document.getElementById(buttonId);
            const message = document.getElementById(messageId);
    
            // Indicate that download is starting
            button.textContent = 'Downloading...';
            button.classList.add('downloading');
    
            // For mobile devices, redirect directly to the download link
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                window.location.href = cvUrl;
                showMessage('Download started on mobile!', 'success', messageId);
            } else {
                // For desktop, simulate a download using a hidden anchor tag
                const a = document.createElement('a');
                a.href = cvUrl;
                a.download = 'My_CV.pdf'; // Optional: Set the file name
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
    
                // Show success message after triggering the download
                showMessage('Download started on desktop!', 'success', messageId);
            }
    
            // Reset the button state after download starts
            button.textContent = 'Download CV';
            button.classList.remove('downloading');
        });
    }
    
    // Function to display a pop-up message
    function showMessage(text, type, messageId) {
        const message = document.getElementById(messageId);
        message.textContent = text;
        message.className = `message ${type}`; // Set the message type (success/error)
        message.style.display = 'block'; // Show the message
        message.style.opacity = '1'; // Ensure visibility
        message.style.transform = 'translateY(0)'; // Reset position
    
        // Hide the message after 3 seconds
        setTimeout(() => {
            message.style.opacity = '0'; // Fade out
            message.style.transform = 'translateY(-20px)'; // Move up slightly
            setTimeout(() => {
                message.style.display = 'none'; // Hide it completely
            }, 500); // Wait for the fade-out transition to complete
        }, 3000); // Show the message for 3 seconds
    }
    
    // Set up download functionality for both buttons
    setupDownload('downloadButton1', 'message1');
    setupDownload('downloadButton2', 'message2');
    

}


themsChanger();
revealToSpan();
loaderAnimation();
homeAnimation();
navFunction();
buttontoSection();
skillToggleButton();
cvButton();


