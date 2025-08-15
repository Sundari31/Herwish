const search = document.getElementById("search");
const productContainer = document.getElementById("productContainer");
const productList = productContainer.querySelectorAll(".product-card");

search.addEventListener("keyup", function(event) {
    const enteredValue = event.target.value.toUpperCase();

    for (let i = 0; i < productList.length; i++) {
        const card = productList[i];
        const productName = card.querySelector("h3").textContent.toUpperCase();

        if (productName.includes(enteredValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
});
