

const AppCoeur = (function () {
    var _self;
    function _setTexte (texte){
        this.texte = texte;
        
        
        
        var data = {
                temps: new Date().toString(),
                texte : this.texte
            }
        localStorage.setItem("monTexte", JSON.stringify(data));
    }
    function _getTexte(){
       var res = [];
        res.push(this.texte);
        return res;
    }
    //_getTexte = () => this.texte; // _getTexte en version arrow function!
    
    function _init(){
        _self = this;
        var data = JSON.parse(localStorage.getItem("monTexte"));
       
        if(data && "texte" in data){
            this.texte = data.texte;    
        }
        console.log(this.texte);
        /*document.querySelector(".input").addEventListener("input", function(){
            console.log(this);
            console.log(this.texte);
        }.bind(this))*/
//        document.querySelectorAll(".icone")[0].addEventListener("click", ()=>{
//            console.log(this);
//            console.log(this.texte);
//        })
        
    }
    function _verif(){
        var _test = "allo";
        console.log(this);
        console.log(this.texte);
        if(this.texte == "test"){
            console.log("valeur atteinte");
        }
        else{
            console.log("valeur non atteinte");
        }
        
        setTimeout(function(){
            console.log(this);
            console.log(_test);
            console.log(this.texte)
        }.bind(this), 1000);
    }
    return {
        setTexte: _setTexte,
        getTexte : _getTexte,
        verif : _verif,
        init : _init
    }
})();

window.addEventListener("click", function(){
    var input = []; 
    AppCoeur.init();
    var textCoeur = AppCoeur.getTexte();
//    document.querySelector(".output").innerHTML = textCoeur;
    //va chercher tout les coeurs
      var rouge = document.querySelectorAll("i.fa.fa-heart");
        var f = document.querySelectorAll('.carte');
    rouge.forEach(function(btna, index)
    {
        f[index].setAttribute("id", index);//au click attribut un index au carte
        btna.addEventListener("click", function()
        {
           
            btna.classList.toggle("change"); 
            
            //rouge[index].setAttribute("id", "coeur")
            
            if(btna.className == "icone change"){
                for(var i = 0; i < coeurRouge.length; i = i + 1) {
                    rouge[index].classList.remove("cacheItems");
                    f[index].setAttribute("id", "coeur"+index);
                    //document.getElementById('baa').setAttribute("id", "coeur");
                    console.log(index);
                }
            }else{

                for(var i = 0; i < coeurRouge.length; i++) {
                    rouge[index].classList.add("rouge");
                    rouge[index].classList.remove("gris");
                }
            }
           // console.log(btna);  
        });//btn coeur
     });
    
    var Carto = document.querySelectorAll(".carte");
    var Info = document.querySelectorAll(".info");
    
    
   // var xmlString = textCoeur;
   //var parser = new DOMParser();
  //var  doc = parser.parseFromString(xmlString, "text/xml");
 

//console.log(doc.firstChild);
   console.log(rouge);
//
//        for(var i = 0; i <= Carto.length; i++) {//sa affiche seulement un coeur à la fois
//             if(Carto[i].id == textCoeur){
//                 blanc[i].classList.add("cacheItems");
//                 rouge[i].classList.remove("cacheItems");
//             }
//        }
    
    console.log(textCoeur);
    //console.log(doc);
   // console.log(rouge[i].id);
    textCoeur.forEach(function(index){
        console.log(textCoeur);
    });
 var v = document.querySelectorAll('.info'); 
    
     Carto.forEach(function toto (carte, index){//pour faire correspondre le mot dans le webstorage et l'id
//        console.log("ici");
        if("coeur" + Carto[index].id == textCoeur){
            rouge[index].classList.add("rouge");
            rouge[index].classList.remove("gris");
           // document.getElementById(Carto[index].id).innerHTML = Carto[index];
        }
    });
    
    
    
   
    Carto.forEach(function(carte, index)
    {
        carte.addEventListener("click", function(evt){
            //var g = String(index);
            //console.log(evt.target);
         
            input.push("coeur"+index);//mettre les mots dans un array
            AppCoeur.setTexte(input);
        }); 
     });
    
    AppCoeur.verif();
    
});








//       Place un id sur tes bières (dans tes données) et utilise celui-ci pour identifier quelle est la bière qui est favorite. Tu pourras ensuite (en utilisant un attribut id) faire la correspondance entre le coeur et les données.






