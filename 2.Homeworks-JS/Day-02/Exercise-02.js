/*

  var num, a = num ** 0.5

                       yes
          a % 1 != 0 ───────► không là số chính phương

               │
               │
               │ no
               │
               ▼
          là số chính phương
 */

var num = 4, a = num ** 0.5
if (a % 1 !== 0) {
    console.log('Không là số chính phương')
} else {
    console.log('Là số chính phương')
}