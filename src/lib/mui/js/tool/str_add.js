var str = `37 7 2 1 11 `

function strAdd(str){
  var sum = 0;
  var arr = str.trim().split(' ');
  console.log(arr.length);
  for(var i= 0; i<arr.length; i++){
    sum += Number(arr[i])
  }
  console.log(sum)
}
strAdd(str)


