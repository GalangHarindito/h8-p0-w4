function checkAB(num) {
    var indexA = ''  
    var indexB = ''
     for(var i=0;i<num.length;i++){
        if(num[i] === 'a'){
           indexA = i
          
        }else if(num[i] === 'b'){
           indexB = i
        }
    }
    if(indexA - indexB === 4 || indexB - indexA === 4 ){
        return true
    }else{
        return false
    }
    //  console.log(indexA,indexB)
    }
  



  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false