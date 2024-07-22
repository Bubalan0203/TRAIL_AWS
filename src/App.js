// src/App.js
import {useState} from 'react';


function App() {
    const [list,SetList] = useState([]);
    const [count,SetCount] = useState(1)
    

    function addItem(){
    

      let itemName = 'Item'+ count;
      SetCount((currentState)  => { return currentState+1 })
      SetList((currentState) => { return [...currentState, itemName]})
      
      console.log('current state', list)

  }


  function removeItem(){
    let itemName = 'Item'+ count;
    SetCount((currentState)  => { return currentState-1 })
    SetList((currentState) => { return [...currentState, itemName]})
   
   
    


    console.log('current state', list)
    
  }
  


 return (
 
     <>
       <h1> list </h1>
       <button onClick={addItem} > add item</button>
       <button onClick={removeItem} >  remove</button>
       <ul> {
        list.map((el,index) => <li key={index}>{el} </li> )
       }
       </ul>
 
    </>

      ); 
}
export default App;
