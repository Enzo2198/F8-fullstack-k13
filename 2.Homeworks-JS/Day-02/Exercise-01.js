// Bài 1 kiểm tra số nguyên tố

/*

  var i, s, num
  tìm ước của num rồi cộng tổng các ước tìm được
                   yes
  s === num + 1  ────────►   là số nguyên tố
      │
      │no
      │
      ▼
   không là số nguyên tố

 */
var s = 0, num = 25;
for (var i = 0; i <= num ** 0.5; i++){
    if (num % i === 0 ) {
        s += (i + num/i)
    }
}

if (s === (num + 1)) {
    console.log('Đây là số nguyên tố')
} else {
    console.log('Đây không phải là số nguyên tố')
}