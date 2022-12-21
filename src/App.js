import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FullName from './Componet/FullName';
import Addres from './Componet/Addres';
import ProfilePhote from './Componet/ProfilePhote';
function App() {
  return (
    <div className="App">
      <ProfilePhote />
      <br />
      <Addres />
      <br />
      <FullName />
    </div>
  );
}

export default App;
