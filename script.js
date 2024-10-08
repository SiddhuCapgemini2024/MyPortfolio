// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

document.getElementById('scrollToTop').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Modal functionality
function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('projectModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
};
