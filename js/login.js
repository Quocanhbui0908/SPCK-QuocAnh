var email = document.getElementById('email')
var password = document.getElementById('password')

var listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

document.getElementById("btnSubmit").addEventListener("click", (evt) => {
    evt.preventDefault()

    if (
        email.value.trim().length == 0 ||
        password.value.trim().length == 0
    ) {
        alert("Không được để trống!");
    }
    else {
        let checkEmail = false
        for (i in listUsers) {
            if (listUsers[i].email == email.value && listUsers[i].password == password.value) {
                checkEmail = true
                break
            }
        }
        // let checkEmail = listUsers.some(function (user) {
        //     return user.email == email.value && user.password == password.value
        // })
        if (checkEmail) {
            window.location.href = 'index.html'
        }
        else {
            alert("Sai email hoặc password!")
        }
    }
})

