function changeMe(arr) {
   for(i = 0;arr.length;i++){
   var fullName = i+1+'.'+' '+arr [i][0]+' '+ arr [i][1]
    var objectData = {}
    objectData.firstName = arr [i][0];
    objectData.lastNama = arr[i][1];
    objectData.gender = arr[1][2];
   
   if(arr [i][3] === undefined){
      objectData.age = 'Invalid Birth Year'
   }else{
      objectData.age = 2019 - arr[i][3]
   }
     console.log (fullName)
     console.log(objectData)
   }
}
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""