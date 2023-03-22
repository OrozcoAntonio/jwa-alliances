interface missionInterface{
    idMission: number,
    idAlliance: number,
    type: string,
    missionDescripcion: string,
    missionAlias: string
}

type newMissionTypes = 'idMission'|'idAlliance'|'type'|'missionDescripcion'|'missionAlias'
type updMissionTypes = 'idMission'|'idAlliance'|'type'|'missionDescripcion'|'missionAlias'
type oneMissionTypes = 'idMission'|'missionDescripcion'

export type newMissionInterface = Pick<missionInterface, newMissionTypes>
export type updMissionInterface = Pick<missionInterface, updMissionTypes>
export type oneMissionInterface = Pick<missionInterface, oneMissionTypes>

// type algo = 'jwaPlayer'
// export type noOnePlayer = Omit<userInterface, algo>