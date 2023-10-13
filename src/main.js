// Import our custom CSS
import Alpine from 'alpinejs';
import './scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { home, login } from './js/pages';

Alpine.data('home', home);
Alpine.data('login', login);

Alpine.start();
