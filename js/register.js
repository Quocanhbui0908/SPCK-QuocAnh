var email = document.getElementById('email')
var username = document.getElementById('username')
var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirmPassword')

var listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

document.getElementById("btnSubmit").addEventListener("click", (evt) => {
    evt.preventDefault()
    let vietThuong = /[a-z]/g;
    let vietHoa = /[A-Z]/g;
    let chuSo = /[0-9]/g;
    if (
        username.value.trim().length == 0 ||
        email.value.trim().length == 0 ||
        password.value.trim().length == 0 ||
        confirmPassword.value.trim().length == 0
    ) {
        alert("Không được để trống!");
    } else if (password.value.trim().length < 8) {
        alert("Password phải có độ dài lớn hơn 8 kí tự!");
    } else if (!password.value.trim().match(vietThuong)) {
        alert("Password phải có ít nhất 1 chữ cái thường!")
    } else if (!password.value.trim().match(vietHoa)) {
        alert("Password phải có ít nhất 1 chữ cái hoa!")
    } else if (!password.value.trim().match(chuSo)) {
        alert("Password phải có ít nhất 1 ký tự đặc biệt!")
    } else if (password.value.trim() != confirmPassword.value.trim()) {
        alert("Password không khớp!")
    }
    else {
        let user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        listUsers.push(user)
        console.log(listUsers)
        localStorage.setItem("listUsers", JSON.stringify(listUsers))
        window.location.href = 'login.html'
    }
})

