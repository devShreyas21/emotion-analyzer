import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors())

mongoose.connect('mongodb+srv://devshreyas21:shrutiyasshre2003@cluster1.qxgbzo5.mongodb.net/mirror')

const schema1 = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    ip_address:String,
    password:String
})

const schema2 = mongoose.Schema({
    ip_address:String,
    loggedInName:String,
    date:String,
    emotions:{
        sadness:Number,
        happiness:Number,
        anger:Number,
        disgust:Number,
        fear:Number,
        neutral:Number,
        surprise:Number
    }

})

const schema3 = mongoose.Schema({
    name:String,
    email:String,
    feedback: String
})

const Users = mongoose.model("users", schema1)
const Emotions = mongoose.model("emotions", schema2)
const Feedback = mongoose.model("feedback", schema3)

app.get('/',()=>{
    console.log('Hello world')
})


app.post('/login', async(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const result = await Users.findOne({username:username, password:password})
    res.status(200).json(result)
})

app.post('/signUp', async(req,res)=>{
    const u = req.body
    const newUser = Users(u)
    try{
        newUser.save()
    }    
    catch(err){
        console.log(err)
    }
})  

app.post('/fetch', async(req,res)=>{
    const loggedInUser = req.body
    const result = await Emotions.findOne({ip_address:loggedInUser.ip_address,loggedInName:loggedInUser.name})
    const emotions = result.emotions

    const name = loggedInUser.name

    const anger = emotions.anger 
    const happiness = emotions.happiness 
    const sadness = emotions.sadness 
    const disgust = emotions.disgust
    const fear = emotions.fear
    const surprise = emotions.surprise
    const neutral = emotions.neutral



    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyBVKWHtCHO1DBRlaP6zPCezVoU1-A1dGac");

    // async function run() {
        // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    
    const prompt = "Generate well-formatted HTML content as a single 'div' displaying user sentiment report with user info (name: "+name+", emotional landscape conclusion bolded, distribution (anger:"+anger+"%, surprise:"+surprise+"%, fear:"+fear+"%, sadness:"+sadness+"%, happiness:"+happiness+"%, disgust:"+disgust+"%, neutral:"+neutral+"%) as unordered list, suggestions (anger, fear, happiness, surprise) and benefits (self-awareness, trigger identification, coping mechanisms, progress tracking) as bullet points."

    // "Generate sentiment report content as a single HTML div with user info (name: Shreyas, age: [User's Age], gender optional), emotional landscape conclusion bolded, distribution (anger:50%, surprise:40%, fear:30%, sadness:10%, happiness:20%, disgust:15%, neutral:0%), suggestions for anger, fear, happiness, surprise, and benefits (self-awareness, trigger identification, coping mechanisms, progress tracking)."


    const result1 = await model.generateContent(prompt);
    const response = await result1.response;
    const text = response.text();
    // }

    // run();

    const obj = {
        key1: emotions,
        key2: text
    }
    // console.log(obj)
    res.json(obj)
})

app.post('/feedback', async (req,res) => {
    const feedback = req.body
    const newFeedback = Feedback(feedback)
    try{
        newFeedback.save()
    }
    catch(err){
        console.log(err)
    }
    res.json({text:"Feed back sent successfully"})
})

app.listen(4000,()=>{
    console.log("Runnning on 4000")
})