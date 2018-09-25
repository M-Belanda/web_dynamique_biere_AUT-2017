if (screen.width >= 1024) {
    window.addEventListener("load", function load(event){
    

/*À cacher durant l'animation*/
        var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i ++) {
            header[i].classList.add("cacheItems");//cacher header
        }

        var btn = document.querySelectorAll(".btna");
//console.log(btna.length);
        for(var i = 0; i < btn.length; i++) {
            btn[i].classList.add("cacheItems");//cacher les boutons
            btn[i].classList.remove("btn");
            
        }

        
/*fin cacher*/
        
         animationDebut();
        var img = document.createElement("img");

        img.src = "image/beer.png";
        var src = document.getElementById("biere");//chercher image

        src.appendChild(img);


       bougeBiere();

    },false);
//animation
function animationDebut(){
         var img2 = document.createElement("img");// https://www.quora.com/How-do-you-insert-an-image-in-Javascript

        img2.src = "image/beer2.png";
        var src2 = document.getElementById("biereCote");//chercher image

        src2.appendChild(img2);
        bougeBiere2();
    }
    function bougeBiere(){//mon animation
        var biere = document.getElementById("biere");
        biere.style.position="absolute";
        biere.style.marginLeft= "85vw";
        biere.style.marginTop= "0px";
        right = "0";
        function droit() {//https://www.tutorialspoint.com/javascript/javascript_animation.htm
            right++;
            biere.style.right = right + "px";

            if (right == 0) {
                clearInterval(id);
            }
            if(right == 780){
                animationFin();
            }
        }
        var id = setInterval(droit, 0.5);//pour modifier la vitesse de l'animation
    }
    function bougeBiere2(){
        var biereCote = document.getElementById("biereCote");
        biereCote.style.position="relative";
        biereCote.style.marginTop= "300px";
    }
    function animationFin(){
        clearTimeout(right);
         var aside = document.getElementsByTagName("aside");//cacher l'animation

        for(var i = 0; i < aside.length; i++) {
            aside[i].classList.add("cacheItems");
            
        }

         var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i++) {//montrer le header
            header[i].classList.remove("cacheItems");
           // console.log(header[i]);
        }

         var btn = document.querySelectorAll(".btna");//montrer les boutons
console.log(btn.length);
        for(var i = 0; i < btn.length; i++) {
            btn[i].classList.remove("cacheItems");
            btn[i].classList.add("btn");
            
        }
    }
        function toggle(){
            var arrow= document.getElementsByClassName("arrow");//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
            if (arrow[0].className == "cacheItems") {
                arrow[0].className.remove("cacheItems");
                } else {
                    arrow[0].classList.add("cacheItems");
                }
            }
//fin animation
}
if (screen.width >= 768 && screen.width <= 1023) {
    window.addEventListener("load", function load(event){
        console.log("rentre moyen");
/*À cacher durant l'animation*/
        var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i++) {
            header[i].classList.add("cacheItems");
        }
         var btn = document.querySelectorAll(".btna");

        for(var i = 0; i < btn.length; i = i + 1) {
            btn[i].classList.add("cacheItems");
            btn[i].classList.remove("btn");
            
        }
/*fin cacher*/
//        animer hamburger
        var x = document.querySelector("div.hamburger");
        x.onclick = hamburger;
//        fin animer hamburger
//animation
         
        var img = document.createElement("img");

        img.src = "image/beer.png";
        var src = document.getElementById("biere");

        src.appendChild(img);

       bougeBiere();
    },false);
    function bougeBiere(){
        var biere = document.getElementById("biere");
        biere.style.position="absolute";
        biere.style.marginLeft= "40vw";
        biere.style.marginTop= "0px"; 
        bottom = "900";
        function tombe() {
            bottom--;
            biere.style.bottom = bottom + "px";

            if (bottom == 0) {
                clearInterval(id);
            }
            if(bottom == 0){
                animationFin();
            }
        }
        var id = setInterval(tombe, 1);
    }
    function bougeBiere2(){
        var biereCote = document.getElementById("biereCote");
        biereCote.style.position="relative";
        biereCote.classList.add("cacheItems");
    }
     function animationFin(){
         var aside = document.getElementsByTagName("aside");

        for(var i = 0; i < aside.length; i = i + 1) {
            aside[i].classList.add("cacheItems");
        }

         var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i = i + 1) {
            header[i].classList.remove("cacheItems");
        }

        var btn = document.querySelectorAll(".btna");

        for(var i = 0; i < btn.length; i = i + 1) {
            btn[i].classList.remove("cacheItems");
            btn[i].classList.add("btn");
            
        }
    }

        function toggle(){
            var arrow= document.getElementsByClassName("arrow");//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
            if (arrow[0].className == "cacheItems") {
                arrow[0].classList.remove("cacheItems");
                } else {
                    arrow[0].classList.add("cacheItems");
                }
            }
