import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns]= useState(0);
    const [Sixes,setSixes] = useState(0);

     const handleSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
     }
      
      const handleSix = () =>{
        const updatedRuns = runs + 6;
        const updatedSixes = Sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
      }
       

    return (
        <div>
            <h3>Player: Bangla Batsmans</h3>
            <p><small>Six: {Sixes}</small></p>
            {
                runs > 50 && <p>Your score: 50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}