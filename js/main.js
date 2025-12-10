document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.className = 'mode-toggle';
    document.body.insertBefore(darkModeToggle, document.body.firstChild);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Search Functionality
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.id = 'searchBox';
    searchBox.placeholder = 'Search components...';
    searchBox.className = 'search-box';
    document.querySelector('.container').insertBefore(searchBox, document.querySelector('h1'));

    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const components = document.querySelectorAll('.component');
        
        components.forEach(component => {
            const text = component.textContent.toLowerCase();
            component.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Make Components Expandable/Collapsible
    const components = document.querySelectorAll('.component');
    components.forEach(component => {
        const title = component.querySelector('h2');
        const content = document.createElement('div');
        
        // Move all content after the h2 into the new div
        while(component.children[1]) {
            content.appendChild(component.children[1]);
        }
        
        component.appendChild(content);
        
        // Add expand/collapse functionality
        title.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            title.classList.toggle('collapsed');
        });
        
        // Add visual indicator
        title.style.cursor = 'pointer';
        title.innerHTML += ' <span class="toggle-indicator">▼</span>';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});