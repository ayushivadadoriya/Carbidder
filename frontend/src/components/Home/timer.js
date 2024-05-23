import React, { useEffect, useState } from 'react'

function Timer({duration}) {

    const [time,setTime]=useState(duration);
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time - 1000);
        },1000);
    },[time]);

    const getFormattedtime = (miliseconds) =>{
        let total_seconds=parseInt(Math.floor(miliseconds/1000));
        let total_minites=parseInt(Math.floor(total_seconds/60));
        let total_hours=parseInt(Math.floor(total_minites/60));

        let seconds=parseInt(total_seconds%60);
        let minites=parseInt(total_minites%60);
        let hours=parseInt(total_hours%24);

        return `${hours}:${minites}:${seconds}`;
    }
  return (
    <div>{getFormattedtime(time)}</div>
  )
}

export default Timer
