import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
import { selectTheme } from './slice';
import About from './About';
import List from './List';
import { skillsList, toLearnList } from './List/contents';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <About />
      <main>
        <List
          title={<>My skillset includes <span style={{ fontSize: `0.8em` }}>🛠️</span></>}
          content={skillsList}
        />
        <List
          title={<>What i want to learn next <span style={{ fontSize: `0.8em` }}>🚀</span></>}
          content={toLearnList}
        />
        <Portfolio />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
