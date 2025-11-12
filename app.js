import express from "express"
const app=express()
const port =3000
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    let today=new Date
   let dayofWeek=today.getDay()
   let day;
   let advice;
   if (dayofWeek===6|| dayofWeek===0){
    day="weekendday"
    advice="it's to to fun let's go outside"

   }
   else{
    day="weekday"
    advice="It's time to work hard"
   }
res.render("index",{dayType:day,advice:advice})
})
app.listen(port,()=>{
    console.log(`your port is listening on http://localhost:${port}`)
})