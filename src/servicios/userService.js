import { dbGetAllUser, dbInsertUser, dbUpdateUser, dbGetOneUser, dbDeleteUser } from '../basededatos/userDB.js'

const srvGetAllUsers = async () => {
    const jsonAlluser = { 'statusSrvc': '', 'responseDB': '0' }
    const jsonAllUserData = await dbGetAllUser();

    if (jsonAllUserData.status === "error") {
        jsonAlluser.statusSrvc = jsonAllUserData.status
        jsonAlluser.responseDB = jsonAllUserData.errors
    } else if (jsonAllUserData.dataLenght > 0) {
        jsonAlluser.statusSrvc = 'exist'
        jsonAlluser.responseDB = jsonAllUserData
    } else {
        jsonAlluser.statusSrvc = 'notfound'
    }

    return jsonAlluser;
}

const srvGetOneUser = async (idUser) => {
    const respOneUser = { 'statusSrvc': '', 'responseDB': '0' }
    const jsonUser = await dbGetOneUser(idUser);

    if (jsonUser.status === "error") {
        respOneUser.statusSrvc = jsonUser.status
        respOneUser.responseDB = jsonUser.errors
    } else if (jsonUser.dataLenght > 0) {
        respOneUser.statusSrvc = 'exist'
        respOneUser.responseDB = jsonUser
    } else {
        respOneUser.statusSrvc = 'notfound'
    }

    return respOneUser;
}

const srvCreateNewUser = async (newUser) => {
    const respNewUser = { 'statusSrvc': '', 'responseDB': '0' }
    const userExist = await dbGetOneUser(newUser)

    if (userExist.status === "error") {
        respNewUser.statusSrvc = userExist.status
        respNewUser.responseDB = userExist.errors
    } else if (userExist.dataLenght > 0) {
        respNewUser.statusSrvc = 'exist'
        respNewUser.responseDB = userExist
    } else {
        const userAdded = await dbInsertUser(newUser)
        if (userAdded.data.length > 0) {
            respNewUser.statusSrvc = userAdded.status
        } else {
            respNewUser.statusSrvc = 'error'
        }
        respNewUser.responseDB = userAdded
    }

    return respNewUser;
}

const srvUpdateOneUser = async (uptUser) => {
    const respUpdUser = { 'statusSrvc': '', 'responseDB': '0' }
    const userExist = await dbGetOneUser(uptUser)

    if (userExist.status === "error") {
        respUpdUser.statusSrvc = userExist.status
        respUpdUser.responseDB = userExist.errors
    } else if (userExist.dataLenght > 0) {
        const userUpdated = await dbUpdateUser(uptUser)
        respUpdUser.statusSrvc = userUpdated.status
        respUpdUser.responseDB = userUpdated
    } else {
        respUpdUser.statusSrvc = 'notfound'
    }

    return respUpdUser;
}

const srvDeleteOneUser = async (delUser) => {
    const respDelUser = { 'statusSrvc': '', 'responseDB': '0' }
    const userExist = await dbGetOneUser(delUser)

    if (userExist.status === "error") {
        respDelUser.statusSrvc = userExist.status
        respDelUser.responseDB = userExist.errors
    } else if (userExist.dataLenght > 0) {
        const userDeleted = await dbDeleteUser(delUser)
        respDelUser.statusSrvc = userDeleted.status
        respDelUser.responseDB = userDeleted.data
    } else {
        respDelUser.statusSrvc = 'notfound'
    }

    return respDelUser;
}

export { srvGetAllUsers, srvGetOneUser, srvCreateNewUser, srvUpdateOneUser, srvDeleteOneUser }