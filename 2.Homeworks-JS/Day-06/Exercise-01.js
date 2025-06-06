const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [
        { productId: 101, quantity: 2 },
        { productId: 102, quantity: 1 }]},
    { id: 1002, customerId: 2, items: [
        { productId: 102, quantity: 1 },
        { productId: 103, quantity: 3 }]},
    { id: 1003, customerId: 3, items: [
        { productId: 104, quantity: 5 },
        { productId: 105, quantity: 2 }]},
    { id: 1004, customerId: 4, items: [
        { productId: 101, quantity: 1 },
        { productId: 103, quantity: 2 }]},
    { id: 1005, customerId: 5, items: [
        { productId: 105, quantity: 10 }]},
    { id: 1006, customerId: 1, items: [
        { productId: 101, quantity: 1 },
        { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [
        { productId: 104, quantity: 2 },
        { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [
        { productId: 102, quantity: 2 }]},
    { id: 1009, customerId: 4, items: [
        { productId: 101, quantity: 1 },
        { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [
        { productId: 103, quantity: 4 },
        { productId: 104, quantity: 3 }] },
];

/*

  initialize cusObj, productObj

     │
     │
     └─► Get id each array

           │
           │
           └──► forEach orders

                │
                │
                └─►  const customer get cusObj by customerId

                       │
                       │
                       └─► forEach order.item

                             │
                             │
                             └──►  const product get productObj by item.productId

                                   const payAmount

                                     │  ┌──────────────────────────────────────────────────────────────────────────────┐
                                     │  │                                                yes                           │
                                     └─►│if existed customer.products[item.productId]   ────────►   plus item quantity │
                                        │                                                                              │
                                        │               │                                           plus payAmount     │
                                        │               │ no                                                           │
                                        │               │                                                              │
                                        │               ▼                                                              │
                                        │                                                                              │
                                        │         initialize customer.products[item.productId]                         │
                                        │                                                                              │
                                        └──────────────────────────────────────────────────────────────────────────────┘

                                           │
                                           │
                                           └─────► plus total payAmount

 */

const [cusObj, productObj] = [{}, {}]
customers.forEach((customer) => {
    cusObj[customer.id] = {
        ...customer,
        products: {},
        totalAmount: 0
    };
})

products.forEach(product => {
    productObj[product.id] = product;
})

orders.forEach(order => {
    const customer = cusObj[order.customerId];
    order.items.forEach(item => {
        const product = productObj[item.productId];
        const payAmount = item.quantity * product.price;

        if (customer.products[item.productId]) {
            customer.products[item.productId].quantity += item.quantity;
            customer.products[item.productId].totalSpent += payAmount;
        } else {
            customer.products[item.productId] = {
                name: product.name,
                quantity: item.quantity,
                totalSpent: payAmount
            }
        }
        customer.totalAmount += payAmount;
    })
})

/*

                                                                                     ┌────────────────────┐
                                                                                     │                    │
  initialize sortedCustomers = map value of cusObj with function(customer)   ───────►│sort sortCustomers  │
                                                                                     │                    │
     │                                                                               └────────────────────┘
     │  ┌────────────────────────────────────────────────┐
     └─►│const productArray = value of customer.products │
        │                                                │
        │  │                                             │
        │  │                                             │
        │  └──► sort productArray                        │
        │                                                │
        └────────────────────────────────────────────────┘

 */

const sortedCustomers = Object.values(cusObj).map(customer => {
    const productArray = Object.values(customer.products);
    productArray.sort((a, b) => b.totalSpent - a.totalSpent)
    return {
        id: customer.id,
        name: customer.name,
        products: productArray,
        totalSpent: customer.totalAmount,
    };
})

sortedCustomers.sort((a, b) => b.totalSpent - a.totalSpent);
console.log(sortedCustomers);
