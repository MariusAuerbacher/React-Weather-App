import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import store from './store';
//import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<Provider store={store}>
    <App />
    //</Provider>

);


/* Thank you for subscribing to Free OpenWeatherMap!

API key:
- Your API key is dc26ceb8a2ef412b9e1dfd45245915bc
- Within the next couple of hours, it will be activated and ready to use
- You can later create more API keys on your account page
- Please, always use your API key in each API call

Endpoint:
- Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dc26ceb8a2ef412b9e1dfd45245915bc

Useful links:
- API documentation https://openweathermap.org/api
- Details of your plan https://openweathermap.org/price
- Please, note that 16-days daily forecast and History API are not available for Free subscribers
*/