var App = (function()
 {
    "use strict";
    
    var _templ, _templ1, _templ2, _base,_chemin;
        function _Afficher(data){//faire afficher les bieres
            
            if(_templ && _base ){ //Si le gabarit et le noyau sont définis
                _base.innerHTML = "";  // Vider le HTML

                data.forEach(function(donnee){       // Pour chaque maire
                    var elementdonnee = _templ.cloneNode(true);    // cloner le gabarit

                    // Traitement du gabarit
                    for(var prop in donnee){     
                        elementdonnee.innerHTML = elementdonnee.innerHTML.replace("\{\{"+prop+"\}\}", donnee[prop]);
                    }
                    _base.appendChild(document.importNode(elementdonnee.content, true));        // Ajout du gabarit dans le HTML
                });
            }
//            console.log(data);
//            console.log(_base);
          //  console.log(_templ);
        }
    
    
         function _trier(choix, num){
                // Accès à l'objet Bieres
               var aBieresTrouve = Bieres.liste({"valeur": choix,"num": num });    // Lancer la recherche avec l'objet bieres.
             //console.log(aBieresTrouve);
             //console.log(choix);
            // console.log(num);
//             if(num != 1){
               _Afficher(aBieresTrouve);
//             }else{
//                 _cache;
//             }
        }  
    
//        function _cache(){
//            var aBieresRien = Bieres.taille({"num": 1});
//            _Afficher(aBieresRien);
//        }
    
        function _info(index){
            var aInfos = Bieres.setInfo({"cela": index}); 
            _Afficher(aInfos);
        }
    
        function _choix(param, num){
            if(param === "Info"){
                //afficher un info
                _templ = _templ2;
            }else{
                
                //afficher les biere
                _templ = _templ1;
            }
            _trier(param, num);
             
        }
//        function _donnee(param){
//            var adonnee = Bieres.chemin({"lequel": param}); 
//            _Afficher(adonnee);
//        }
    
    /* Fonction d'initialisation. Elle doit être appelée en premier pour définir le noyau d'insertion du HTML et le gabarit */
    function _init(base, templ1, templ2){
        
        _base = base;
         _templ1 = templ1;
         _templ2 = templ2;
            
       // var aff = Bieres.liste({"valeur": "nom"});// Permet de trier préalablement les résultats
        
    }
    

    
    return {
        trier:_trier,
        Init: _init,
//        cache: _cache,
        choix:_choix,
        info: _info
//        donnee: _donnee,
        
    };

})();//functions



