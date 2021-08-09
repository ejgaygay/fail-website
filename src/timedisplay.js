var span = document.getElementById('span');
function time() {
    span.textContent = new Date().toString();
}
setInterval(time, 1000);