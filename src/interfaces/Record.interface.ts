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
type oneRecordTypes = 'idRecord'|'anio'|'semana'

export type newRecordInterface = Pick<recordInterface, newRecordTypes>
export type updRecordInterface = Pick<recordInterface, updRecordTypes>
export type oneRecordInterface = Pick<recordInterface, oneRecordTypes>