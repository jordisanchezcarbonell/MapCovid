import React from 'react';
import Layout from 'Components/Layout';
import { AppContainer } from './styled';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => (
  <HelmetProvider>
    <AppContainer>
      <Helmet>
        <title>Covid-19</title>
        <meta name="description" content="COVID-19 Tracker" />
        <meta name="keywords" content="COVID-19,COVID,Tracker" />
      </Helmet>
      <Layout />
    </AppContainer>
  </HelmetProvider>
);

export default App;
