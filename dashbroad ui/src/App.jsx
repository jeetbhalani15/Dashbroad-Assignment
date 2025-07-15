import React from 'react'
import 'typeface-inter';
import GlobalStyles from './GlobalStyles';
import Index from './components';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <GlobalStyles />
      <Index/>
    </div >
  )
}

export default App