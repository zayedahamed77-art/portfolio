function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("help").value
    };

    emailjs.send("service_4yjx5sz", "template_akoeglq", parms)
        .then(() => {
            alert("Email Sent Successfully!");
        })
       .catch((error) => {
    console.log(error);
    alert(error.text || error.message || "Unknown error");
});
}