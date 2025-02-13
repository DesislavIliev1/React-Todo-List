import { useState } from 'react';
export function NewTodosForm({onSubmit}){
   

    const [newItem, setNewItem] = useState("")

    function handlerSubmit(e){
        e.preventDefault()
        if(newItem === "") return
    
        onSubmit(newItem)

       
        setNewItem("")
      }

    return(
    <form className="new-item-form" onSubmit={handlerSubmit}>
      <div className="form-row">
        <label htmlFor="item" className="form-label"></label>
        <input value={newItem} onChange={e=> setNewItem(e.target.value)} 
        type="text" 
        id="item" />
      </div>
      <button className="btn" >Add</button>
    </form>
    )

}