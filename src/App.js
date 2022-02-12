import "./App.css";
import Container from "./components/Container";
import Button from "./components/Button";
import FormAddTransaction from "./components/FormAddTransaction"


function App() {
  return <div className='App'>
    <Container>
      <Button text="Добавить" color="green" />
      <Button text="Отмена" color="white" />
      <FormAddTransaction />
    </Container>
  </div>;
}

export default App;
