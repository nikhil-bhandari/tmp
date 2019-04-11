import React from 'react';
import {Button} from './components/CoreComponents';
import styled from 'styled-components';
import './App.css';
import UserLoan from "./components/UserLoan";
import {IntlProvider} from "react-intl";

const messages = {
  en: require('./messages/en.json'),
  zh: require('./messages/zh.json')
};

const LanguageButton = styled(Button)`
  margin: 20px
`;

const App = () => {
  const [locale, setLocale] = React.useState("en");
  const nextLocale = 'zh' === locale ? 'en' : 'zh';
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <UserLoan/>
        <LanguageButton onClick={() => {
          setLocale(nextLocale);
        }}>
          Switch to {nextLocale}
        </LanguageButton>
      </div>
    </IntlProvider>
  );
};

export default App;
