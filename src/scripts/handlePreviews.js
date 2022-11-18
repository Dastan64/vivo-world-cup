import {mainProductImage, productThumbs, productThumbsList} from "./constants";

function handlePreviews(image, src) {
  image.src = src;
}

export function toggleThumbs(target, hasParent) {
  productThumbs.forEach((item) => {
    item.classList.remove('product__thumb_active');
  });

  if (hasParent) {
    target.parentElement.classList.add('product__thumb_active');
  } else {
    target.classList.add('product__thumb_active');
  }
}

productThumbsList.addEventListener('click', (event) => {
  const {target} = event;

  if (target.dataset.src) {
    handlePreviews(mainProductImage, target.dataset.src);
    toggleThumbs(target, true)
  }
});
