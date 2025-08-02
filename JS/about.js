document.addEventListener('DOMContentLoaded', function() {
    // Journey Carousel Data
    const journeyData = [
        {
            year: "2022",
            title: "HTML/CSS Basics",
            description: "Started learning web development fundamentals and building first websites."
        },
        {
            year: "2022",
            title: "JavaScript",
            description: "Began creating interactive web applications and learning core concepts."
        },
        {
            year: "2023",
            title: "Frontend Development",
            description: "Dived deeper into modern frameworks and responsive design."
        },
        {
            year: "2024",
            title: "Laravel",
            description: "Started learning backend development with PHP and Laravel."
        },
        {
            year: "2024",
            title: "React/Next.js",
            description: "Exploring advanced frontend frameworks and SSR applications."
        }
    ];


    // Initialize Journey Carousel
    const journeyTrack = document.querySelector('.journey-track');
    journeyData.forEach(item => {
        const journeyItem = document.createElement('div');
        journeyItem.className = 'journey-item glass-container';
        
        journeyItem.innerHTML = `
            <div class="journey-year">${item.year}</div>
            <h3 class="journey-title">${item.title}</h3>
            <p class="journey-description">${item.description}</p>
        `;
        
        journeyTrack.appendChild(journeyItem);
    });
});