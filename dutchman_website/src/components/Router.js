import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Wildlife from './Wildlife';
import Creeks from './Creeks';
import Hunting from './Hunting';
import Media from './Media';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Wildlife' element={<Wildlife />}></Route>
      <Route exact path='/Creeks' element={<Creeks />}></Route>
      <Route exact path='/Hunting' element={<Hunting />}></Route>
      <Route exact path='/Media' element={<Media />}></Route>
    </Routes>
  );
}

export default Router;