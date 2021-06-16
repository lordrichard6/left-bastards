import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro'


import {Navbar} from './components/navbar'
import {Footer} from './components/footer'
// import { LandingPage } from './containers/landingPage'
// import { Homepage } from './containers/homepage'
import { Members } from './containers/members'


function App() {
  return (
    <AppContainer>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Homepage /> */}
      <Members />
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