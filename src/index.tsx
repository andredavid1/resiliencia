import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import reportWebVitals from './reportWebVitals';

import { Container, Content } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <Router>
        <Content>
          <Routes />
        </Content>
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
