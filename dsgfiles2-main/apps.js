
let togglepassword = document.getElementById('togglepassword');
let mypassword = document.getElementById('mypassword');

togglepassword.addEventListener('click', function() {
    let type = mypassword.type;
    if (type == 'password') {
        mypassword.type = 'text';
    } else {
        mypassword.type = 'password';
    }
});