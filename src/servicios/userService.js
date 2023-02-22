import { dbGetAllUser, dbGetUser, dbInsertUser } from '../basededatos/userDB.js'

const srvGetAllUsers = () => {
    const jsonAlluser = dbGetAllUser();
    return jsonAlluser;
}

const srvGetOneUser = (idUser) => {
    const jsonUser = dbGetUser(idUser);
    return jsonUser;
}

const srvCreateNewUser = async (newUser) => {
    const respNewUser = { 'status': '', 'data': '0' }
    const userExist = await dbGetUser(newUser)

    if (userExist.status === "error") {
        respNewUser.status = 'error'
        respNewUser.data = userExist.errors
    } else if (userExist.dataLenght > 0) {
        respNewUser.status = 'exist'
    } else {
        const userAdded = await dbInsertUser(newUser)
        respNewUser.status = 'added'
        respNewUser.data = userAdded.data
    }

    return respNewUser;
}

const srvUpdateOneUser = () => {
    return;
}

const srvDeleteOneUser = () => {
    return;
}

export {
    srvGetAllUsers,
    srvGetOneUser,
    srvCreateNewUser,
    srvUpdateOneUser,
    srvDeleteOneUser
}