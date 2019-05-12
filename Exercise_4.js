function cariModus(arr) {
    var frekuensiTerbanyak = 0
    var modus = 0

    for(var i=0;i<arr.length;i++){
        var frekuensi= 1
        for(var j=0;j<arr.length;j++)
        if(arr[i]===arr[j] && i !== j){
            frekuensi ++;
        if( frekuensi > frekuensiTerbanyak){
            frekuensiTerbanyak = frekuensi;
            modus = arr[i];
        }
        }
        //  console.log(i, j, '=> i, j ' )
        // console.log(arr[i], arr[j], '=> arr[i], arr[j]  ')
    } 
    // console.log(frekuensiTerbanyak)
    if(frekuensiTerbanyak <= 1){
        return -1;
    }  else if( arr.length === frekuensiTerbanyak){
        return -1
    }
    return modus 
    }
    
       
   



// array Modus => [10, 4, 5, 2]
// array Frekuensinya => [1, 2, 1, 1]

// multiD Arr => [[10, 1], [4, 2], [5, 1], [2, 1]]

  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1





// var bilanganGanjil = [1, 3, 5, 7]
// var kumpulanBilangan = [1, 2, 3, 7]

// // < 6
// var arrResult = []
// // Menggunakan FLAG
// for(var i = 0; i < bilanganGanjil.length; i++) {
//     var bilanganKurangDariEnam = bilanganGanjil[i] < 6
//     var apaAdaDiKeduanya = false;
//     for(var j = 0; j < kumpulanBilangan.length; j++) {
//         if(bilanganGanjil[i] === kumpulanBilangan[j]){
//             apaAdaDiKeduanya = true;
//         }
//     }
//     if(bilanganKurangDariEnam === true && apaAdaDiKeduanya === true) {
//         arrResult.push(bilanganGanjil[i])
//         console
//     }
// }