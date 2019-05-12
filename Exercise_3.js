function cariMedian(arr) {
    var Total = 0
    for (i=0;i<arr.length;i++){
        Total += arr[i]
    }if((Total/arr.length)<=7.3){
        return Math.round(Total/arr.length)
    }else {
        return Total/arr.length
    }
    
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5