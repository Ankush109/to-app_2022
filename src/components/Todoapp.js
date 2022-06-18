import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./todo.css"
import todo from "./todo.svg";

function Todoapp() {
    
    const [data,setdata]=useState("")
    const[items,setitems]=useState([])
    const additem =()=>{
        if(!data)
        {

        }else{
        setitems([...items,data])
        setdata("")
        }
    }
    // to delete the items
    const deleteitem=(id)=>{
        const updateditem = items.filter((e,ind)=>{
            return ind!==id
        })
        setitems(updateditem)
    }
    // remove all
    const removeall=()=>{
        setitems([])
    }
  return (
    <div>
        <div className='main-div'>
                <div className='child-div'>
                        <figure>
                            <img src={todo}>
                            
                            </img>
                            <figcaption>Add your list here</figcaption>
                        </figure>
                        <div className='addItems'>
                            <input type="text" placeholder=' add item'
                            value={data}
                            onChange={(e)=>setdata(e.target.value)}
                            />
                            <i className="fa fa-plus add-btn" title="Add item" onClick={additem}></i>
                        </div>
                        <div className='showItems'>
                            {
                                items.map((curr,index)=>{
                                        return (
                                            <div className='eachItem' key={index}>
                                                <h3>{curr}</h3>
                                            <i className='far fa-trash-alt add-btn' title='delete item' onClick={()=>deleteitem(index)} ></i>
                                            </div>
                                        )
                                })  
                            }
                        </div>
                     
                        <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeall} target="_blank" ><span>CHECK LIST </span></button>
                    </div>
                       
                </div>
        </div>
    </div>
  )
}

export default Todoapp