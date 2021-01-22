import express from "express";
import {graphqlHTTP}  from 'express-graphql';
import schema from './schema';
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/gql_db', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()
const port = 3000;

app.get("/", (req,res)=>{
    return res.send("Helo Graphql")
})

app.use('/graphql',graphqlHTTP({
      schema: schema,
      graphiql: true,
      context:{
          user:'1'
        }
    }),
  );



app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
