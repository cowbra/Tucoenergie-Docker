const express=require('express');
const app=express();
const cors= require("cors");
const morgan = require('morgan');
const keys = require("./keys");

app.use(cors());
app.use(express.json());

//postgreSQL Client setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
})

app.listen(5001, ()=>{console.log('server has started on port 5001.')})
app.use(morgan('tiny'));

app.get('/bats', async(req,res)=>{
    try{
        const allbatiments = await pgClient.query("SELECT * FROM batiments")
        res.send(allbatiments.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.get('/bats/to_be_treated', async(req,res)=>{
    try{
            const batiment = await pgClient.query("SELECT id, lien_api, materiau_result FROM batiments WHERE materiau_correct is NULL ORDER BY random() LIMIT 1")
        res.json(batiment?.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})


app.get('/bats/:id_bat', async(req,res)=>{
    try{
        const { id_bat } = req.params
        const batiment = await pgClient.query("SELECT id, lien_api, materiau_result, materiau_correct FROM batiments WHERE id = $1", [id_bat])
        res.json(batiment?.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})

app.put('/bats/:id_bat', async(req, res)=>{
    try{
        const { id_bat } = req.params
        console.log(req.body)
        const { materiau_correct } = req.body;
        const updatedBat = await pgClient.query("UPDATE batiments SET materiau_correct = $1 WHERE id = $2"
            , [materiau_correct, id_bat])
        res.status(201)
        res.send()
    }
    catch(err){
        console.error(err.message)
    }

})
