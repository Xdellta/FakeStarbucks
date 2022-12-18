fetch('Scripts/products.json').then(response => response.json()).then(data => {
    let product1 = data[0];
    let product2 = data[0];
    let product3 = data[0];

    for (let product of data) {
        if (product.Opinion > product1.Opinion) {
            product1 = product;
        }

        if (product.Opinion > product2.Opinion && product.Opinion < product1.Opinion) {
            product2 = product;
        }

        if (product.Opinion > product3.Opinion && product.Opinion < product2.Opinion) {
            product3 = product;
        }
    }


    // Product #1
    const trendsItem2 = document.getElementById('trends_item2');

    trendsItem2.innerHTML = `
        <div style="background-color: ${product1.Color}">
            <i class="fa-solid fa-coffee-beans" style="color: ${product1.Color}"></i>
            <img src="Images/Products/${product1.Graphic}" alt="">

            <div class="trends_item_opinion">
                ${product1.Opinion}<i class="fa-solid fa-star"></i>
            </div>
        </div>
        <h1>${product1.Name}</h1>
        <button>
            Do koszyka
            <span>+</span>
        </button>
    `;


    // Product #2
    const trendsItem3 = document.getElementById('trends_item3');

    trendsItem3.innerHTML = `
        <div style="background-color: ${product2.Color}">
            <i class="fa-solid fa-coffee-beans" style="color: ${product2.Color}"></i>
            <img src="Images/Products/${product2.Graphic}" alt="">

            <div class="trends_item_opinion">
                ${product2.Opinion}<i class="fa-solid fa-star"></i>
            </div>
        </div>
        <h1>${product2.Name}</h1>
        <button>
            Do koszyka
            <span>+</span>
        </button>
    `;


    // Product #3
    const trendsItem1 = document.getElementById('trends_item1');

    trendsItem1.innerHTML = `
        <div style="background-color: ${product3.Color}">
            <i class="fa-solid fa-coffee-beans" style="color: ${product3.Color}"></i>
            <img src="Images/Products/${product3.Graphic}" alt="">

            <div class="trends_item_opinion">
                ${product3.Opinion}<i class="fa-solid fa-star"></i>
            </div>
        </div>
        <h1>${product3.Name}</h1>
        <button>
            Do koszyka
            <span>+</span>
        </button>
    `;
});