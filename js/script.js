document.getElementById('menu-btn').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

document.getElementById('close-btn').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
});