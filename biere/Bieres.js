var Bieres = (function(){
    "use strict";
    
            var _listeBiere = listeBiere;
        
            
            
//            var _listeMenu = listeMenu;
        
    
    function _tri(ordre){
       // console.log(ordre);
        if(ordre== "brasserie"){//trier par brasserie
        _listeBiere.sort(function(a, b){
            if(a.brasserie.toUpperCase() < b.brasserie.toUpperCase())
            {
                return -1;
            }
            else if(a.brasserie.toUpperCase() > b.brasserie.toUpperCase())
            {
                return 1;
            }
            
            return 0;
        });
        }else if(ordre== "nom"){//trier par titre
            _listeBiere.sort(function(a, b){
            if(a.nom.toUpperCase() < b.nom.toUpperCase())
            {
                return -1;
            }
            else if(a.nom.toUpperCase() > b.nom.toUpperCase())
            {
                return 1;
            }
            
            return 0;
        });
        }else if(ordre== "type"){ //trier par type
            _listeBiere.sort(function(a, b){
            if(a.type.toUpperCase() < b.type.toUpperCase())
            {
                return -1;
            }
            else if(a.type.toUpperCase() > b.type.toUpperCase())
            {
                return 1;
            }
            
            return 0;
        });
        }
    }
    
    function _reduireTaille(taille){ //avoir qu'une chose a afficher
        
        var resultat = [];
        
            for(var i=0; i< _listeBiere.length;i++){
//            if(valeur.toUpperCase() == _listeMaire[i].nom.toUpperCase() || valeur.toUpperCase() == _listeMaire[i].prenom.toUpperCase()){
//                resultat.push(_listeMaire[i]);
//            }
//            for(var i=0;i<=taille;i++){
                if(taille == i){
                    resultat.push(_listeBiere[i]);
                }
                   
            
        }
      //  console.log(taille);
       // console.log(resultat);
        
        return resultat;
    }
//    function _choixInfo(param){
//        var resultat = [];
//        
////            for(var i=0;i<=taille;i++){
//              resultat.push(_listeInfo[param]);
////            }
//        return resultat;
//    }
//   
//    
//    
//    function _setInfo(param){
//        var resultat =_choixInfo(param.cela);
//        console.log(param);
//            
//        return resultat;
//    }
//   function _chemin(param){
//       _listeBiere.forEach(function(donnee){
////           console.log(donnee);
//           _listeBiere[param];
//       });
//       console.log(param);
//   }
   
    function _liste(param){//pour filtrer l'information
      var resultat = [];
        console.log(param);
        if(param.valeur == "nom"){
            _tri(param.valeur);
            return _listeBiere;
        }else if(param.valeur == "brasserie"){
            _tri(param.valeur);
            return _listeBiere;
        }else if(param.valeur == "type"){
            _tri(param.valeur);
            return _listeBiere;
        }else if(param.valeur == "Info"){
            resultat = _reduireTaille(param.num);
            console.log(param.num);
            console.log(resultat);
            return resultat;
        }
        
        
        
        
    }
    
//    function _taille(param){
//        var resultat = [];
//            resultat =_reduireTaille(param.num);
//            return resultat;
//    }
// 
    
    
return {
         "liste" : _liste,
//         "setInfo" : _setInfo,
//         "taille" : _taille,
//        "chemin" : _chemin
    };
    
})();