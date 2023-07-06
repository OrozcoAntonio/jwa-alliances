
interface recordInterface {
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

type recordSemanaTypes = 'anio' | 'semana'
type newRecordTypes = 'anio' | 'semana'
type rcdExistTypes = 'anio' | 'semana' | 'idMission' | 'rank'

type updRecordTypes = 'idRecord' | 'anio' | 'semana' | 'idPlayer' | 'idMission' | 'rank'
type oneRecordTypes = 'idRecord'
type recordAnioPlayerTypes = 'anio' | 'idPlayer'
type recordAnioTypes = 'anio'
type recordSemanaMissionTypes = 'anio' | 'semana' | 'idMission'
type recordAnioMissionTypes = 'anio' | 'idMission'

export type recordSemanaInterface = Pick<recordInterface, recordSemanaTypes>
export type newRecordInterface = Pick<recordInterface, newRecordTypes>
export type rcdExist = Pick<recordInterface, rcdExistTypes>

export type updRecordInterface = Pick<recordInterface, updRecordTypes>
export type oneRecordInterface = Pick<recordInterface, oneRecordTypes>
export type recordAnioPlayerInterface = Pick<recordInterface, recordAnioPlayerTypes>
export type recordAnioInterface = Pick<recordInterface, recordAnioTypes>
export type recordSemanaMissionInterface = Pick<recordInterface, recordSemanaMissionTypes>
export type recordAnioMissionInterface = Pick<recordInterface, recordAnioMissionTypes>
