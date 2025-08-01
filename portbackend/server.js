import express from "express"
import { Contact } from "./models/contatct.model.js"
import connectionDB from "./connectDb/db.js"
import dotenv from"dotenv"
import cors from "cors"

dotenv.config(
    {
        path: "./.env"
    }
)

connectionDB()
const app =express();
app.use(express.json())
app.use(cors())

app.post("/contact",async (req,res)=>{
try {
    
        const {email,name,message}=req.body;
    
        if([email,name,message].some((fields)=>fields?.trim()=="")){
    
            res.status(400).json({
                message:"the required fields are not there"
            })
        }
    
        const contactcreation =await Contact.create({
            message:message.trim(),
            email:email.trim(), 
            name:name.trim()
        })
    
        if(!contactcreation){
            res.status(400).json({
                message:"the contatc creation is failed"
            })
        }
    
        return res.status(200).json({message:"the contatc is created successfullly"})
    } catch (error) {
        console.log("there is the contact creation error in this",error);
    }
})


app.listen(3000,()=>{
    console.log("the server is running on the port 300");
})