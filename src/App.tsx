import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro'


// import { LandingPage } from './containers/landingPage'
import { Homepage } from './containers/homepage'
import {Footer} from './components/footer'

function App() {
  return (
    <AppContainer>
      {/* <LandingPage /> */}
      <Homepage />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
`