function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    result = ''
    var a = 'abcdefghijklmnopqrstuvwxyz0123456789-'
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'

    for(var i=0;i<kalimat.length;i++){
        for(var j=0;j<a.length;j++){
            if(kalimat[i] === a[j]){
                result += A[j]
            }else if(kalimat[i] === A[j]){
                result += a[j]
            }
         }
           if(kalimat[i] === ' '){
               result += ' '
           }      
       }
       return result
     }
     
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"