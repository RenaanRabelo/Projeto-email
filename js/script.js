function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
        
    };

    const serviceID = "service_hkid1o7";
    const templeteID = "template_t9xhvna";

    emailjs
        .send(serviceID, templeteID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("phone").value = "";
            console.log(res);
            alert("Sua mensagem foi enviada com sucesso!");
        })
        .catch((err) => console.log(err));
}