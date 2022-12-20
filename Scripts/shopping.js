// Remove product for shopping in localstorage
function removeProduct(id) {
    id = id.getAttribute("data-id-product");

    if (localStorage.getItem(`product_${id}`) == 1) {
        localStorage.removeItem(`product_${id}`);
    }
    
    if (localStorage.getItem(`product_${id}`) > 1) {
        let shopping = localStorage.getItem(`product_${id}`);
        shopping--;
        localStorage.setItem(`product_${id}`, shopping);
    }
}


// Add product for shopping in localstorage
function addProduct(id) {
    id = id.getAttribute("data-id-product");

    if (localStorage.getItem(`product_${id}`) == null) {
        localStorage.setItem(`product_${id}`, 1);

    } else {
        let shopping = localStorage.getItem(`product_${id}`);
        shopping++;
        localStorage.setItem(`product_${id}`, shopping);
    }
}