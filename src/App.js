import React from 'react';
import {Button} from './components/CoreComponents';
import './App.css';
import UserLoan from "./components/UserLoan";
import {IntlProvider} from "react-intl";

const messages = {
  en: require('./messages/en.json'),
  zh: require('./messages/zh.json')
};

const App = () => {
  const [locale, setLocale] = React.useState("en");
  const nextLocale = 'zh' === locale ? 'en' : 'zh'
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <UserLoan/>
        <Button onClick={() => {
          setLocale(nextLocale);
        }}>
          Switch to {nextLocale}
        </Button>
      </div>
    </IntlProvider>
  );
}
export default App;
