import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import myTheme from "./styles/DefaultTheme";
import { Route, Routes } from "react-router-dom";
import { Home, Movies, Series } from "./pages";

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
