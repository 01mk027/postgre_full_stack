const dbcontext = require('./db_connection/db_connection');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const parse = require('postgres-date')
const moment = require('moment');




//const { application } = require('express');
router.use(express.json());

//test amaçlı route...
router.get('/',async (req,res) => {
  res.send('Bu route docker için yazılmıştır.');
})


//todo oluştur
router.post('/todos',async (req,res) => {
  try
  {
    const {task_desc,task_name,state_of_task} = req.body;
    let add_date =  moment().add(3,'hour');
    const todo = await dbcontext.query("INSERT INTO todos (task_desc,task_name,add_date,state_of_task) VALUES ($1,$2,$3,$4) RETURNING *",[task_desc,task_name,add_date,state_of_task]);
    res.json(todo.rows[0]);
  } catch (error) {
      console.log(error.message);
  }
});
//tüm todoları al
router.get('/todos',async(req,res) => {
    try
    {
        const todos = await dbcontext.query("SELECT * FROM todos ORDER BY id DESC");
        //console.log(moment(todos.rows[0].add_date).format('YYYY-MM-DD'));
        for(let i=0;i<todos.rows.length;++i)
        {
          todos.rows[i].add_date = moment(todos.rows[i].add_date).format('YYYY-MM-DD HH:mm:ss');
          if(todos.rows[i].update_date)
          {
            todos.rows[i].update_date = moment(todos.rows[i].update_date).format('YYYY-MM-DD HH:mm:ss');
          }
          else
          {
            todos.rows[i].update_date = "Henüz güncelleme yapılmamıştır."
          }
        }
        res.json(todos.rows);
    }
    catch(error)
    {
        console.log(error.message);

    }
})
//id'ye göre todo al
router.get("/todos/:id",async(req,res) => {
  try
  {
      const {id} = req.params;
      const aTodo = await dbcontext.query("SELECT * FROM todos WHERE id = $1",[id]);
      res.json(aTodo.rows[0]);
  }
  catch(error)
  {
     console.log(error.message);
  }
});



//todo güncelle
router.put('/todos/:id',async(req,res) => {
  try
  {
      const {id} = req.params;
      let update_date =  moment().add(3,'hour');
      const {task_desc,task_name,state_of_task} = req.body;
      const updatedTodo = await dbcontext.query("UPDATE todos SET task_desc=$1,task_name=$2,update_date=$3,state_of_task=$4 WHERE id=$5",[task_desc,task_name,update_date,state_of_task,id]);
      res.json("OK");
  }
  catch(error)
  {
      console.log(error.message);
  }
});


module.exports = router;
