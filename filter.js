const checkboxes = document.querySelectorAll('.filter-checkbox');
const products = document.querySelectorAll('.product-card');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function () {
    filterProducts();
  });
}

function filterProducts() {
  const selectedCategory = [];
  const selectedColor = [];
  const selectedPromotion = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const type = checkboxes[i].getAttribute('data-type');
      const value = checkboxes[i].value;

      if (type === 'category') {
        selectedCategory.push(value);
      } else if (type === 'color') {
        selectedColor.push(value);
      } else if (type === 'promotion') {
        selectedPromotion.push(value);
      }
    }
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const category = product.getAttribute('data-category');
    const color = product.getAttribute('data-color');
    const promotion = product.getAttribute('data-promotion');

    const matchCategory = selectedCategory.length === 0 || selectedCategory.indexOf(category) !== -1;
    const matchColor = selectedColor.length === 0 || selectedColor.indexOf(color) !== -1;
    const matchPromotion = selectedPromotion.length === 0 || selectedPromotion.indexOf(promotion) !== -1;

    if (matchCategory && matchColor && matchPromotion) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}
