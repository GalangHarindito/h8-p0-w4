function changeMe(arr) {
   
    if(arr.length === 0){
        console.log('""')
    }else{
    for(var i=0;i<arr.length;i++){
        var fullName = i+1+'.'+' '+arr [i][0]+' '+ arr [i][1] +' :'
            result = {}
            result.firstName = arr[i][0],
            result.lastName = arr[i][1],
            result.gender = arr[i][2]

         if(arr[i][3] === undefined){
            result.age = 'invalid Birth Year'
         }else{
            result.age = 2019 - arr[i][3]
      }  
    console.log(fullName)
    console.log(result)
    } 
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
  changeMe([]); // ""