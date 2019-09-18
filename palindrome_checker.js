function palindrome(str) {

  let i = 0;
  let j = str.length - 1;
  str = str.toLowerCase();
  while (i < j){
      if (str[i] == "_" || str[i] == "," || str[i] == " " || str[i] == "/" || str[i] == "(" ){
        i++;
        continue;
      }
      if (str[j] == "_" || str[j] == "." || str[j] == "," || str[j] == "\\" || str[j] == " " || str[j] == "-" || str[j] == ")"){
        j--;
        continue;
      }
      if (str[i++] !== str[j--]){
        return false;
      }
  }
  return true;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
