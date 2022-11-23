import './handlePreviews'
import './selectModel'
import './selectColor'
import { toggleInfoTabs } from './toggleInfoTabs';
import { toggleColorButtons } from './toggleColorButtons';
import smoothscroll from 'smoothscroll-polyfill';
import { handleScroll } from './handleScroll';

smoothscroll.polyfill();
toggleInfoTabs();
handleScroll();
toggleColorButtons()
