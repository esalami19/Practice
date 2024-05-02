document.body.style.backgroundColor = "hsl(0, 0%, 15%)"
const message = " we can do this thang"
const motivateMessage = document.getElementById("title")
//to change message of elemnt w/ ternary operator
motivateMessage.textContent += message === ""? " we've got this": message
