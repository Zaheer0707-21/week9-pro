import Fav from './componends/favstudentlist';
import List from './componends/studentlist';
import Context from './componends/contents';

import { Route,Routes,BrowserRouter , Link} from 'react-router-dom';
function App(){
  
  return (
    <Context>
    <BrowserRouter>
    <nav className="bg-red-500 p-10 flex flex-row gap-10 text-center">
        <div><Link to={"/"} className='underline text-white text-2xl'>List of Students</Link>
        </div>
        <div>
        <Link to={"/fav"} className='underline text-white text-2xl'>Favourite Students</Link>
        </div>
        
    </nav>
    <Routes>
        <Route path='/' element={<List/>}></Route>
        <Route path='/fav' element={<Fav/>}></Route>
    </Routes>
    </BrowserRouter>
    </Context>
   
  );
}

export default App;