var str = `45 37 42 5 32 18 29 24 33 14 20 20 48 30`

function strAdd(str){
  var sum = 0;
  var arr = str.trim().split(' ');
  for(var i= 0; i<arr.length; i++){
    sum += Number(arr[i])
  }
  console.log(sum)
}
strAdd(str)


