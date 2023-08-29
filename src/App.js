import image from './toDoList2.jpg'
import image2 from './Done2.jpg'
import Planner from './Planner'

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="box">
      <img className='images' src={image} alt='toDoList' width='300px'/>
      </div>
      <div className="box">
      <h1>TO DO LIST</h1>
      </div>
      <Planner/>
      <div className="box">
      <img className='images' src={image2} alt='done' width='300px'/>
      </div>
    </div>
  );
}

export default App;
