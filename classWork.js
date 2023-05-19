confirm("This website wants to use cookies")


const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const username = document.getElementById('username').value

     console.log("Username: " + username)

    const email = document.getElementById('email').value

     console.log("Email: " + email)

     const password = document.getElementById('password').value

     console.log("Password: " + password)

     const mailtoLink = 'mailto:your-email@a.guledani11@gmail.com'
     
     window.location.href = mailtoLink

     form.reset();


}
)