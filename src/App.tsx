import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro'


// import { LandingPage } from './containers/landingPage'
import { Homepage } from './containers/homepage'

function App() {
  return (
    <AppContainer>
      {/* <LandingPage /> */}
      <Homepage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:mx-32
  `}
`