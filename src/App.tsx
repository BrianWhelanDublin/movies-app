import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/DefaultTheme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>App</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