//fin animation

    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav 
    //et
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js
    function hamburger() {
        console.log("change");
        var x = document.querySelector("div.containHamburger");
        x.classList.toggle("change");
        var m = document.getElementById("myTopnav");
        if (m.className === "menu topnav") {
            m.className += " responsive";
        } else {
            m.className = "menu topnav";
        }
    }
    //fin hamburger


}        
if (screen.width <= 375 ) {
    window.addEventListener("load", function load(event){
        
/*À cacher durant l'animation*/
        var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i = i + 1) {
            header[i].classList.add("cacheItems");
        }

        var btn = document.querySelectorAll(".btna");

        for(var i = 0; i < btn.length; i = i + 1) {
            btn[i].classList.add("cacheItems");
            btn[i].classList.remove("btn");
            
        }
/*fin cacher*/
// animation
        var img = document.createElement("img");

        img.src = "image/beer.png";
        img.style.height = '150px';
        img.style.width = '100px';
        var src = document.getElementById("biere");

        src.appendChild(img);
       bougeBiere();
        
        
         var x = document.querySelector("div.hamburger");
        x.onclick = hamburger;
    },false);
    
    
//animation
    function bougeBiere(){
        var biere = document.getElementById("biere");
        biere.style.position="absolute";
        biere.style.marginLeft= "20vw";
        biere.style.marginTop= "0px"; 
        bottom = "900";
        function tombe() {
            bottom--;
            biere.style.bottom = bottom + "px";

            if (bottom == 0) {
                clearInterval(id);
            }
            if(bottom == 0){
                animationFin();
            }
        }
        var id = setInterval(tombe, 1);
    }
    function bougeBiere2(){
        var biereCote = document.getElementById("biereCote");
        biereCote.style.position="relative";
        biereCote.classList.add("cacheItems");
    }
     function animationFin(){
         var aside = document.getElementsByTagName("aside");

        for(var i = 0; i < aside.length; i = i + 1) {
            aside[i].classList.add("cacheItems");
        }

         var header = document.getElementsByTagName("header");

        for(var i = 0; i < header.length; i = i + 1) {
            header[i].classList.remove("cacheItems");
        }

        var btn = document.querySelectorAll(".btna");

        for(var i = 0; i < btn.length; i = i + 1) {
            btn[i].classList.remove("cacheItems");
            btn[i].classList.add("btn");
            
        }
    }
    function toggle(){
        var arrow= document.getElementsByClassName("arrow");//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
        if (arrow[0].className == "cacheItems") {
            arrow[0].classList.remove("cacheItems");
            } else {
                arrow[0].classList.add("cacheItems");
            }
    }
//fin animation

    //hamburger
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav 
    //et
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js
    function hamburger() {
        console.log("change");
        var x = document.querySelector("div.containHamburger");
        x.classList.toggle("change");
        var m = document.getElementById("myTopnav");
        if (m.className === "menu topnav") {
            m.className += " responsive";
        } else {
            m.className = "menu topnav";
        }
    }
    //fin hamburger
}  
 