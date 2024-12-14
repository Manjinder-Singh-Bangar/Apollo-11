

document.addEventListener('DOMContentLoaded', () => {
    let hotspots = document.querySelectorAll('.Hotspot')
console.log(hotspots)
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function (e) {
        console.log(e)
        // Get the image source from the button's data attribute
        const imgSrc = this.getAttribute('data-img-src');
        console.log(`Clicked hotspot with imgSrc: ${imgSrc}`); // Debugging log

        // Find the corresponding image in the gallery
        const targetImage = document.querySelector(`.model-gallery img[src='${imgSrc}']`);
        
        
        console.log(targetImage); // Debugging log

        if (targetImage) {
            // Scroll the image into view smoothly
            targetImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetImage.classList.add('highlight');

            setTimeout(() => {
                // Remove the highlight from all images
                document.querySelectorAll('.model-gallery img').forEach(img => img.classList.remove('highlight'));
    
                // Add the highlight to the clicked image
            }, 5000);
            // Add highlight border after scrolling
            // Adjust the delay as needed to ensure scrolling is complete
        } else {
            console.error(`No image found for source: ${imgSrc}`);
        }
    });
});

    if(document.querySelector(".highlight")){
        
    }

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        if(navLinks.classList.contains('active')){
            nav.style.overflowX = 'visible';
        }else{
            nav.style.overflowX = 'hidden';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});


