import { dbGetAllAlliance, dbInsertAlliance, dbUpdateAlliance, dbGetOneAlliance, dbDeleteAlliance } from '../basededatos/allianceDB'
import { newAlliInterface, oneAlliInterface, updAlliInterface } from '../interfaces/Alliance.interface';

const srvGetAllAlliance = async () => {
    const jsonAllAlliance = { 'statusSrvc': '', 'responseDB': {} }
    const jsonAlliance = await dbGetAllAlliance();

    if (jsonAlliance.status === "error") {
        jsonAllAlliance.statusSrvc = jsonAlliance.status
        jsonAllAlliance.responseDB = jsonAlliance.errors
    } else if (jsonAlliance.dataLenght > 0) {
        jsonAllAlliance.statusSrvc = 'exist'
        jsonAllAlliance.responseDB = jsonAlliance
    } else {
        jsonAllAlliance.statusSrvc = 'notfound'
    }

    return jsonAllAlliance;
}

const srvGetOneAlliance = async (idAlliance: oneAlliInterface) => {
    const respOneAlliance = { 'statusSrvc': '', 'responseDB': {} }
    const jsonAlliance = await dbGetOneAlliance(idAlliance);

    if (jsonAlliance.status === "error") {
        respOneAlliance.statusSrvc = jsonAlliance.status
        respOneAlliance.responseDB = jsonAlliance.errors
    } else if (jsonAlliance.dataLenght > 0) {
        respOneAlliance.statusSrvc = 'exist'
        respOneAlliance.responseDB = jsonAlliance
    } else {
        respOneAlliance.statusSrvc = 'notfound'
    }

    return respOneAlliance;
}

const srvCreateNewAlliance = async (newAlliance: newAlliInterface) => {
    const respNewAlliance = { 'statusSrvc': '', 'responseDB': {} }
    const allianceExist = await dbGetOneAlliance(newAlliance)

    if (allianceExist.status === "error") {
        respNewAlliance.statusSrvc = allianceExist.status
        respNewAlliance.responseDB = allianceExist.errors
    } else if (allianceExist.dataLenght > 0) {
        respNewAlliance.statusSrvc = 'exist'
        respNewAlliance.responseDB = allianceExist
    } else {
        const allianceAdded = await dbInsertAlliance(newAlliance)
        if (allianceAdded.dataLenght > 0) {
            respNewAlliance.statusSrvc = allianceAdded.status
        } else {
            respNewAlliance.statusSrvc = 'error'
        }
        respNewAlliance.responseDB = allianceAdded
    }

    return respNewAlliance;
}

const srvUpdateOneAlliance = async (uptAlliance: updAlliInterface) => {
    const respUpdAlliance = { 'statusSrvc': '', 'responseDB': {} }
    const allianceExist = await dbGetOneAlliance(uptAlliance)

    if (allianceExist.status === "error") {
        respUpdAlliance.statusSrvc = allianceExist.status
        respUpdAlliance.responseDB = allianceExist.errors
    } else if (allianceExist.dataLenght > 0) {
        const allianceUpdated = await dbUpdateAlliance(uptAlliance)
        respUpdAlliance.statusSrvc = allianceUpdated.status
        respUpdAlliance.responseDB = allianceUpdated
    } else {
        respUpdAlliance.statusSrvc = 'notfound'
    }

    return respUpdAlliance;
}

const srvDeleteOneAlliance = async (delAlliance: oneAlliInterface) => {
    const respDelAlliance = { 'statusSrvc': '', 'responseDB': {} }
    const allianceExist = await dbGetOneAlliance(delAlliance)

    if (allianceExist.status === "error") {
        respDelAlliance.statusSrvc = allianceExist.status
        respDelAlliance.responseDB = allianceExist.errors
    } else if (allianceExist.dataLenght > 0) {
        const allianceDeleted = await dbDeleteAlliance(delAlliance)
        respDelAlliance.statusSrvc = allianceDeleted.status
        respDelAlliance.responseDB = allianceDeleted
    } else {
        respDelAlliance.statusSrvc = 'notfound'
    }

    return respDelAlliance;
}

export { srvGetAllAlliance, srvGetOneAlliance, srvCreateNewAlliance, srvUpdateOneAlliance, srvDeleteOneAlliance }