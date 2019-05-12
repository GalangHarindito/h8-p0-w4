function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var hurufSelanjutnya = []
    

    for(var i=0;i<kata.length;i++){
        posisiHuruf =  abjad.indexOf (kata[i])
        hurufSelanjutnya += abjad[posisiHuruf+1]
        console.log(posisiHuruf)
    }
    return hurufSelanjutnya
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu