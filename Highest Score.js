function highestScore (students) {
    var result = {}
    var listClass = []
    var classStudents = {};
    var classKey = []



    // COPY LIST CLASS
 listClass.push(makeUnique(students))
 for(i=0;i<listClass.length;i++){
  var newListClass = listClass[i]
 }
 
 // MEMBUAT OBJECT CLASS
 for(i=0;i<newListClass.length;i++){
   var classKey = newListClass[i]
   classStudents[classKey] = {name:[],score:[]}
   
 }

 // MEMISAHKAN CLASS STUDENTS
 for(var j=0;j<students.length;j++){
   for(var k=0;k<newListClass.length;k++){
     if(students[j].class === newListClass[k]){
       classStudents[newListClass[k]].name.push(students[j].name)
       classStudents[newListClass[k]].score.push(students[j].score)
     }
   }
 }

 //SORTING SCORE ASCENDING
 for(var l=0;l<newListClass.length;l++){
   array1 = classStudents[newListClass[l]].score
   array2 = classStudents[newListClass[l]].name
   manualSort(array1,array2);
  //  console.log(array1,array2)
 }
 
// MENENTUKAN HIGHEST SCORE

 for(var m=0;m<newListClass.length;m++){
   result[newListClass[m]] = {}
   result[newListClass[m]].name = classStudents[newListClass[m]].name[classStudents[newListClass[m]].name.length - 1]
   result[newListClass[m]].score = classStudents[newListClass[m]].score[classStudents[newListClass[m]].score.length - 1]
 }
return result
}


//---------------- MAKE UNIQUE CLASS -----------------
  function makeUnique(array1) {
    var arrUniqe = []
    for (var i = 0;i< array1.length; i++) {
      if (unique(array1[i].class, arrUniqe) === false) {
          arrUniqe.push(array1[i].class);
      }
    }
    return arrUniqe
   }
  
  function unique(string, array){
    for(var i=0;i<array.length;i++){
      if(array[i] === string){
        return true
      }
    }
    return false
  }
  

//------------------- FUNCTION MANUAL SORT -----------------------

function manualSort(arr1,arr2){
  for(var i=arr1.length-1;i>=0;i--){
    for(var j=0;j<i;j++){
      if(arr1[j]>arr1[j+1]){
        var temp = arr1[j]
        var temp1 = arr2[j]
        arr1[j] = arr1[j+1]
        arr2[j] = arr2[j+1]
        arr1[j+1] = temp
        arr2[j+1] = temp1
      }
    }
  }
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
  console.log(highestScore([])); //{}