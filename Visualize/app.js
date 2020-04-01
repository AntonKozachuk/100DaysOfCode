document.querySelector('.container').innerHTML = "<div id='fname'></div><div id='lname'></div><div id='mail'></div><div id='userType'></div><div id='balance'></div>";

let dom = {
    fname : document.getElementById('fname'),
    lname : document.getElementById('lname'),
    mail : document.getElementById('mail'),
    userType: document.getElementById('userType'),
    balance: document.getElementById('balance')
};

let user = {
    "success": true,
    "data": {
        "id": "d2f168bd-6381-46ce-9e76-a3609ffb0735",
        "firstName": "Pet",
        "lastName": "Shop",
        "email": "petshop.node@gmail.com",
        "password": "$2b$10$pHzyc/woCQVPxiR2xhDZ7.jmYhT70EMRmT0cjr/prLPGjoxXO0uUO",
        "createdAt": "2020-03-31T19:28:15.534Z",
        "updatedAt": "2020-03-31T19:28:15.534Z",
        "account": {
            "id": "f4e7da5b-94ce-4029-8905-4c6c3b602a07",
            "userType": "default",
            "balance": 98000,
            "createdAt": "2020-03-31T19:28:15.541Z",
            "updatedAt": "2020-03-31T19:34:18.046Z",
            "UserId": "d2f168bd-6381-46ce-9e76-a3609ffb0735"
        }
    },
    "info": []
};

function drawUser() {
    dom.fname.textContent = 'First Name: ' + user.data.firstName; 
    dom.lname.textContent = 'Last Name: ' + user.data.lastName; 
    dom.mail.textContent = 'Email: ' + user.data.email; 
    dom.userType.textContent = 'User Type: ' + user.data.account.userType; 
    dom.balance.textContent = 'Balance: ' + user.data.account.balance; 
};

drawUser();