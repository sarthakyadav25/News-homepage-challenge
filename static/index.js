const trigger = ()=>{
    const checkbox = document.getElementById("check");
    const ulist = document.getElementById('list-frame');
    const openbar = document.getElementById('open');
    const overlay = document.getElementById("overlay");
    // const closebar = document.getElementById('close');
    if (checkbox.checked){
        ulist.style = "right:0;";
        openbar.src = "../assets/images/icon-menu-close.svg"
        openbar.style = "position:fixed; right:1em;"
        overlay.style.display = "block";
    }
    else{
        ulist.style = "right:-100;";
        openbar.src = "../assets/images/icon-menu.svg"
        openbar.style = "position:none;"
        overlay.style.display = "none";
    }
    
}

const coll = document.getElementsByClassName("checkbtn");
const menubar = Array.from(coll)[0];


menubar.addEventListener('click',trigger);

function updateImageSource() {
    var image = document.getElementById("main-img");
    var isSmallScreen = window.matchMedia("(max-width: 675px)").matches;
    
    if (isSmallScreen) {
      image.src = "/assets/images/image-web-3-mobile.jpg";
    } else {
      image.src = "/assets/images/image-web-3-desktop.jpg";
    }
  }
  
  // Call the function initially and whenever the window is resized
  updateImageSource();
  window.addEventListener("resize", updateImageSource);

