import React, { useState }  from 'react';
import ToDoLists from './components/ToDoLists';

const App = ()=>{

  const [itemList,setItemList] = useState("");
  const [item,setItem] = useState([]);

  const  itemEvent=(event)=>{
    setItemList(event.target.value);
  }

  const addList = () =>{
    setItem([...item, itemList]);
    setItemList("");
  }

  const deleteItem = (id) => {
    setItem((oldItem)=>{
      return oldItem.filter((arrayElem,index)=>{
        return index!==id;
      })
    })
  }

  // useEffect(()=>{
  //   console.log(item);
  // }, [item]);


  return <>
  
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>My To-Do List</h1>
        <br />
        <input type="text" placeholder='Add your Item' value={itemList} onChange={itemEvent} />
        <button onClick={addList}> + </button>

      <ol>
          {item.map((itemval,index)=>{
              return <ToDoLists 
                key={index} 
                id = {index}
                text = {itemval}
                onSelect = {deleteItem}
                />
            })}
      </ol>
      </div>
    </div>
  
  
  
  </>
}

export default App;