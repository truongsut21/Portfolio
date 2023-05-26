// const form = document.querySelector('.contact_form');
// function sendMsg(e) {
//     e.preventDefault();
    
//     const name = document.querySelector('.name'),
//         email = document.querySelector('.email'),
//         project = document.querySelector('.project'),
//         msg = document.querySelector('.msg');

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "linhdieu300@gmail.com",
//         Password: "7D7873BCB43620EF3325D17E0C0D882BB8AF",
//         To: 'linhdieu300@gmail.com',
//         From: email,
//         Subject: project,
//         Body: msg.value
//     }).then(
//         message => alert(message)
//     );
// }

// form.addEventListener('submit', sendMsg());

// function sendEmail() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "linhdieu300@gmail.com",
//         Password: "7D7873BCB43620EF3325D17E0C0D882BB8AF",
//         To: 'linhdieu300@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New Letter",
//         Body: "Name: " + document.getElementById("name").value
//             +"<br> Email: " +document.getElementById("email").value
//             +"<br> Project: " +document.getElementById("project").value
//             +"<br> Message: " +document.getElementById("msg").value
//     }).then(
//         message => alert("Gui thanh")
//     );
// }