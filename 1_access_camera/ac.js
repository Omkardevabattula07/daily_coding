let video=document.getElementById("camera");
let msg = document.getElementById("message");
let btn =document.getElementById("btn")
 //Getting the user data we use navigator.mediaDevices.getUserMedia
 // Here i use an event listner so that i can use this the button by click
btn.addEventListener('click',()=>{
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
            video.srcObject = stream;
            //if the code is success then it will print success
            msg.innerHTML="success"
        },() =>{
            msg.innerHTML = "An error occured";
        }
    )};
    
})
