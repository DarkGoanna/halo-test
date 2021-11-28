import './App.css';
import Modal from './conponents/common/Modal/ModalContainer';
import Shop from './conponents/Shop/ShopContainer';

function App(props) {
  return (
    <div className="App container">
      <Shop />
      <Modal />
    </div>
  );
}

export default App;
