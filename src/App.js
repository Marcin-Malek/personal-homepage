import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Normalize from 'react-normalize';
import { lightTheme, darkTheme } from './theme';
import { selectTheme } from './slice';
import About from './About';
import List from './List';
import { skillsList, toLearnList } from './List/contents';
import Portfolio from './Portfolio';
import Footer from './Footer';
import { EmojiWrapper } from './common/styled';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Normalize />
      <GlobalStyle />
      <About />
      <main>
        <List
          title={<>My skillset includes <EmojiWrapper>🛠️</EmojiWrapper></>}
          content={skillsList}
        />
        <List
          title={<>What i want to learn next <EmojiWrapper>🚀</EmojiWrapper></>}
          content={toLearnList}
        />
        <Portfolio />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
