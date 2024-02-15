const multiplication=(nombre ,taille) => {
    var multi;
      for( let i=0 ; i < taille; i++){
         multi +=` ${nombre} x ${i}= ${nombre*i}<br>`
      }
      return multi;
}
module.exports = multiplication;