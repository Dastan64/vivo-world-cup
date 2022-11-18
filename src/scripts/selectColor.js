import {
  mainProductImage,
  productColorTabs,
  productColorTabsContainer,
  productThumbImages, productThumbs,
} from "./constants";
import {store} from "./store";
import {data} from "./data";
import {toggleThumbs} from "./handlePreviews";
import {changeProductData} from "./changeProductData";

function selectColor() {
  productColorTabsContainer.addEventListener('click', ({target}) => {
    const targetTab = target.closest('.product__color-tab');

    store.color = targetTab.dataset.color

    productColorTabs.forEach((item) => {
      item.classList.remove('product__color-tab_active');
    });
    targetTab.classList.add('product__color-tab_active');

    toggleThumbs(productThumbs[0])


    const uniqueObj = data.find(obj => obj.color === store.color && obj.model === store.model);
    const {model, description, name, price, id, memory} = uniqueObj;
    changeProductData(model, name, price, id, description, memory);


    uniqueObj.photos.forEach((preview, index) => {
      productThumbImages[index].src = preview.thumbnail
      productThumbImages[index].dataset.src = preview.thumbnail
      mainProductImage.src = uniqueObj.photos[0].full;
    });
  })
}

selectColor();
