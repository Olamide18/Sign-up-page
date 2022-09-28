const firstname = document.getElementById('firstname')
const lastname= document.getElementById('lastname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (lastname.value === '' || lastname.value == null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()  
        errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value === '' || firstname.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()  
        errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }
    
    if (messages.length > 0) {
        e.preventDefault()  
        errorElement.innerText = messages.join(', ')
    }
})
form.addEventListener('submit', (e) => {
    let messages = []
    if (phone.value === '' || phone.value == null) {
        messages.push('Phone Number is required')
    }
    
    if (messages.length > 0) {
        e.preventDefault()  
        errorElement.innerText = messages.join(', ')
    }
})