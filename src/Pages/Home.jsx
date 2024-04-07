import React from 'react';
import '../styles/home.css'
import TaskCard from '../shared/TaskCard';
import home from '../assets/home.png';
import dropdown from '../assets/dropdown.png';
import console from '../assets/console.png';
import attendance from '../assets/attendance.png';
import overview from '../assets/overview.png';
import staff from '../assets/staff.png';
import FilterButton from "../Components/Buttons/FilterButton.js";




const Home = ()=>{

   
return (
   <main className="main__content flex">
    
    
    {/* menu section starts here */}
    <aside className="menu">
      
       <div className="home__menu flex items-center gap-3 py-3 pl-8">
           <div className="home__menu__img w-6 h-6 relative"><img src={home} /></div>
           <h5>Home</h5>
       </div>

       <div className="console__menu">
          <div className="console flex items-center gap-0.5">
              <div className="dropdown__arrow relative h-6 w-6"><img src={dropdown} /></div>
              <div className="console__b flex items-center gap-3">
                   <div className="console__img w-6 h-6 relative"><img src={console} /></div>
                   <h5>Console</h5>
              </div>
        </div>

          <div className="console__dropdown grid grid-cols-1 gap-y-3">

               <div className="console__dropdown_option flex items-center gap-3 py-2 pl-10">
                    <div className="console__dropdown_option__img relative w-6 h-6"><img className="attend__img" src={attendance} /></div>
                    <h5>Attendence</h5>
                </div>
                <div className="console__dropdown_option flex items-center gap-3 py-2 pl-10">
                    <div className="console__dropdown_option__img relative w-6 h-6"><img className="over__img" src={overview} /></div>
                    <h5>Overview</h5>
                </div>
                <div className="console__dropdown_option flex items-center gap-3 py-2 pl-10">
                    <div className="console__dropdown_option__img relative w-6 h-6"><img className="staff__img" src={staff} /></div>
                    <h5>Staff</h5>
                </div>

            </div>

       </div>

    </aside>


    {/* Tasks section starts here */}

    <section className="tasks flex flex-col gap-y-6">

        <div className="tasks__title"><h5>Tasks of the day</h5></div>

        <div className="filters flex items-center gap-2">
          <FilterButton button_text="Not Accepted"/>
          <FilterButton button_text="Ongoing"/>
          <FilterButton button_text="Scheduled"/>
          <FilterButton button_text="Completed"/>
          <FilterButton button_text="Delayed"/>
          <FilterButton button_text="Ontime"/>
        </div>
      
    <div className="tasks__main flex gap-6">

   <div className="ongoing__tasks flex flex-col gap-6">
             <TaskCard
                type="ongoing"
                recurring = {1}
                ongoing = {0}
                accepted = {0}
                ontime = {0}
                delayed={0}
                internal = {0}
                time = {20}
                notify = {"blue"}
                items={[ 
                ]}
                services={[  
                ]}
                      
             />
             <TaskCard
                type="ongoing"
                recurring = {1}
                ongoing = {0}
                accepted = {0}
                ontime = {0}
                delayed={0}
                internal = {1}
                time = {1}
                notify = {"red"}
                items={[
                ]}
                services={[
                ]}
                      
             />
             <TaskCard
                type="ongoing"
                recurring = {0}
                ongoing = {1}
                accepted = {1}
                ontime = {0}
                delayed={0}
                internal = {1}
                time = {20}
                notify = {""}
                items={[
                ]}
                services={[
                ]}
                      
             />
             <TaskCard
                type="ongoing"
                recurring = {0}
                ongoing = {0}
                accepted = {1}
                ontime = {0}
                delayed={0}
                internal = {0}
                time = {20}
                notify = {"blue"}
                items={[
                    ["Shampoo",1],
                    ["Conditioner",2,"Please get conditioners."],
                    ["Towel",2]
                ]}
                services={[
                ]}
                      
             />

    </div>

     <div className="scheduled__tasks flex flex-col gap-6">
           <TaskCard
                type="scheduled"
                recurring = {1}
                internal = {1}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="scheduled"
                recurring = {0}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="scheduled"
                recurring = {1}
                internal = {1}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="scheduled"
                recurring = {1}
                internal = {1}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="scheduled"
                recurring = {0}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />
            
    </div>

    <div className="task__history flex flex-col gap-6">
           <TaskCard
                type="taskhistory"
                ontime = {0}
                delayed={1}
                feedback = {1}
                complaint = {1}
                internal = {1}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="taskhistory"
                ontime = {1}
                delayed={0}
                feedback = {5}
                complaint = {1}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="taskhistory"
                ontime = {1}
                delayed={0}
                feedback = {5}
                complaint = {1}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="taskhistory"
                ontime = {0}
                delayed={1}
                feedback = {0}
                complaint = {0}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />
            <TaskCard
                type="taskhistory"
                ontime = {0}
                delayed={1}
                feedback = {1}
                complaint = {1}
                internal = {0}
                items={[
                ]}
                services={[
                ]}
                      
            />

    </div>  

    </div>
    </section>


   </main>
)

};


export default Home;