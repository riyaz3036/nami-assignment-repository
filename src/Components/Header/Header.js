import React from 'react';
import './Header.css';
import notification from '../../assets/notification.png';
import user from '../../assets/user.png';
import notification_b from '../../assets/notification_b.png';
import search from '../../assets/search.png';
import cross from '../../assets/cross.png';
import FilterButton from "../Buttons/FilterButton.js"






const Header = ()=>{

  
return (
    <>
    {/* Header for mobile */}
    <header className="header__mob justify-center">
       <div className="header__mob__main grid justify-center gap-y-6">


       <div className="header__mob__top flex justify-between items-center">

       <h5 className="m-0 font-semibold">Tasks of the Day</h5>

       <div className="header__mob__right flex items-center gap-4">
        <div className="search relative w-6 h-6"><img className="absolute" src={search} /></div>
        <div className="notification_b relative w-6 h-6"><img className="absolute" src={notification_b} /></div>
        <img className="user__b w-8 h-8" src={user} />
       </div>
       </div>

       <div className="header__mob__middle flex justify-between items-center h-9 py-2.5 px-6 rounded-r-xl">
          <h5 className="m-0 font-semibold" style={{ color: '#CC2610' }}>Negative Notification type description</h5>
          <div className="cross flex justify-center items-center w-5 h-5"><img className="cross__img" src={cross} /></div>
       </div>

       <div className="header__mob__bottom">
        
          <FilterButton button_text="Not Accepted"/>
          <FilterButton button_text="Ongoing"/>
          <FilterButton button_text="Scheduled"/>
          <FilterButton button_text="Completed"/>
          <FilterButton button_text="Delayed"/>
          <FilterButton button_text="Ontime"/>
        
       </div>

    </div>
    </header>

    {/* Header for desktop */}
    <header className="header__desk flex justify-between items-center h-26 mb-8 py-6 px-8" >

   
        <h1 className="header__title font-semibold m-0">ABCHotel</h1>
   

    <div className="header__right flex justify-between items-center h-12">

        <div className="bell relative w-12 h-12 pt-1 pl-2 cursor-pointer">
            <img className="bell__img absolute" src={notification} />
            <div className="dot__ w-2 h-2 rounded absolute"></div>
        </div>
        <img className="user__img w-12 h-12 cursor-pointer" src={user} /> 
        
    </div>


    </header>
    </>
)
};


export default Header;