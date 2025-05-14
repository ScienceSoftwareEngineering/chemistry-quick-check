enum Halogen {
    Flourine,
    Chlorine,
    Bromine,
    Iodine
}

interface NumAtoms {
    NumCarbons: number,
    NumHydrocarbons: number,
    NumHalogens: Map<Halogen, number>
}

function isHalogenatedHydrocarbon(numAtoms: NumAtoms) {
    
}

export { isHalogenatedHydrocarbon };