import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
import { selectTheme } from './slice';
import About from './About';
import List from './List';
import { skillsList, toLearnList } from './List/contents';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <About />
      <List
        title="My skillset includes "
        titleIcon={<span style={{ fontSize: `24px` }}>🛠️</span>}
        content={skillsList}
      />
      <List
        title="What i want to learn next "
        titleIcon={<span style={{ fontSize: `24px` }}> 🚀</span>}
        content={toLearnList}
      />
    </ThemeProvider>
  );
}

export default App;
