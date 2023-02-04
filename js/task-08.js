const form = document.querySelector('.login-form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Усі поля повинні бути заповненими!');
    };
    const newUser = {};
    newUser.email = email.value;
    newUser.password = password.value;
    form.reset();
    return console.log(newUser);
});

