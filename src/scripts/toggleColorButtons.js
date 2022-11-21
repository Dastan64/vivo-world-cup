import { gridItemColorTabs } from './constants';

let selectedColorBtn;

export const toggleColorButtons = () => {
    selectedColorBtn = document.querySelector('.grid__item-color-tab');
    selectedColorBtn.classList.add('grid__item-color-tab--active')
    gridItemColorTabs.addEventListener('click', ({ target }) => {
        gridItemColorTabs.nextElementSibling.querySelector('.grid__item-image').src = `https://www.technodom.kz/under/banners/vivo-world-cup/${target.value}`;
        if (selectedColorBtn) {
            selectedColorBtn.classList.remove('grid__item-color-tab--active')
        }
        selectedColorBtn = target;
        target.classList.add('grid__item-color-tab--active');
    })
}
