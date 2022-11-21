import {
    mainProductImage,
    productColorTabImages, productColorTabs,
    productModelTabs,
    productModelTabsContainer, productThumbImages, productThumbs,
} from './constants';
import { store } from './store';
import { data } from './data';
import { toggleThumbs } from './handlePreviews';
import { changeProductData } from './changeProductData';

function selectModel() {
    productModelTabsContainer.addEventListener('click', ({ target }) => {
        if (target.tagName === 'BUTTON') {

            productModelTabs.forEach((item) => {
                item.classList.remove('product__model-tab_active');
            });
            target.classList.add('product__model-tab_active');

            toggleThumbs(productThumbs[0])

            productColorTabs.forEach((item) => {
                item.classList.remove('product__color-tab_active');
            });

            productColorTabs[0].classList.add('product__color-tab_active')
            console.log(target.dataset.model)

            store.model = target.dataset.model

            const suitableModels = data.filter(obj => obj.model === store.model);
            console.log(suitableModels)
            const firstModel = suitableModels[0];
            const { model, description, name, price, id, memory } = firstModel;
            changeProductData(model, name, price, id, description, memory);

            firstModel.photos.forEach((preview, index) => {
                productThumbImages[index].src = preview.thumbnail
                productThumbImages[index].dataset.src = preview.thumbnail
            });

            suitableModels.forEach((model, index) => {
                productColorTabs[index].dataset.color = model.color;
            })

            const colorPreviews = suitableModels.map(model => model.mainPhoto)

            colorPreviews.forEach((image, i) => {
                productColorTabImages[i].src = image
                mainProductImage.src = colorPreviews[0]
            });

        }
    })
}

selectModel()
