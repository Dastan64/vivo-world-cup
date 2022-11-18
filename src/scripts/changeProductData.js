import {productDescription, productLink, productMemory, productPrice, productTitle} from "./constants";

export function changeProductData(model, name, price, id, description, memory) {
  productTitle.textContent = `Смартфон Vivo ${model.toUpperCase()} ${memory}GB`;
  productDescription.textContent = description
  productPrice.textContent = `${price.toLocaleString()} ₸`;
  productMemory.textContent = `${memory}GB`;
  productLink.href = `https://www.technodom.kz/p/${id}`;
  productLink.textContent = `Купить Vivo ${model.toUpperCase()}`;
}
