const HAMICO = document.getElementById("ham-ico");
const CLOSE = document.getElementById("close");
const NAVLINKS = document.getElementById("nav-links");
const MOBILE_LINKS = document.getElementById('links')

HAMICO.onclick = function () {
  NAVLINKS.style.display = "block";
  HAMICO.style.display = "none";
};

CLOSE.onclick = function () {
  NAVLINKS.style.display = "none";
  HAMICO.style.display = "block";
};


window.addEventListener('resize', function(){
    if(this.window.innerWidth >= 768){
        HAMICO.style.display = 'none';
    }else if(this.window.innerWidth < 768){
        HAMICO.style.display = 'block';
    }else if(this.window.innerWidth >= 1440){
        NAVLINKS.style.display = 'flex';
    }
});
