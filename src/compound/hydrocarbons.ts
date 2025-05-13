interface NumAtoms {
    NumCarbons: number,
    NumHydrogens: number
}

function isAlkane(numAtoms: NumAtoms) {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons) + 2) {
        return true;
    } else {
        return false;
    }
}

function isAlkene(numAtoms: NumAtoms) {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons)) {
        return true;
    } else {
        return false;
    }
}

function isAlkyne(numAtoms: NumAtoms) {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons) - 2) {
        return true;
    } else {
        return false;
    }
}

export { isAlkane, isAlkene, isAlkyne };