import React from 'react';
import moment from 'moment';


function Insert()
{
 /*
 task_desc VARCHAR(255),
 task_name VARCHAR(255),
 add_date DATE,
 update_date DATE,
 state_of_task VARCHAR(255)*/



 const [task_desc, setTaskDesc] = React.useState("");
 const [task_name,setTaskName] = React.useState("");
/* const [add_date,setAddDate] = React.useState(setInterval(() => {
   setAddDate(moment().format("YYYY/MM/DD HH:mm:ss"));
 }, 1000));
*/
 //const [update_date,setUpdateDate] = React.useState("");
 const [state_of_task,setStateOfTask] = React.useState("");







/*setInterval(() => {
   setAddDate(moment().format("YYYY/MM/DD HH:mm:ss"));
 }, 1000);
 */







/*
        <div className="mb-3">
            <label htmlFor="addDate">Add Date</label>
            <input type="date" className="form-control" id="addDate" value={add_date} onChange={(e) => setAddDate(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="updateDate">Update Date</label>
            <input type="date" className="form-control" id="updateDate" value={update_date} onChange={(e) => setUpdateDate(e.target.value)}/>
        </div>
*/


 const onSubmitForm = async (e) => {
     e.preventDefault();
     try {
         if(task_desc.length == 0 || task_name == 0 || state_of_task == 0)
         {
            alert("Boş girdi yapılamaz");
            return;         
         }
         const body = {task_desc,task_name,state_of_task};
         const response = await fetch("http://localhost:5000/todos",{
             method:"POST",
             headers:{"Content-Type": "application/json"},
             body:JSON.stringify(body)
         })
         setTaskDesc('');
         setTaskName('');
         setStateOfTask('');

     } catch (error) {
         console.log(error.message);
     }
 }



  return(
      <div className='container'>
      <form className="mt-5" onSubmit={onSubmitForm}>

       <div className="mb-3">
            <label htmlFor="taskDesc" className="col-md-2 col-form-label">Görev Açıklaması</label>
            <input type="text" className="form-control" id="taskDesc" value={task_desc} onChange={(e) => setTaskDesc(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="taskName" className="col-md-2 col-form-label">Görev İsmi</label>
            <input type="text" className="form-control" id="taskName" value={task_name} onChange={(e) => setTaskName(e.target.value)}/>
        </div>



        <div className="mb-3">
            <label htmlFor="state" className="col-md-2 col-form-label">Durum</label>
            <input type="text" className="form-control" id="state" value={state_of_task} onChange={(e) => setStateOfTask(e.target.value)}/>
        </div>



        <button className="btn btn-success">Ekle</button>
        </form>
      </div>
  )
}

export default Insert;
