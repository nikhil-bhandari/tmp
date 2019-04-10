import React, {Component} from 'react';
import './App.css';
import UserLoan from "./components/UserLoan";
import {FormattedMessage, IntlProvider} from "react-intl";

const messages = {
  en: require('./messages/en.json'),
  zh: require('./messages/zh.json')
};

console.log(messages);

const App = () => {
  const [locale, setLocale] = React.useState("en");
  const nextLocale = 'zh' === locale ? 'en' : 'zh'
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <UserLoan/>
        <button onClick={() => {
          setLocale(nextLocale);
        }}>
          Switch to {nextLocale}
        </button>
      </div>
    </IntlProvider>
  );
}
export default App;
