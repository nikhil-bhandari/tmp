import React from 'react';
import {IntlProvider} from "react-intl";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';

import ApplyLoanComponent from "./components/ApplyLoanComponent";
import {NavBar} from "./components/Navbar";
import {Container} from "./components/CoreComponents";
import ContactComponent from "./components/ContactComponent";
import ProfileComponent from "./components/ProfileComponent";
import configureStore from './store';

import './App.css';
import ApplicationComponent from "./components/ApplicationComponent";

const store = configureStore();

const messages = {
  en: require('./messages/en.json'),
  zh: require('./messages/zh.json')
};

const App = () => {
  const [locale, setLocale] = React.useState("en");
  const setLanguage = (locale) => {
    setLocale(locale);
  };

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <NavBar
            locale={locale}
            handleLanguage={setLanguage}/>
          <Container>
            <Route exact path="/" component={ApplicationComponent}/>
            <Route path="/products" component={ApplyLoanComponent}/>
            <Route path="/profile" component={ProfileComponent}/>
            <Route path="/contact" component={ContactComponent}/>
          </Container>
        </Router>
      </IntlProvider>
    </Provider>
  );
};

export default App;
