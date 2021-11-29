import './App.css';
import Modal from './conponents/common/Modal/ModalContainer';
import Shop from './conponents/Shop/ShopContainer';
import classes from "./App.module.sass";


function App(props) {
  return (
    <div className="App container">

      <Shop />
      <Modal />

    </div>
  );
}

export default App;
