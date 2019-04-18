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
import {LoginComponent} from "./components/LoginComponent";

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
          <Container>
            <PageComponent exact path="/" component={ApplicationComponent}/>
            <PageComponent path="/login" hideNavbar component={LoginComponent}/>
              <PageComponent path="/products" component={ApplyLoanComponent}/>
            <PageComponent path="/profile" component={ProfileComponent}/>
            <PageComponent path="/contact" component={ContactComponent}/>
          </Container>
        </Router>
      </IntlProvider>
    </Provider>
  );
};

class PageComponent extends Route {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(!this.props.hasOwnProperty('hideNavbar'), this.props.path)
    const navbar = !this.props.hasOwnProperty('hideNavbar') ? <NavBar
      locale={this.props.locale}
      handleLanguage={this.props.setLanguage}/> : null;
    return <>
      {
        navbar
      }
      <Route {...this.props}/>
    </>
  }


}

export default App;
