(function(myStr) {
  let maxcount = 0;
  let palindromeArray = [];
  let longestPalindromeStr = '';
  function palindrome(substr, i, j) {
    var count = 0;
    if (i < 0 || j > substr.length - 1) { return count; }
    if (substr.charAt(i) == substr.charAt(j)) {
      count += 2;
      return count + palindrome(substr, i - 1, j + 1);
    } else {
      return count;
    }
  }

  function palindrome2(substr, i) {
    var count = 0;
    if (i > substr.length - 2) { return count; }
    if (substr.charAt(i) == substr.charAt(i + 1)) {
      count += 2;
      return count + palindrome(substr, i - 1, i + 2);
    } else {
      return count;
    }
  }

  for (var i = 1; i < myStr.length - 1; i++) {
    var odd = palindrome(myStr, i - 1, i + 1) + 1;
    var even = palindrome2(myStr, i);
    maxcount = Math.max(Math.max(odd, even), maxcount);
  }

  console.log(maxcount);

}("asdasdadracecaraswqeqerw"));
