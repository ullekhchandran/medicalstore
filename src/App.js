
import  Navbar from './components/Navbar'
import { Link } from 'react-router-dom';


function App() {

 


  return (
  <div>
  <Navbar/>


  <div className='p-5 m-5'>
        <div className='p-5 '>
            <Link className='btn btn-pill btn-success m-2 w-100' to={'/create'}>Add Today medicine time Now</Link>
            <Link className='btn btn-pill btn-info m-2 w-100' to={'/read'}>Trake old data Now</Link>
           
           

        </div>
      </div>
  </div>
  );
}

export default App;
