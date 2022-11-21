let selectedColorBtn;

export const toggleColorButtons = () => {
    const gridItemColorTabs = document.querySelector('.grid__item-color-tabs');
    selectedColorBtn = document.querySelector('.grid__item-color-tab');
    selectedColorBtn.classList.add('grid__item-color-tab--active')
    gridItemColorTabs.addEventListener('click', ({ target }) => {
        if (target.tagName === 'BUTTON') {
            console.log(target);
            const title = target.dataset.title;
            const description = target.dataset.description;
            if (title && description) {
                gridItemColorTabs.parentElement.querySelector('.grid__item-title').textContent = title;
                gridItemColorTabs.parentElement.querySelector('p').textContent = description;
            }
            gridItemColorTabs.nextElementSibling.querySelector('.grid__item-image').src = `https://www.technodom.kz/under/banners/vivo-world-cup/${target.value}`;
            if (selectedColorBtn) {
                selectedColorBtn.classList.remove('grid__item-color-tab--active')
            }
            selectedColorBtn = target;
            target.classList.add('grid__item-color-tab--active');
        }
    })
}
