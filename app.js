document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    var items = document.querySelectorAll('.grid-item');
    items.forEach(function(item) {
        observer.observe(item); 
    });
});
