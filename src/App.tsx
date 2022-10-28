import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/DefaultTheme";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import { Nav } from "./components";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
