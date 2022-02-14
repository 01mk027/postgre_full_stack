import React from 'react';
import moment from 'moment';

function Update({ todo })
{
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
    const [task_desc,setTaskDesc] = React.useState(todo.task_desc);
    const [task_name,setTaskName] = React.useState(todo.task_name);

    const [state_of_task,setStateOfTask] = React.useState(todo.state_of_task);

    const onSubmitForm = async () => {
      try {

          const body = {task_desc,task_name,state_of_task};
          const response = await fetch(`http://localhost:5000/todos/${todo.id}`,{
              method:"PUT",
              headers:{"Content-Type": "application/json"},
              body:JSON.stringify(body)
          })

        //console.log(task_desc,task_name,update_date,state_of_task);

      } catch (error) {
          console.log(error.message);
      }
  }



    return(
      <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id}`}>
            Kaydı Güncelle
            </button>

<div class="modal" id={`id${todo.id}`}>
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Kayıt Güncelleme Penceresi</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>


      <div class="modal-body">
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
      </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-success" onClick={() => {onSubmitForm()}} data-dismiss="modal">Güncelle</button>
      </div>

    </div>
  </div>
</div>
      </div>
    )
}

export default Update;
