function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad ='abcdefghijklmnopqrstuvwxyz'
    var result =''
    var index =[]
    
    for(var i=0;i<abjad.length;i++){
      for(var j=0;j<str.length;j++){
          if(abjad[i] === str[j]){
              index.push(i)
          }
        }
        var sort = manualSort(index)
        for(var k=0;k<sort.length;k++){
            if(i === sort[k]){
                result += abjad[i]
            }
        }
     }
       return result
    }

    //------------------ MANUAL SORT -----------------------
    function manualSort (array) {
        // code below here
        for(var i=array.length-1;i>=0;i--){
          for (var j=0;j<i;j++){
            if(array[j]>array[j+1]){
              var temp = array[j]
              array[j] = array[j+1]
              array[j+1]=temp
            }
          }
        }
        return array
      };
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'