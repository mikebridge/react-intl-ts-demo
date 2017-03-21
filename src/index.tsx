import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { IntlProvider, addLocaleData } from 'react-intl';

const locale = 'fr';
const messages = require('./translations/locales/fr.json');
import fr = require('react-intl/locale-data/fr');
addLocaleData(fr);


ReactDOM.render(
    <IntlProvider locale={locale} messages={messages} key={locale}>
        <App />
    </IntlProvider>,
    document.getElementById('root') as HTMLElement
);
