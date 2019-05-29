import React from 'react';
import {IntlProvider} from "react-intl";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';

import ApplyLoanComponent from "./components/ApplyLoanComponent";
import {NavBar} from "./components/Navbar";
import {Container} from "./components/CoreComponents";
import ContactComponent from "./components/ContactComponent";
import ProfileComponent from "./components/ProfileComponent";
import configureStore from './store';
import styled from 'styled-components';

import './App.css';
import ApplicationComponent from "./components/ApplicationComponent";
import LoginComponent from "./components/LoginComponent";

const store = configureStore();

const messages = {
  en: require('./messages/en.json'),
  zh: require('./messages/zh.json')
};

const NotificationSideBar = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 480px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-left: 1px solid rgb(221, 221, 221);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex: 0 0 auto;
`;

const Content = styled.div`
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
`;

const Footer = styled.div`
  flex: 0 0 auto;
  border-top: 1px solid rgb(221, 221, 221);
  padding: 15px;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin: 0;
  padding: 15px;
`;

const Alert = styled.div`
  font-size: 13px;
  margin-right: 10px;
  b {
    display: inline-block;
    margin-bottom: 5px;
  }
  
  p {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
`;

const Checkbox = ({checked, style, prevClass}) => {
  let className = 'far fa-square';
  if (checked) {
    className = 'fas fa-check-square';
  }
  return <i style={style} className={`${prevClass} ${className}`}></i>;
};

class DropDown extends React.Component {
  static Button = ({children}) => {
    return <button>{children}</button>
  };

  static Menu = ({children}) => {
    return <ul style={{
      position: 'absolute',
      top: '100%',
      margin: 0,
      padding: '0',
      listStyle: 'none',
      right: '0px'
    }}>
      {children}
    </ul>
  };

  static MenuItem = ({children}) => {
    return <li style={{margin: 0, padding: '10px', backgroundColor: '#FFF'}}>
      <a>
        {children}
      </a>
    </li>
  };

  state = {
    open: false
  };

  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  open() {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  render() {
    console.log(this.props.options);

    return <div style={{position: 'relative'}}>
      <DropDown.Button>
        ...
      </DropDown.Button>
      <DropDown.Menu>
        <DropDown.MenuItem>Remove</DropDown.MenuItem>
      </DropDown.Menu>
    </div>
  }
}

const App = () => {
  const [locale, setLocale] = React.useState("en");
  const setLanguage = (locale) => {
    setLocale(locale);
  };

  return (
    <Provider store={store}>
      <CookiesProvider>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Router>
            <Container>
              <PageComponent exact path="/" component={ApplicationComponent}/>
              <PageComponent path="/login" hideNavbar component={LoginComponent}/>
              <PageComponent path="/products" component={ApplyLoanComponent}/>
              <PageComponent path="/profile" component={ProfileComponent}/>
              <PageComponent path="/contact" component={ContactComponent}/>

              <NotificationSideBar>
                <Header>
                  <button>
                    CLOSE
                  </button>
                  <span>
                    Notifications
                  </span>
                  <button>
                    SETTINGS
                  </button>
                </Header>
                <Content>
                  <ListContainer>
                    {
                      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => <ListItem key={value}>
                        <div style={{display: 'flex', alignItems: 'center'}}>

                          <Checkbox style={{marginRight: '10px', color: 'red'}} checked={true}/>
                          {/*  Display Disc Or CheckBox*/}
                        </div>
                        <Alert>
                          <b>Some Heading</b>
                          <p>
                            Some really long text goes here but then you need to show ellipssis...
                          </p>
                        </Alert>
                        <div>

                        </div>
                        <div>
                          <DropDown>
                          </DropDown>
                        </div>
                      </ListItem>)
                    }
                  </ListContainer>


                </Content>
                <Footer>
                  <button>
                    Select All
                  </button>
                </Footer>
              </NotificationSideBar>
            </Container>
          </Router>
        </IntlProvider>
      </CookiesProvider>
    </Provider>
  );
};

class PageComponent extends Route {
  constructor(props) {
    super(props);

  }

  render() {
    const navbar = !this.props.hasOwnProperty('hideNavbar') ? <NavBar
      locale={this.props.locale}
      handleLanguage={this.props.setLanguage}/> : null;
    return <>
      {
        navbar
      }
      <Route {...this.props} />
    </>
  }


}

export default App;
