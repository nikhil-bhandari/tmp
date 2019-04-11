import React from 'react';

import UserLoan from "./components/UserLoan";
import './App.css';
import {IntlProvider} from "react-intl";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import LoanListComponent from "./components/LoanListComponent";
import ApplyLoanComponent from "./components/ApplyLoanComponent";
import {NavBar} from "./components/Navbar";
import {Container} from "./components/CoreComponents";


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
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <NavBar
          locale={locale}
          handleLanguage={setLanguage}/>
        <Container>
          <Route exact path="/" component={LoanListComponent}/>
          <Route path="/products" component={ApplyLoanComponent}/>
        </Container>
      </Router>
    </IntlProvider>
  );
};

export default App;
