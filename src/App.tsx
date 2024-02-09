import './App.css';
import Header from './components/header';
import QRCodeGenerator from './qrCode';


function App() {
  return (
    <div className="App">
      <Header/>
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
