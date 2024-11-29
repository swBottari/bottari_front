import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';

import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './pages/header/Header';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
