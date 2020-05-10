import React, {useState} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


export default props =>{
    
    const [displayValue, setdisplayValue] = useState('')
    const [values, setValues] = useState([null, null])
    const [operation, setOperation] = useState(null)
    

    const displayLabel = (e) => {
        if( (displayValue !== '') ){
            setdisplayValue(displayValue+e)
        }else{
            setdisplayValue(e)
        }

        if(values[0] !== null){
            console.log("eu to no if eu tenho valor 1")
            console.log(values)
        }
    };

    const operator = (e) =>{
        setValues([displayValue])
        console.log(values)

        setOperation(e)
        displayLabel(e)
    };

    const equal = (e)  => {
    };

    const clear = () => {
        setdisplayValue('')
        setOperation(null)
    };
 

        return(

        <div className="calculator">

            <Display value={displayValue}/>

            <Button label='C' clear click={clear}></Button>
            <Button label='( )' operation ></Button>
            <Button label='%' operation click={operator} ></Button>
            <Button label='/' operation click={operator} ></Button>
            <Button label='7' click={displayLabel} ></Button>
            <Button label='8' click={displayLabel} ></Button>
            <Button label='9' click={displayLabel} ></Button>
            <Button label='x' operation click={operator} ></Button>
            <Button label='4' click={displayLabel} ></Button>
            <Button label='5' click={displayLabel} ></Button>
            <Button label='6' click={displayLabel} ></Button>
            <Button label='-' operation click={operator} ></Button>
            <Button label='1' click={displayLabel} ></Button>
            <Button label='2' click={displayLabel} ></Button>
            <Button label='3' click={displayLabel} ></Button>
            <Button label='+' operation click={operator}></Button>
            <Button label='+/-'></Button>
            <Button label='0' click={displayLabel} ></Button>
            <Button label='.' ></Button>
            <Button label='=' equal click={equal}></Button>


        </div>
        )
}
