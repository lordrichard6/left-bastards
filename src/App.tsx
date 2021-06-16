import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro'




function App() {
  return (
    <AppContainer>
      Left Bastards
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