const express=require('express');
const PORT=process.env.PORT || 8080;
const app=express();
const path=require('path');

app.use(express.static(__dirname+'/dist/app'));
app.listen(PORT,()=>{
     console.log(`Listing on port => ${PORT}`);  
})
app.get('/*',(req,res)=>{
   res.sendFile(path.join(__dirname+ '/dist/app/index.html'));
});
