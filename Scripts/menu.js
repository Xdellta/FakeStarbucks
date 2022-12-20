fetch('Scripts/products.json').then(response => response.json()).then(data => {

    const menu = document.getElementById('Menu');

    for (let product of data) {
        // Check data product in localstorage
        let shopping = 0;

        if (localStorage.getItem(`product_${product.ID}`) > 0) {
            shopping = localStorage.getItem(`product_${product.ID}`);
        }

        // Inner product
        menu.innerHTML += `
            <div class="Menu_item">
                <div class="Menu_item_graphic">
                    <img src="Images/Products/${product.Graphic}" alt="">
                </div>

                <div class="Menu_item_data">
                    <h1>${product.Name}</h1>

                    <div class="Menu_item_data_count">
                        <i class="fa-solid fa-minus" data-id-product="${product.ID}" onclick="removeProduct(this)"></i>
                        <span>${shopping}</span>
                        <i class="fa-solid fa-plus" data-id-product="${product.ID}" onclick="addProduct(this)"></i>
                    </div>
                </div>
            </div>
        `;
    }
});