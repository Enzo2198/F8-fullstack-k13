const cart = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];

/*

   initialize function removeItemAfterDelay (productId, delay, cb)

                     │
                     │
                     ▼
    find index by const indexItem = findIndex

                     │
                     │
                     ▼          no      ┌───────────────────┐
          if indexItem !== -1  ───────► │log 'not found id' │
                                        └───────────────────┘
                    │
                    │ yes
                    ▼
      ┌─────────────────────────────────────────┐
      │setTimeout cart.splice (indexItem, 1)    │
      │                                         │
      │call back cart after remove item same id │
      │                                         │
      └─────────────────────────────────────────┘

 */
const removeItemAfterDelay = (productId, delay, cb) => {
    const indexItem = cart.findIndex(item => item.id === productId)

    if (indexItem !== -1) {
        setTimeout(() => {
            cart.splice(indexItem, 1);
            cb(cart)
        }, delay);
    } else {
        console.log('Not found id')
    }
}

removeItemAfterDelay(3, 1000, (cartUpdatedItem) => {
    console.log('Update Cart: ', cartUpdatedItem);
})