let video=document.getElementById("camera");
let msg = document.getElementById("message");
 //Getting the user data we use navigator.mediaDevices.getUserMedia
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
        video.srcObject = stream;
        //if the code is success then it will print success
        msg.innerHTML="success"
    },() =>{
        msg.innerHTML = "An error occured";
    }
)};
