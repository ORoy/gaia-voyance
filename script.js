(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  function setOpen(open) {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Fermer' : 'Menu';
  }
  btn.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
})();
