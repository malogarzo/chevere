var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-nav')

page('/', function (ctx, next) {
  
  main.innerHTML = '<a href="/signup">HOLAAAA</a>'
})

page('/signup', function (ctx, next) {
  var el = yo`<nav role="navigation" class="white">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Chevere Club Creativo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Club</a></li>
          <li><a href="#socios">Socios</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Club</a></li>
          <li><a href="#">Socios</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul><a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>`;

  empty(main).appendChild(el);

})

page();


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
