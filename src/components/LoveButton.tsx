
import { useState } from 'react'

const LoveButton = () => {
    const [number,setNumber] = useState(0)
      const loveList = ["Maple",'Rilyn','Juniper']
      const [name, setName] = useState(loveList[0])
      const handleClick = () =>{
        if(number == loveList.length-1){
          setName(loveList[0])
          setNumber(0)
        }else{
          const newNum = number + 1
          setNumber(newNum)
          setName(loveList[newNum])
        }
    
      }
  return (
    <>
      <h1 style={{color: '#157eabff'}}>Hi {name} I Love You</h1>
      <button onClick={handleClick}>Love Generator</button>
    </>
  )
}

export default LoveButton