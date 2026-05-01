import express from "express";
import cors from "cors";
import userservices from "./Models/user-services.js"

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World :) ");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
    if(name != undefined && job != undefined)
    {
     userservices.findUserByName_Job(name,job)
     .then(result => res.send({users_list :result}))
     .catch(error => res.status(500).send({error: error.message}));
    }
    else if(name)
    {
      userservices.findUserByName(name)
     .then(result => res.send({users_list :result}))
     .catch(error => res.status(500).send({error: error.message}));
    }
    else if(job)
    {
     userservices.findUserByJob(job)
     .then(result => res.send({users_list :result}))
     .catch(error => res.status(500).send({error: error.message}));
    }
    else 
    {
    userservices.getUsers()
    .then(result => res.send({users_list :result}))
    .catch(error => res.status(500).send({error: error.message}));

    }
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  userservices.findUserById(id)
  .then(result =>{if (result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }})
  .catch(error => res.status(500).send({error: error.message}));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
    userservices.deleteUserById(id)
  .then(result =>{if (result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.status(204).send();
  }})
  .catch(error => res.status(500).send({error: error.message}));

});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userservices.addUser(userToAdd)
  .then(result => res.status(201).send(result))
  .catch(error => res.status(400).send({error: error.message}));
});
/*const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

const findUserByNameAndJob = (name,job) => {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["job"] === job 
  );
};

app.get("/users/find", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  if (name != undefined && job != undefined) {
    let result = findUserByNameAndJob(name,job);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

const findUserById = (id) =>
  users["users_list"].find((user) => String(user["id"]) === String(id));

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    users["users_list"] = users["users_list"].filter((user) => String(user["id"]) !== String(id));
    res.status(204).send();
  }
});


const addUser = (user) => { 
  users["users_list"].push(user);
  return user;
};

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  const id = Math.random();
  userToAdd["id"] = id;
  
  addUser(userToAdd);
  res.status(201).send(userToAdd);
});
*/
app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
