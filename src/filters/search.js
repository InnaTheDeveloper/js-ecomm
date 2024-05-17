import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  const products = getElement('.products-container');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, products, true);
      if (newStore.length < 1) {
        products.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, products, true);
    }
  });
};

export default setupSearch;
