function cariModus(arr) {
    // you can only write your code here!
    var result = 0
    var frekuensiTerbanyak = 0

    for(var i=0;i<arr.length;i++){
        var count = 0
        for(var j=0;j<arr.length;j++){
            if(arr[i] === arr[j] && i !== j){
                count++
                if(count>frekuensiTerbanyak){
                    frekuensiTerbanyak = count
                    result = arr[i]
                }
            }
        }
    }
    if(frekuensiTerbanyak === 0){
        return -1
    }
    var angka =0
    for(var k=0;k<arr.length;k++){
        angka += arr[k]
        if(angka/arr.length === arr[k]){
            return -1
        }
    }
    return result
}

  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1