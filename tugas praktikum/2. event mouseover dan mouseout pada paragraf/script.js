const hoverText = document.getElementById('hoverText');

hoverText.addEventListener('mouseover', function() {
    hoverText.style.color = 'yellow';
    });

hoverText.addEventListener('mouseout', function() {
    hoverText.style.backgroundcolor = '';
    });