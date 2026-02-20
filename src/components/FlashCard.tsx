import { useState } from "react"
import farsiFlashCards from '../assets/language.json'

const FlashCard = () => {
    const [arrayPosition,setArrayPosition] = useState(0)
    const [frontSide, setFrontSide] = useState(true)
    const [frontText, setFrontText] = useState(true)
    const [rearText, setRearText] = useState(false)
    const [english, setEnglish] = useState(farsiFlashCards[arrayPosition].english)
    const [farsi, setFarsi] = useState(farsiFlashCards[arrayPosition].farsi)
    const [translit, setTranslit] = useState(farsiFlashCards[arrayPosition].transliteration)

    const handleFlip = (toEnglish=false) =>{
        if(frontSide){
            setFrontText(false)
            setTimeout(()=>{
                setFrontSide(false)
                setRearText(true)
            },301)
        }else if(toEnglish){
             setRearText(false)
            setTimeout(()=>{
                setFrontSide(true)
                setFrontText(true)
            },301)
        }else{
             setRearText(false)
            setTimeout(()=>{
                setFrontSide(true)
                setFrontText(true)
            },301)
        }
    }
    const handleNext = () =>{
        handleFlip(true)

        if(arrayPosition == farsiFlashCards.length-1){
            setArrayPosition(0)
            setEnglish(farsiFlashCards[0].english)
            setFarsi(farsiFlashCards[0].farsi)
            setTranslit(farsiFlashCards[0].transliteration)
            
        }else{
const nextPos = arrayPosition + 1
        setArrayPosition(nextPos)
        setEnglish(farsiFlashCards[nextPos].english)
        setFarsi(farsiFlashCards[nextPos].farsi)
        setTranslit(farsiFlashCards[nextPos].transliteration)
        }

    }
  return (
    <>
    <div className="w-full h-[200px] border-[1px] border-slate-800 rounded-md bg-black/20 grid place-content-center"
    onClick={(e)=>{
        e.stopPropagation();
        handleFlip()
    }}>
        {frontSide ? (
            <>
            <h3 className={`text-gray-600 transition-opacity duration-300 ${frontText ? 'opacity-100':'opacity-0'}`}>English</h3>
            <h2 className={`text-black text-2xl transition-opacity duration-300 ${frontText ? 'opacity-100':'opacity-0'}`}>{english}</h2>
            </>
        ) : (
            <>
            <h3 className={`text-gray-600 transition-opacity duration-300 ${rearText ? 'opacity-100':'opacity-0'}`}>Farsi</h3>
            <h2 className={`text-black text-2xl transition-opacity duration-300 ${rearText ? 'opacity-100':'opacity-0'}`}>{farsi}</h2>
            <h3 className={`text-gray-600 transition-opacity duration-300 ${rearText ? 'opacity-100':'opacity-0'}`}>{translit}</h3>
            </>
        )}
    </div>
    <button onClick={handleNext}>
        Next
    </button>
    </>
  )
}

export default FlashCard