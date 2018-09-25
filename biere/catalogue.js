var catalogue = (function(){
    "use strict";
    window.addEventListener("load", function()
    {
//        var tplMenu = document.getElementById("tplMenu");
//         var baseMenu = document.querySelector(".menu");
//       
//        App2.Init(baseMenu, tplMenu);
        
        
         
        
        var choix = "nom";
      //  var chemin = 1;
       // var pour = "Biere";
        
        var titre = document.querySelector(".ordreTitre"); //click bouton titre
        titre.addEventListener("click", function()
        {

            choix = "nom";
           // chemin = 1;
           // console.log("btn");
           // console.log(choix);
        });

        var titre2 = document.querySelector(".ordreBrasserie");//click bouton brasserie
        titre2.addEventListener("click", function()
        {

            choix = "brasserie"; 
            //console.log("btn2");
           // console.log(choix);
        });

        var titre3 = document.querySelector(".ordreType");//click bouton type
        titre3.addEventListener("click", function()
        {

            choix = "type"; 
            //console.log(choix);


    //        console.log(choixBtn);
        });
        
        
        
        var tplBiere = document.getElementById("tplBiere");
         var base = document.querySelector(".catalogue");
        var tplInfo = document.getElementById("tplInfo");
        
        App.Init(base, tplBiere,tplInfo);
        
        
        
        
         
        
        
        
         
       
     
        var btnClick = document.querySelector(".btn");
        btnClick.addEventListener("click", function()
        {
            App.choix(choix);
//            quest-ce qui affiche
          // App.choix("biere");
        
   /*        var coeurRouge = document.querySelectorAll("i.fa.fa-heart");
            for(var i = 0; i < coeurRouge.length; i = i + 1) {
                    coeurRouge[i].style.display="none";
                }
             var coeurPlein = document.querySelectorAll(".icone");
    coeurPlein.forEach(function(btna, index)
    {
        btna.addEventListener("click", function()
        {
           
            btna.classList.toggle("change"); 
            
            if(btna.className == "icone change"){
                var vide = document.querySelectorAll("i.fa.fa-heart-o");
                for(var i = 0; i < vide.length; i = i + 1) {
                    vide[index].style.display="none";
                }

                for(var i = 0; i < coeurRouge.length; i = i + 1) {
                    coeurRouge[index].style.display="block";
                }
            }else{
                var vide = document.querySelectorAll("i.fa.fa-heart-o");
                for(var i = 0; i < vide.length; i = i + 1) {
                    vide[index].style.display="block";
                }

                for(var i = 0; i < coeurRouge.length; i = i + 1) {
                    coeurRouge[index].style.display="none";
                }
            }
            console.log(btna);
            
            
             
            
            
            
            
            
        });//btn coeur
     });
            */
            
            
            
    var Cartes = document.querySelectorAll(".carte");
    Cartes.forEach(function(carte, index)
    {
        var btnActions = carte.querySelectorAll(".action > a");
            
            btnActions.forEach(function(btn, ins) 
            {
                btn.addEventListener("click", function(evt) 
                {
                    evt.target.classList.toggle("action" + ins);//click pour voir les infos
                    
//                    App.cache();
                        choix = "Info";
                    App.choix(choix,index);
//            App3.Afficher(index);
              // console.log(Cartes[index]);
                   // App.choix("info");
                    
                    
                });
            });
        
     }); 
        
            
            
            
            
        });//btn principaux
        
       
             
       
//        
        
        
   });//listener
})();

