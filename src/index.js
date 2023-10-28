module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const openbr = bracketsConfig.map(a => a[0]); 
  const closebr = bracketsConfig.map(a => a[1]); 

  const arr = str.split('');
  const arrbra = [];
  let popval = '';

  for (let i = 0; i <= arr.length; i += 1) {
    if (openbr.includes(arr[i]) && closebr.includes(arr[i]) && !arrbra.includes(arr[i])) {
      arrbra.push(arr[i]); //console.log(arrbra, '<')  
      continue};    
    if (openbr.includes(arr[i]) && !closebr.includes(arr[i])) {
      arrbra.push(arr[i]); //console.log(arrbra)  
      continue};
    if (closebr.includes(arr[i])) {
        popval = arrbra.pop();   //console.log(popval)     
        if (popval === undefined || popval !== openbr[closebr.indexOf(arr[i])]) return false;
        continue;
    };
  }
  return true;
}
