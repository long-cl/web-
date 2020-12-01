var str = `35 31 32 33 32 37 21 23 23 28 44 15 40 10 31 40 19 30 41 62`

function strAdd(str){
  var sum = 0;
  var arr = str.trim().split(' ');
  for(var i= 0; i<arr.length; i++){
    sum += Number(arr[i])
  }
  console.log(sum)
}
strAdd(str)


