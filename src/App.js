import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName'
import Address from './component/profile/Address';
import Navb from './component/profile/Navb'
import Footer from './component/profile/Footer';

function App() {
  return (
    <div  className="App">
      <Navb  />
      <ProfilePhoto />
      <FullName />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
