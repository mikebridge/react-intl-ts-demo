import * as React from 'react';
import './App.css';

import { FormattedMessage, FormattedDate } from 'react-intl';

const logo = require('./logo.svg');

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><FormattedMessage id="app.welcome"
                                defaultMessage="Welcome to React"
                                description="Welcome Message" /></h2>
        </div>
        <p className="App-intro">
            <FormattedMessage id="app.to_get_started"
                              defaultMessage="To get started, edit {filename} and save to reload."
                              values={{ filename: <code>src/App.tsx</code> }}
                              description="Getting Started" />

        </p>
        <p>
            <FormattedDate value={new Date()}
                           year="numeric"
                           month="long"
                           day="2-digit"/>


        </p>
      </div>
    );
  }
}

export default App;
