//import { dbGetOneRecord, dbGetRecordSemana, dbGetRecordAnio, dbGetRecordSemanaPlayer, dbGetRecordAnioPlayer, dbGetRecordSemanaMision, dbGetRecordAnioMision, dbInsertRecord, dbUpdateRecord, dbDeleteRecord } from '../basededatos/recordDB'
//import { newRecordInterface, updRecordInterface, oneRecordInterface, recordAnioPlayerInterface, recordAnioInterface, recordSemanaInterface, recordSemanaMissionInterface, recordAnioMissionInterface } from '../interfaces/Record.interface';

import { dbGetRecordSemana } from '../basededatos/recordDB'
import { dbGetAllMission } from '../basededatos/missionDB'
import { recordSemanaInterface, newRecordInterface } from '../interfaces/Record.interface';

export const srvGetRecordSemana = async (recordSemana: recordSemanaInterface) => {
    const respGetRecord = { 'statusSrvc': '', 'responseDB': {} }
    const validate = await srvCreateOneRecordSemana(recordSemana);

    const jsonRecord = await dbGetRecordSemana(recordSemana);

    if (jsonRecord.status === "error") {
        respGetRecord.statusSrvc = jsonRecord.status
        respGetRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respGetRecord.statusSrvc = 'exist'
        respGetRecord.responseDB = jsonRecord
    } else {
        respGetRecord.statusSrvc = 'notfound'
    }

    return respGetRecord;
}

const srvCreateOneRecordSemana = async (newRecord: newRecordInterface) => {
    const revrecord = { ...newRecord }
    const recordRank = { 0: false, 1: false }
    const missions = await dbGetAllMission()

    console.clear
    var algo = missions.reng
    var longitud = algo.length
    console.log(longitud)

    for (let rank = 0; rank <= 9; rank++) {
        //const jsonRecord = await dbGetRecordSemana()
    }

    return;
}

/*
export const srvGetOneRecord = async (idRecord: oneRecordInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetOneRecord(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}
*/

/*
export const srvGetRecordAnio = async (idRecord: recordAnioInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetRecordAnio(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}

export const srvGetRecordSemanaPlayer = async (idRecord: recordSemanaInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetRecordSemanaPlayer(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}

export const srvGetRecordAnioPlayer = async (idRecord: recordAnioPlayerInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetRecordAnioPlayer(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}

export const srvGetRecordSemanaMision = async (idRecord: recordSemanaMissionInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetRecordSemanaMision(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}

export const srvGetRecordAnioMision = async (idRecord: recordAnioMissionInterface) => {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} }
    const jsonRecord = await dbGetRecordAnioMision(idRecord);

    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status
        respOneRecord.responseDB = jsonRecord.errors
    } else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist'
        respOneRecord.responseDB = jsonRecord
    } else {
        respOneRecord.statusSrvc = 'notfound'
    }

    return respOneRecord;
}

export const srvUpdateOneRecord = async (uptRecord: updRecordInterface) => {
    const respUpdRecord = { 'statusSrvc': '', 'responseDB': {} }
    const recordExist = await dbGetOneRecord(uptRecord)

    const recordToUpdate = {
        ...uptRecord
    }

    if (recordExist.status === "error") {
        respUpdRecord.statusSrvc = recordExist.status
        respUpdRecord.responseDB = recordExist.errors
    } else if (recordExist.dataLenght > 0) {
        const recordUpdated = await dbUpdateRecord(recordToUpdate)
        respUpdRecord.statusSrvc = recordUpdated.status
        respUpdRecord.responseDB = recordUpdated
    } else {
        respUpdRecord.statusSrvc = 'notfound'
    }

    return respUpdRecord;
}

export const srvDeleteOneRecord = async (delRecord: oneRecordInterface) => {
    const respDelRecord = { 'statusSrvc': '', 'responseDB': {} }
    const recordExist = await dbGetOneRecord(delRecord)

    if (recordExist.status === "error") {
        respDelRecord.statusSrvc = recordExist.status
        respDelRecord.responseDB = recordExist.errors
    } else if (recordExist.dataLenght > 0) {
        const recordDeleted = await dbDeleteRecord(delRecord)
        respDelRecord.statusSrvc = recordDeleted.status
        respDelRecord.responseDB = recordDeleted.data
    } else {
        respDelRecord.statusSrvc = 'notfound'
    }

    return respDelRecord;
}
*/