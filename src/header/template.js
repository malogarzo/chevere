var yo = require('yo-yo');

module.exports = yo`<nav role="navigation" class="white">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Chevere Club Creativo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Inicios</a></li>
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