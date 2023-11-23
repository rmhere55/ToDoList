"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask , {title, desc}])
    console.log(desc)
    console.log(title)
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler= (h)=>{
    let copytask = [...mainTask]
    copytask.splice(h,1)
    setmainTask(copytask)
  }
  let renderTask = <h2> No task Available</h2>
  if (mainTask.length > 0 ) {
    renderTask =mainTask.map((t,h)=>{
      return( 
        <li className='flex items-center justify-between'>
          <div className='flex justify-between m-5 w-2/3'>
        <h4 className='text-2xl font-semibold'>{t.title}</h4>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler (h)
      }} type="" className='bg-black text-white px-4 py-3 text-2xl  font-bold rounded m-5'>Delete</button>
        </li>)
    })
  }
  return (
    <>
    <h1 className='bg-black  text-white p-5 text-xl font-bold text-center'>RM ToDo List</h1>
    <form onSubmit={submitHandler} className='flex items-center justify-center'>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' name=""
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      placeholder='Enter task here'/>
      
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' name=""
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)}}
    
      placeholder='Enter Discription here'/>
      <button type="" className='bg-black text-white px-4 py-3 text-2xl  font-bold rounded m-5'>
        Add task</button>

    </form>
    <hr/>
    <div className='p-4  bg-slate-200'>
      <ul>
        {renderTask}
      </ul> 
    </div>
    </>
  )
}

export default page
//#1 project completed 8oct 2023 react by rajlaxmi singh 