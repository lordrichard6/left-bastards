import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro'


import { LandingPage } from './containers/landingPage'


function App() {
  return (
    <AppContainer>
      <LandingPage />
      
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:mx-12
  `}
`