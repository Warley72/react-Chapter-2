import styled from 'styled-components'
import { GlobalStyle } from './style/global';

const Title = styled.h1`
font-size: 64px;
color: #8257e6;
`


export function App() {
  return (
    <div className="App">
        <h1>hello world</h1>
        <GlobalStyle />
    </div>
  );
}

  
