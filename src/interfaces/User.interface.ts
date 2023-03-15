interface userInterface{
    idPlayer: number, 
    idAlliance: number, 
    jwaPlayer: string, 
    discordID: string, 
    pseudonimo: string, 
    createdAt: string, 
    updatedAt: string
}

type newUserTypes = 'idPlayer'|'idAlliance'|'jwaPlayer'|'discordID'|'pseudonimo'
type updUserTypes = 'idPlayer'|'idAlliance'|'jwaPlayer'|'discordID'|'pseudonimo'
type oneUserTypes = 'idPlayer'|'idAlliance'|'jwaPlayer'

export type newUserInterface = Pick<userInterface, newUserTypes>
export type updUserInterface = Pick<userInterface, updUserTypes>
export type oneUserInterface = Pick<userInterface, oneUserTypes>

// type algo = 'jwaPlayer'
// export type noOnePlayer = Omit<userInterface, algo>