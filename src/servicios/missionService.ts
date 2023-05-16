import { dbGetAllMission, dbInsertMission, dbUpdateMission, dbGetOneMission, dbDeleteMission } from '../basededatos/missionDB'
import { newMissionInterface, oneMissionInterface, updMissionInterface } from '../interfaces/Mission.interface';

export const srvGetAllMission = async () => {
    const jsonAllmission = { 'statusSrvc': '', 'responseDB': {} }
    const jsonAllMissionData = await dbGetAllMission();

    if (jsonAllMissionData.status === "error") {
        jsonAllmission.statusSrvc = jsonAllMissionData.status
        jsonAllmission.responseDB = jsonAllMissionData.errors
    } else if (jsonAllMissionData.dataLenght > 0) {
        jsonAllmission.statusSrvc = 'exist'
        jsonAllmission.responseDB = jsonAllMissionData
    } else {
        jsonAllmission.statusSrvc = 'notfound'
    }

    return jsonAllmission;
}

export const srvGetOneMission = async (idMission: oneMissionInterface) => {
    const respOneMission = { 'statusSrvc': '', 'responseDB': {} }
    const jsonMission = await dbGetOneMission(idMission);

    if (jsonMission.status === "error") {
        respOneMission.statusSrvc = jsonMission.status
        respOneMission.responseDB = jsonMission.errors
    } else if (jsonMission.dataLenght > 0) {
        respOneMission.statusSrvc = 'exist'
        respOneMission.responseDB = jsonMission
    } else {
        respOneMission.statusSrvc = 'notfound'
    }

    return respOneMission;
}

export const srvCreateNewMission = async (newMission: newMissionInterface) => {
    const respNewMission = { 'statusSrvc': '', 'responseDB': {} }
    const missionExist = await dbGetOneMission(newMission)
    const missionToInsert = {
        ...newMission
    }

    if (missionExist.status === "error") {
        respNewMission.statusSrvc = missionExist.status
        respNewMission.responseDB = missionExist.errors
    } else if (missionExist.dataLenght > 0) {
        respNewMission.statusSrvc = 'exist'
        respNewMission.responseDB = missionExist
    } else {
        const missionAdded = await dbInsertMission(missionToInsert)
        if (missionAdded.dataLenght > 0) {
            respNewMission.statusSrvc = missionAdded.status
        } else {
            respNewMission.statusSrvc = 'error'
        }
        respNewMission.responseDB = missionAdded
    }

    return respNewMission;
}

export const srvUpdateOneMission = async (uptMission: updMissionInterface) => {
    const respUpdMission = { 'statusSrvc': '', 'responseDB': {} }
    const missionExist = await dbGetOneMission(uptMission)

    const missionToUpdate = {
        ...uptMission
    }

    if (missionExist.status === "error") {
        respUpdMission.statusSrvc = missionExist.status
        respUpdMission.responseDB = missionExist.errors
    } else if (missionExist.dataLenght > 0) {
        const missionUpdated = await dbUpdateMission(missionToUpdate)
        respUpdMission.statusSrvc = missionUpdated.status
        respUpdMission.responseDB = missionUpdated
    } else {
        respUpdMission.statusSrvc = 'notfound'
    }

    return respUpdMission;
}

export const srvDeleteOneMission = async (delMission: oneMissionInterface) => {
    const respDelMission = { 'statusSrvc': '', 'responseDB': {} }
    const missionExist = await dbGetOneMission(delMission)

    if (missionExist.status === "error") {
        respDelMission.statusSrvc = missionExist.status
        respDelMission.responseDB = missionExist.errors
    } else if (missionExist.dataLenght > 0) {
        const missionDeleted = await dbDeleteMission(delMission)
        respDelMission.statusSrvc = missionDeleted.status
        respDelMission.responseDB = missionDeleted.data
    } else {
        respDelMission.statusSrvc = 'notfound'
    }

    return respDelMission;
}