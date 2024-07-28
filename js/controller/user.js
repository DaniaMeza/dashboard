const users = [
    new User('A YPZ', 'ypz@gmail.com', '123456'),
    new User('GN2', 'gnz@gmail.com', 'gnz456'),
    new User('Abril', 'abril@gmail.com', 'ab123'),
]


function getUsers(){
    return users
}

function createUser(nickname, email, password) {
    const newUser = new User(nickname, email, password);
    users.push(newUser); 
    return newUser;
}

function updateUser(i, newNickName, newEmail, newPassword){
    users[i].nickname = newNickName
    users[i].email = newEmail
    users[i].password = newPassword
}

function deleteUser(i){
    users.splice(i, 1)
}