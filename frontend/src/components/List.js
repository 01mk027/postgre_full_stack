import React from 'react';
import Update from './Update';

function List()
{

  const [collectedTodos, setCollectedTodos] = React.useState([]);

  async function collectTodos()
  {
      try {
          const response = await fetch('http://localhost:5000/todos').then(resp => resp.json()).then(json => setCollectedTodos(json));
          
      } catch (error) {
          console.log(error.message);
      }
  }


  React.useEffect(() => {
      collectTodos();
  },[collectedTodos])



   
  return(
    <div>
    <table class="table table-bordered mt-5">
    <thead>
      <tr>
        <th>Görev Açıklaması</th>
        <th>Görev Adı</th>
        <th>Eklenme Tarihi</th>
        <th>Güncelleme Tarihi</th>
        <th>Durum</th>
        <th>Güncelleme Butonu</th>
      </tr>
    </thead>
    <tbody>
      {
          collectedTodos.map(item => (
              <tr key={item.id}>
                  <td>{item.task_desc}</td>
                  <td>{item.task_name}</td>
                  <td>{item.add_date}</td>
                  <td>{item.update_date}</td>
                  <td>{item.state_of_task}</td>
                  <td><Update todo={item}/></td>
              </tr>
          ))
      }
    </tbody>
  </table>

      </div>
  )
}

export default List;