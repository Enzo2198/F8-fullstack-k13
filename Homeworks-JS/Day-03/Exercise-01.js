/*

          var arr = [2, 3, 4, 1, 0, 8], tmp

                      │
                      │
                      ▼
  ┌──────► for i=0;  i < arr.length; i++
  │
  │        for j=0; j < arr.length - i; j++
  │
  │                   │                       
  │  no               ▼
  └────────  if arr[j] > arr[j+1]

                      │ yes
                      │
                      ▼
              arr[j] = tmp

              arr[j] = arr[j+1]

              arr[j+1] = tmp

 */
var arr = [2, 3, 4, 1, 0, 8]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

console.log(arr)