


function SendMail(){
    let parms={
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      mobile : document.getElementById("mobile").value,
      // subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_x345cv3","template_ylkrbbt",parms).then(alert("Email has been sent"))
  }