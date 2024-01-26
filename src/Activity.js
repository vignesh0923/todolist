import { useState } from "react";
import "./Activity.css"
function Activity(){ 
    
    
 //Entered User Activity to Add
    const [eactivity,seteactivity] = useState("")
    
    //activity array usestate
    const [activarr,setActivarr] = useState([{id:1,activity:"Have your Breakfast"}])

    //input value get the value
    function handleChange(e)
    {
        seteactivity(e.target.value)
        console.log("typed");
    }


    //add an value in array formate in values
    function addtoArray()
    {
        setActivarr([...activarr,{id:activarr.length,activity:eactivity}])
        console.log("Added array");
    }


    //delete a array in using function
    function deletefromArr(selectedId)
    {
        var temp = activarr.filter((item)=>{if(item.id!==selectedId){return true}})
        setActivarr(temp)
        console.log("delted");
        
    }

    return(
        <div style={{marginTop:"30px"}} className="activity-container">
            <div className="activity-input-container">
            <h1 style={{fontSize:"3vw"}}>Manage Activities</h1>  
            <input type="text" value={eactivity} onChange={handleChange} className="activity-input" placeholder="What are you plans?"></input>
            <button className="activity-add" onClick={addtoArray}>Add</button>
            </div>

            
            <div className="activity-list-container">
                <h1>Todays Activity</h1>
                {activarr.length===0?<p>You haven't added any activity yet</p>:""}
                {activarr.map(function(item,index){
                    return (
                        <div key={index} className="activity-list-item">
                <p>{item.activity}</p> <p className="activity-delete" onClick={()=>deletefromArr(item.id)}>Delete Activity</p>
                </div>
                    )
                })}
                

            </div>
        </div>
    )
}

export default Activity