const button = document.querySelector('.submit-btn')
const email = document.querySelector('#email')
const error = document.querySelector('.error')

button.addEventListener('click', e => {
    e.preventDefault();

    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email.value === '') {
        console.log('hello')
        error.innerHTML = 'Oops! Please add your email';
        error.style.opacity = "1"
    } else if (!re.test(email.value)) {
        error.innerHTML = 'Oops! Please check your email';
        error.style.opacity = "1"
    } else {
        error.style.opacity = "0"
    }

})

