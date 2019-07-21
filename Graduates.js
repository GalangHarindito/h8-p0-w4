function graduates (students) {
    // Code disini
    var result = {}
    var listClass= []

   
  listClass.push(makeUnique(students))

   for(var i=0;i<listClass.length;i++){
     for(var j=0;j<listClass[i].length;j++){
     var arrClass = []
     for(var k=0;k<students.length;k++){
       var objStudents = {}
       if(listClass[i][j] === students[k].class && students[k].score > 75){
           objStudents.name = students[k].name,
           objStudents.score = students[k].score
           arrClass.push(objStudents)
       }
        result[students[k].class] = arrClass
     }
     
   }
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
  
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}