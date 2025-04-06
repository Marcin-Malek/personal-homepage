import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeMap } from "./theme";
import { useAppSelector } from "./store";
import { selectTheme } from "./themeSlice";
import About from "./About";
import List from "./List";
import { skillsList, toLearnList } from "./List/contents";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { EmojiWrapper } from "./common/styled";

const App = () => {
	const themeState = useAppSelector(selectTheme);

	return (
		<ThemeProvider theme={themeMap[themeState]}>
			<GlobalStyle />
			<About />
			<main>
				<List
					title={
						<>
							My skillset includes <EmojiWrapper>🛠️</EmojiWrapper>
						</>
					}
					content={skillsList}
				/>
				<List
					title={
						<>
							What i want to learn next <EmojiWrapper>🚀</EmojiWrapper>
						</>
					}
					content={toLearnList}
				/>
				<Portfolio />
			</main>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
