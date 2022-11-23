import { contestSection, moreInfoLinks } from './constants';

export const handleScroll = () => {
    moreInfoLinks.forEach(link => link.addEventListener('click', (event) => {
        event.preventDefault();
        if (window.screen.width > 1023) {
            contestSection.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
        } else {
            contestSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }
    }))
}
