// Import our custom CSS
import './scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { setupCounter } from './js/counter';

console.log("This is my enviroment variable:", import.meta.env.VITE_API_URL);

document.querySelector('#app').innerHTML = `
    <div class="container">
        <h1 class="text-primary">Hello World!</h1>
        <button class="btn btn-primary" id="counter" type="button"></button>
    </div>
`;

setupCounter(document.querySelector('#counter'));
