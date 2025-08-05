let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    let orignal = x;
    let itervalue = x.toString();
    let reversed = 0;
    let d = 0;
    for (i = 0; i < itervalue.length; i++) {
      d = x % 10;
      reversed = reversed * 10 + d;
      x = Math.floor(x / 10);
    }
    if (reversed === orignal) {
      console.log("palindrome");
      return true;
    } else {
      console.log("No Palindrome");
      return false;
    }
  }
};

isPalindrome(121);
