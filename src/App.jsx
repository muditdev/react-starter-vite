import React, { useState } from 'react'
import './App.scss'

import styled from 'styled-components'

const Feature = styled.div`
  font-size: 1.25em;
  margin: 5px 0;
  font-weight: 600;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container>
        {/* <header>Welcome to starter kit with vite !</header> */}
        <Feature>Hands on SCSS support. </Feature>
        <Feature>Styled components built-in. </Feature>
        <Feature>ESlint hands-on </Feature>
        <button
          type="button"
          onClick={() => setCount((orevCount) => orevCount + 1)}
        >
          Count {count}
        </button>
      </Container>
    </div>
  )
}

export default App
