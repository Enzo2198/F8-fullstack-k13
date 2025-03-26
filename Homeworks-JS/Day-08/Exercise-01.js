/*------------Exercise 1-------------*/

const user = { firstName: "Nguyễn", lastName: "Văn A", age: 25 };
const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`

console.log(getFullName(user));



/*------------Exercise 2-------------*/

const orders = [
    { item: "Bút", price: 5000, quantity: 3 },
    { item: "Vở", price: 12000, quantity: 2 },
    { item: "Thước", price: 8000, quantity: 1 }
];
/*

                            arr.reduce(sum, {price, quantity})

       0  [{price: 5000, quantity: 3},{price: 12000, quantity: 2 },{price: 8000, quantity: 1 }]
       ──────────┬───────────────────
                 │   ──────────────────────┬───────────────────────
                 │                    ─────┼─────────────────────────┬─────────────────────────
                 ▼                         │                         │
 sum = 0                                   │                         │
 {price, quantity} = {5000, 3}             │                         │
 return sum + price * quantity             │                         │
         0  + 5000  *    3                 │                         │
                                           ▼                         │
                            sum = 15000                              │
                            {price, quantity} = {12000, 2}           │
                            return sum + price * quantity            │
                                15000  + 12000 *    2                │
                                                                     ▼
                                                            sum = 39000
                                                            {price, quantity} = {8000, 1}
                                                            return sum + price * quantity  ────► calculateTotal = 47000
                                                                39000  + 8000  *    1

 */

const calculateTotal = arr =>
    arr.reduce((sum, {price, quantity}) => sum + price * quantity, 0)

console.log(calculateTotal(orders));
