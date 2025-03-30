/*
  var i, num, sum


   i=0, i<=n/2, i++

                 yes
  num % i ===0  ───────► sum += i

        │                   │
        │                   │
        │                   │
        │                   ▼         yes
        │               sum = num   ────────►  Đây là số hoàn hảo
        │
        │                   │
        │                   │ no
        │    no             │
        └─────────────────► ▼
                        Đây không phải số hoàn hảo

 */
var sum = 0, num = 5
for (var i = 0; i <= num/2; i++) {
    if (num % i === 0) {
        sum += i
    }
}
if (sum === num) {
    console.log('Đây là số hoàn hảo')
} else {
    console.log('Đây không phải là số hoàn hảo')
}