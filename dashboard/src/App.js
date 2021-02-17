// import logo from './logo.svg';
import './App.css';
import Lowerlargebox from './Lowerlargebox';
import Sidebox from './Sidebox';
import Topcenterbox from './topcenterbox';
import Topleftbox from './topleftbox';
import Toprightbox from './toprightbox';

function App() {
  return (
    <div className="App">
        <Sidebox />
        <div className='RH_boxes'>
          <Topleftbox />
          <Topcenterbox />
          <Toprightbox />
          <Lowerlargebox />
        </div>
    </div>
  );
}

export default App;
