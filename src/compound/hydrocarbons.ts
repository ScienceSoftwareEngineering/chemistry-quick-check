interface NumAtoms {
    NumCarbons: number,
    NumHydrogens: number
}


// Basic Test Checking
function isAlkaneByCount(numAtoms: NumAtoms): boolean {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons) + 2) {
        return true;
    } else {
        return false;
    }
}

function isAlkeneByCount(numAtoms: NumAtoms): boolean {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons)) {
        return true;
    } else {
        return false;
    }
}

function isAlkyneByCount(numAtoms: NumAtoms): boolean {
    if (numAtoms.NumHydrogens == (2 * numAtoms.NumCarbons) - 2) {
        return true;
    } else {
        return false;
    }
}

// Equation Test Checking
function isAlkeneByEmpiricalFormula(Equation: string) {

}

export {
    isAlkaneByCount, isAlkeneByEmpiricalFormula,
    isAlkeneByCount,
    isAlkyneByCount,
    NumAtoms
};

// val equation = "2H2 + O2 -> 2H2O"