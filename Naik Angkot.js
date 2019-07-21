function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var harga = 2000
    var result = []

    
    if(arrPenumpang === 0){
        return result
    }else{
    for(var i=0;i<arrPenumpang.length;i++){
        var objectPenumpang = {}

        objectPenumpang.penumpang = arrPenumpang[i][0]
        objectPenumpang.naikDari = arrPenumpang[i][1]
        objectPenumpang.tujuan = arrPenumpang[i][2]
        objectPenumpang.bayar = harga * (indexOf(rute,objectPenumpang.tujuan) - (indexOf(rute,objectPenumpang.naikDari)))
        result.push(objectPenumpang)
      
       }
    }
     return result
  }
  
 //--------------- MAKE indexOf -----------------------------
  function indexOf(array,string){
      var indeks = 0
   
      for(i=0;i<array.length;i++){
          if(array[i] === string){
              indeks += i
          }     
      }
      return indeks
  }

//   var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//   console.log(indexOf(rute,'D'))
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]