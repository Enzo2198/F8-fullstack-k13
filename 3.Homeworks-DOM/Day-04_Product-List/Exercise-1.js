/*

                    create prodList

                           │
                           │
                           ▼

                      fetch API

                           │
                           │
                           │
                           ▼

                     Array of products

                           │
                           │ for product of products
                           │
                           ▼

                   create contentItem

                           │
                           │
                           ▼
                 innerHTML contentItem

                           │
                           │
                           ▼
┌───────────────────────────────────────────────────────┐
│                                                       │
│                 .product-item                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │                                                 │  │
│  │         .product-img                            │  │
│  │                                                 │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │                                                 │  │
│  │         .product-name                           │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │                                                 │  │
│  │         .product-price                          │  │
│  └─────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────┐  │
│  │                                                 │  │
│  │         .product-description                    │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │         .product-rating                         │  │
│  │ ┌─────────────────┐          ┌────────────────┐ │  │
│  │ │                 │          │                │ │  │
│  │ └─────────────────┘          └────────────────┘ │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘

                           │
                           │
                           │
                           │
                           ▼
              prodList.appendChild(contentItem)

 */
const prodList = document.querySelector('.product-list');

fetch('https://fakestoreapi.com/products')
    .then(element => element.json())
    .then(products => {
        for (const product of products) {
            const contentItem = document.createElement('div');
            contentItem.className = 'product-item';

            contentItem.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <!-- Head product-->
            <div class="product-name">
                <h3><a href="#">${product.title}</a></h3>
            </div>

            <!-- Price -->
            <div class="product-price">
                <p>${product.price}$</p>
            </div>

            <!-- Description -->
            <div class="product-description">
                <p>${product.description}</p>
            </div>

            <!-- Foot product -->
            <div class="product-rating">
                <span>Rate ${product.rating.rate}</span>
                <span>Sold ${product.rating.count}</span>
            </div>
            `
            prodList.appendChild(contentItem);
        }
    });