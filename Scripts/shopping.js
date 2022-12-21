// Remove product for shopping in localstorage
function removeProduct(id) {
    id = id.getAttribute("data-id-product");
    // Menu local counter
    const menuCounter = document.getElementById(`menuCounter-${id}`);

    if (localStorage.getItem(`product_${id}`) == 1) {
        localStorage.removeItem(`product_${id}`);

        // Menu local counter
        menuCounter.innerHTML = '0';
    }
    
    if (localStorage.getItem(`product_${id}`) > 1) {
        let shopping = localStorage.getItem(`product_${id}`);
        shopping--;
        localStorage.setItem(`product_${id}`, shopping);

        // Menu local counter
        menuCounter.innerHTML = shopping;
    }
}


// Add product for shopping in localstorage
function addProduct(id) {
    id = id.getAttribute("data-id-product");
    // Menu local counter
    const menuCounter = document.getElementById(`menuCounter-${id}`);

    if (localStorage.getItem(`product_${id}`) == null) {
        localStorage.setItem(`product_${id}`, 1);

        // Menu local counter
        menuCounter.innerHTML = '1';

    } else {
        let shopping = localStorage.getItem(`product_${id}`);
        shopping++;
        localStorage.setItem(`product_${id}`, shopping);

        // Menu local counter
        menuCounter.innerHTML = shopping;
    }
}