import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/DefaultTheme";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
