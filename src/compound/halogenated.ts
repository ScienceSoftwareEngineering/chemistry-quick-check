import { isAlkaneByCount, isAlkeneByCount, isAlkyneByCount } from "./hydrocarbons";

enum Halogen {
    Flourine,
    Chlorine,
    Bromine,
    Iodine
}

interface NumAtoms {
    NumCarbons: number,
    NumHydrogens: number,
    NumHalogens: number
}

function isHalogenatedHydrocarbonByCount(numAtoms: NumAtoms): boolean {
    const numHydrogensUnHalogenated = numAtoms.NumHydrogens + numAtoms.NumHalogens

    let isHydrocarbonWhenUnHalogenated = false;

    if (!isHydrocarbonWhenUnHalogenated) {
        if (isAlkane({ NumCarbons: numAtoms.NumCarbons, NumHydrogens: numHydrogensUnHalogenated })) {
            return isHydrocarbonWhenUnHalogenated = true;
        }

        if (isAlkene({ NumCarbons: numAtoms.NumCarbons, NumHydrogens: numHydrogensUnHalogenated })) {
            return isHydrocarbonWhenUnHalogenated = true;
        }

        if (isAlkyne({ NumCarbons: numAtoms.NumCarbons, NumHydrogens: numHydrogensUnHalogenated })) {
            return isHydrocarbonWhenUnHalogenated = true;
        }
    }

    return isHydrocarbonWhenUnHalogenated;
}

export {
    isHalogenatedHydrocarbonByCount
};