function tukarBesarKecil(kalimat) {
    var upcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var locase = 'abcdefghijklmnopqrstuvwxyz'
    var result = '';
    
    for (var i = 0;i<kalimat.length;i++){
      console.log(kalimat[i])
       for (var j = 0;j<locase.length;j++){
        
        //  if(kalimat [i][0] == locase[j]){
        //  result += upcase[j]  
        //  } 
        //  else if(kalimat[i][0]==upcase[j]){
        // result += locase[j] 
        //  }
        //  else if(kalimat [i] === ' '){
        //    result += ' '
        //  };
        // console.log(i, j, '=> i, j ' )
        // console.log(kalimat.length[i], locase.length[j], '=> kalimat.length[i], locase.length[j]  ')
       }    
  }
  // return result  
  
}
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  // console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  // console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  // console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  // console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"