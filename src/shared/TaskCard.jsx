import React from 'react';
import './task-card.css';
import calender from '../assets/calender.png';
import green_clock from '../assets/green_clock.png';
import spoon from '../assets/spoon.png';
import arrows from '../assets/arrows.png';
import tick from '../assets/tick.png';
import one from '../assets/one.png';
import star from '../assets/star.png';
import red_clock from '../assets/red_clock.png';


const TaskCard =(props)=>{
   
  
return (

<div className="task__card p-2 rounded-xl grid gap-y-3 grid-cols-1">

{/* top section of card starts here */}
<div className="task__card__top flex justify-between items-center">

    <div className="card__top__left flex items-center gap-1">

       <div className="staff__member flex items-center py-0.5 px-1 rounded">
       <div className="staff__member__img relative w-4 h-4 rounded-sm"><img className="w-3 h-3 absolute" src={spoon}/></div>
       <h5 className="m-0 font-semibold">Rajesh</h5>
       <div className="red__dot w-2 h-2 rounded"></div>
       </div>

       
       {
         (props.type==="ongoing" && props.ongoing) ?
        <div className="tag__a" style={{ backgroundColor: '#F7F7F7' }}>
            <h5 style={{ color: '#F1AE11' }}>Ongoing</h5>
        </div>
        :
        <></>
       }
       
       {
        (props.type==="ongoing" && !props.accepted)?
        <div className="tag__a" style={{ backgroundColor: '#F7F7F7' }}>
            <h5 style={{ color: '#CC2610' }}>Not Accepted</h5>
       </div>  
        :
        <></>    
       }

       {
        (props.type!=="scheduled" && props.ontime)?
        <div className="tag__a" style={{ backgroundColor: '#00A441' }}>
            <h5 style={{ color: '#FFFFFF' }}>On - Time</h5>
        </div>
        :
        <></>
       }

       {
        (props.type!=="scheduled" && props.delayed)?
        <div className="tag__a" style={{ backgroundColor: '#CC2610' }}>
            <h5 style={{ color: '#FFFFFF' }}>Delayed</h5>
        </div>
        :
        <></>
       }
       

       {
        (props.type==="taskhistory" && props.complaint)?
        <div className="tag__a" style={{ backgroundColor: '#CC2610' }}>
            <h5 style={{ color: '#FFFFFF' }}>Complaint</h5>
        </div>
        :
        <></>
       }    


       {
        (props.type !== "taskhistory" && props.recurring) ? (
           <div className="tag__b"><div className="tag__b__img"><img src={arrows} alt="Arrows Icon" /></div></div>
        ) : (
        (props.type !== "taskhistory" && !props.recurring) ? (
           <div className="tag__b"><div className="tag__b__img"><img src={one} alt="One Icon" /></div></div>
        ) : (
        <></>
        )
        )
       }
    
    </div>
 
    
    <div className="card__top__right">
        {(props.type==="ongoing" && props.time) ? (
           props.time <= 10 ? (
           <div className="time__ flex justify-center items-center gap-1 py-0.5 px-1" style={{ backgroundColor: '#F4D8D8'}}>
           <div className="time__img w-4 h-4 relative"><img src={red_clock} alt="Red Clock Icon" /></div>
           <p style={{ color: '#CC2610' }}>{props.time} min</p>
           </div>
        ) : (
           <div className="time__ flex justify-center items-center gap-1 py-0.5 px-1" style={{ backgroundColor: '#D7FFE7'}}>
           <div className="time__img w-4 h-4 relative"><img src={green_clock} alt="Green Clock Icon" /></div>
           <p style={{ color: '#00A441' }}>{props.time}min</p>
           </div>
        )
        ) : (
           <></>
        )}

        
        {
           (props.type==="taskhistory" && props.feedback > 0) ?
           <div className="rating__ flex justify-center items-center h-5 w-10 gap-1 py-0.5 px-2" style={{ backgroundColor: props.feedback <= 2 ? '#CC2610' : props.feedback === 3 ? '#F1AE11' : '#00A441' }}>
            <p>{props.feedback}</p>
            <div className="rating__img relative w-3 h-3"><img src={star}/></div>
           </div> 
           :
           <></>
        }
    </div>

    

</div>



{/* Title and type of task (internal/ by guest) */}
<div className="task__card__title flex justify-between items-center">

    <h4 className="m-0 font-semibold">Routine Cleaning</h4>

    {
      props.internal?
      <div className="tag__a" style={{ backgroundColor: '#F7F7F7' }}>
            <h5 style={{ color: '#5F69C7' }}>Internal Task</h5>
      </div>
      :
      <div className="tag__a" style={{ backgroundColor: '#F7F7F7' }}>
            <h5 style={{ color: '#DC5B19' }}>Guest Task</h5>
      </div>
    }

</div>


{/* date and id section */}
<div className="task__card__date flex justify-between items-center">
    <div className="date__time flex items-center">
        <div className="date__time_img w-4 h-4 relative"><img src={calender} /></div>
        
        <p>21 Jul 2024 | 03:00 am</p>
    </div>

    <p className="id__ m-0 font-medium">#68988</p>

</div>


{/* From to section */}
<div className="task__card__names flex justify-between">
    <p>From:Pantry</p>
    <p>To:Reception</p>
</div>


{/* Item/Service list section */}
{
    (props.items.length !== 0 || props.services.length!==0)?

    <div className="service__item__list grid p-3 gap-y-3">

    {
        props.items.map((item)=>(
            <div className="item_item grid gap-y-3">
              <div className="item__ flex gap-2"><p>{item[0]}</p><h5 className="item__count">×{item[1]}</h5></div>
              {item[2]? <p className="item__instruction">Instructions: {item[2]}</p> : <></>}
            </div>
        ))
    }

    {
        props.services.map((service)=>(
            <div className="service_item grid gap-y-3">
              <div className="service__ flex gap-2"><p>{service[0]}</p></div>
              {service[1]?<p className="service__instruction"><span>Instructions:</span>  {service[1]}</p>:<></>}
            </div>
        ))
    }
        
</div>
:
<></>
}



{/* Notify Staff section */}
{
    props.type==="ongoing" && props.notify?
    <button className="notify__staff flex justify-center items-center gap-2 py-2 px-3" style={{ backgroundColor: props.notify === "red" ? '#CC2610' : '#5F69C7' }}>
    <div className="notify__img w-5 h-5 relative"><img src={tick} /></div>
    <h5>Notify Staff</h5>
    </button>
    :
    <></>
}



{/* Details section */}
{ 
    props.type!=="ongoing"?
<button className="view__details flex justify-center items-center py-2 px-3">
    <h5>View Details</h5>
</button>
:
<></> 
}


</div>

)
};

export default TaskCard;