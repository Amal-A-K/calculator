import React, {useState} from 'react'
import './Calculator.css'

const Calculator = () => {

    const [task,setTask] = useState('')
  return (
    <div className='container'>
        <div className='calculator'>
            <form action=''>
                <div className='display'>
                    <input type='text' value={task}/>
                </div>
                <div>
                    <input type='button' value='AC' onClick={e=>{setTask('')}}/>
                    <input type='button' value='DE'onClick={e=>{setTask(task.slice(0,-1))}}/>
                    <input type='button' value='%' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='/' onClick={e=>{setTask(task + e.target.value)}}/>
                </div>
                <div>
                    <input type='button' value='7' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='8' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='9' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='*' onClick={e=>{setTask(task + e.target.value)}}/>
                </div>
                <div>
                    <input type='button' value='4' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='5' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='6' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='+' onClick={e=>{setTask(task + e.target.value)}}/>
                </div>
                <div>
                    <input type='button' value='1' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='2' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='3' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='-' onClick={e=>{setTask(task + e.target.value)}}/>
                </div>
                <div>
                    <input type='button' value='00' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='0' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='.' onClick={e=>{setTask(task + e.target.value)}}/>
                    <input type='button' value='=' onClick={e=>{setTask(eval(task))}}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator