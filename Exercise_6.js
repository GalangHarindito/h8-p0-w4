function digitPerkalianMinimum(angka) {
   var result = 0
   var digit = ''
   var temp =[]
 
   for(i=0;i<=angka;i++){
    var bagi = (angka / i)
    digit = i.toString() + bagi.toString()
  
   if(bagi % 1 === 0){
     temp.push(digit);
   

   if(result === 0){
     result = digit.length
   }else if(result > digit.length){
     result = digit.length
   }

    }
    }
    return result
}
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2