
import Home from './component/Home';
import { Route,Routes } from 'react-router-dom';

import Contact from './component/Contact';
import Service from './component/Service';
function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      </Routes>
      
        
    </div>
  );
}

export default App;
