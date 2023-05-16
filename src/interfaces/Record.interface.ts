interface recordInterface{
    idRecord: number, 
    anio: number, 
    semana: number, 
    idPlayer: number, 
    idMission: number, 
    posicion: number, 
    rank: number, 
    createdAt: string, 
    updatedAt: string
}

type newRecordTypes = 'anio'|'semana'|'idPlayer'|'idMission'|'posicion'|'rank'
type updRecordTypes = 'idRecord'|'anio'|'semana'|'idPlayer'|'idMission'|'posicion'|'rank'
type oneRecordTypes = 'idRecord'
type recordAnioPlayerTypes = 'anio'|'idPlayer'
type recordAnioTypes = 'anio'
type recordSemanaTypes = 'anio'|'semana'|'idPlayer'
type recordSemanaMissionTypes = 'anio'|'semana'|'idMission'
type recordAnioMissionTypes = 'anio'|'idMission'

export type newRecordInterface = Pick<recordInterface, newRecordTypes>
export type updRecordInterface = Pick<recordInterface, updRecordTypes>
export type oneRecordInterface = Pick<recordInterface, oneRecordTypes>
export type recordAnioPlayerInterface = Pick<recordInterface, recordAnioPlayerTypes>
export type recordAnioInterface = Pick<recordInterface, recordAnioTypes>
export type recordSemanaInterface = Pick<recordInterface, recordSemanaTypes>
export type recordSemanaMissionInterface = Pick<recordInterface, recordSemanaMissionTypes>
export type recordAnioMissionInterface = Pick<recordInterface, recordAnioMissionTypes>
