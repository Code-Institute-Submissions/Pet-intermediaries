function sendMail(contactForm) {
    emailjs.send("service_sx70hpu", "petContact", {
        "from_first": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.emailaddress.value,
        "pet_request": contactForm.pets.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
        return false;
}