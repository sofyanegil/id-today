import 'regenerator-runtime';
import './styles/main.css';
import './script/components/app-bar';
import main from './script/view/main';
import './script/components/bottom-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', main);
