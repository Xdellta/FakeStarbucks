fetch('Scripts/products.json').then(response => response.json()).then(data => {

    const menu = document.getElementById('Menu');

    for (let product of data) {
        menu.innerHTML += `
            <div class="Menu_item">
                <div class="Menu_item_graphic">
                    <img src="Images/Products/${product.Graphic}" alt="">
                </div>

                <div class="Menu_item_data">
                    <h1>${product.Name}</h1>

                    <div class="Menu_item_data_count">
                        <i class="fa-solid fa-minus"></i>
                        <span>0</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        `;
    }
});