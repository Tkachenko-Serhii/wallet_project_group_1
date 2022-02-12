import "./App.css";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  return <div className='App'>
    <Container>
      <Button text="Добавить" color="green" />
      <Button text="Отмена" color="white" />
    </Container>
  </div>;
}

export default App;
