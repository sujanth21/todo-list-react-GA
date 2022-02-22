import "./App.css";
import MyList from "./components/MyList";

// Styles
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <MyList />
      </Container>
    </>
  );
};

export default App;
