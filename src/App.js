import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import About from './About';
import { GlobalStyle } from './GlobalStyle';
import { selectTheme } from './slice';
import { lightTheme, darkTheme } from './theme';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <About />
    </ThemeProvider>
  );
}

export default App;
