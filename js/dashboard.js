const body = document.querySelector('body');
const tbody = document.querySelector('tbody')
const btnappupdate = document.querySelector('#btnappupdate')
const inNickName = document.querySelector('#inNickName')
const inEmail = document.querySelector('#inEmail')
const inPassword = document.querySelector('#inPassword')

// La función onload debe cargar los usuarios
body.onload = () => {
    filltable()
}

function createRow(u, i) {
    const tr = document.createElement('tr')
    // Delete
    const tdDelete = document.createElement('td')
    const iDelete = document.createElement('i')
    iDelete.className = 'fas fa-trash'
    iDelete.onclick = () => {
        const isconfirm = confirm('Estas seguro de eliminar?')
        if(isconfirm){
            deleteUser(i)
            cleartable()
            filltable()
        }
    }
    // Update
    const tdUpdate = document.createElement('td')
    const iUpdate = document.createElement('i')
    iUpdate.className = 'fas fa-pen'
    iUpdate.onclick = () => {
        btnappupdate.textContent = 'ACTUALIZAR'
        inNickName.value = u.nickname
        inPassword.value = u.password
        inEmail.value = u.email
        btnappupdate.onclick = (e) => btnupdateUser(e, i)
    }
    // NickName
    const tdNickName = document.createElement('td')
    tdNickName.textContent = u.nickname
    // Email
    const tdEmail = document.createElement('td') // Asegúrate de crear el td para email
    tdEmail.textContent = u.email
    // Password
    const tdPassword = document.createElement('td')
    tdPassword.textContent = u.password
    // Join
    tdDelete.appendChild(iDelete)
    tdUpdate.appendChild(iUpdate)
    tr.append(tdDelete, tdUpdate, tdNickName, tdEmail, tdPassword) // Incluye el td de email
    return tr;
}

btnappupdate.onclick = btnaddUser

function btnaddUser(e){
    const i = getUsers().length
    const newUser = createUser(inNickName.value, inEmail.value, inPassword.value)
    const tr = createRow(newUser, i)
    tbody.appendChild(tr)
    e.preventDefault()
    alert("Elemento Guardado")
}

function btnupdateUser(e, i){
    updateUser(i, inNickName.value, inEmail.value, inPassword.value)
    cleartable()
    filltable()
    e.preventDefault()
    alert("Elemento Actualizado")
    inNickName.value = ''
    inEmail.value = ''
    inPassword.value = ''
    btnappupdate.textContent = 'Agregar'
    btnappupdate.onclick = btnaddUser
}

function cleartable(){
    tbody.innerHTML = ''
}

function filltable(){
    let trs = [];
    const users = getUsers(); 
    users.forEach((u, i) => {
        const tr = createRow(u, i)
        trs.push(tr)
    })
    // Unir con tbody
    tbody.append(...trs)
}