function checkAB(num) {
    var indexA = []
    var indexB = []
     for(var i=0;i<num.length;i++){
        if(num[i] === 'a'){
           indexA.push(i)   
        }else if(num[i] === 'b'){
           indexB.push(i)
        }
    }
    for(var j=0;j<indexA.length;j++){
        for(var k=0;k<indexB.length;k++)
         if(indexA[j] - indexB[k] === 4 || indexB[k] - indexA[j] === 4 ||indexA[j+1] - indexB[k] === 4 || indexA[j] - indexB[k+1] === 4){
        return true
         }else{
             return false
         }
    }if(indexA.length === 0 || indexB.length === 0){
        return false
    }   
    }
   
    
  



  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB('bbbba')); // true