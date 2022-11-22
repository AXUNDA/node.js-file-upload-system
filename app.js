const express = require('express');
const app = express();
require("dotenv").config()
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:false}))
const upload = require("./utils/multer")
const {cloudinary} = require("./utils/cloudinary")

app.get("/",(req,res)=>{
      res.render("index.ejs")
})
app.get("/api/upload",(req,res)=>{
      res.render("index.ejs")
      
})

app.post("/api/upload",upload.single("file"),async(req,res,next)=>{
      try {
         const response = await cloudinary.uploader.upload(req.file.path)
         const postDetails= {
            title:req.body.title,
            image:response.public_id
         }
      console.log(response)
      console.log(postDetails)
       return res.statusCode(200).send(response)
            
      } catch (error) {
            return res.send(error)
            
      }
      

})





function main(){
      app.listen(3000,()=>{
            console.log("app is active")
      })
}

main()