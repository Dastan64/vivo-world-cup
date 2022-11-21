import { infoTabs, infoTabsContainer } from './constants';
import { store } from './store';
import { handleInfoContent } from './handleInfoContent';
import { toggleColorButtons } from './toggleColorButtons';

let selectedTab;

export const toggleInfoTabs = () => {
    selectedTab = infoTabs[1];
    selectedTab.classList.add('tabs__btn--active')
    infoTabsContainer.addEventListener('click', ({ target }) => {
        store.selectedModel = target.dataset.model;
        if (selectedTab) {
            selectedTab.classList.remove('tabs__btn--active')
        }
        selectedTab = target;
        target.classList.add('tabs__btn--active');
        handleInfoContent();
        toggleColorButtons();
    })
}

