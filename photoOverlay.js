function openOverlay(src) {
    document.getElementById('overlay-img').src = src;
    document.getElementById('overlay').style.display = 'flex';
}
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}