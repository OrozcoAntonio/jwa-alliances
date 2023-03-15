interface alliInterface{
    idAlliance: number, 
    Alliance: string, 
    createdAt: string, 
    updatedAt: string
}

type newAlliTypes = 'idAlliance'|'Alliance'
type updAlliTypes = 'idAlliance'|'Alliance'
type oneAlliTypes = 'idAlliance'

export type newAlliInterface = Pick<alliInterface, newAlliTypes>
export type updAlliInterface = Pick<alliInterface, updAlliTypes>
export type oneAlliInterface = Pick<alliInterface, oneAlliTypes>

// type algo = 'jwaPlayer'
// export type noOnePlayer = Omit<alliInterface, algo>