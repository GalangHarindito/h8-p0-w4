function checkAB(num) {
    var result = ''
    var Cek1 = ''
    var Cek2 = ''

    for (i = 0;i<num.length;i++){
        if (num [i] == 'a' ){
            Cek1 = i
        } 
        if(num [i] == 'b'){
            Cek2 = i
        }
        
    }
    return (Cek1 - Cek2 === 4 || Cek2 - Cek1 === 4)
    // console.log(Cek1)
    // console.log(Cek2)
}


  
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false