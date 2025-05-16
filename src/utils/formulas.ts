import { NumAtoms } from "../compound/hydrocarbons";

function isNumerical(str: string): boolean {
    if (/^\d+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}

function splitByEmpiricalFormula(emphiricalFormula: string): NumAtoms | boolean {
    const splittedEmpiricalFormula = emphiricalFormula.split("");

    let numCarbons;
    let numHydrogens;

    let isValidFormula = true;

    //TODO-HIGH: Create Flowchart

    if (isValidFormula) {
        if (splittedEmpiricalFormula[0] !== "C") {
            return isValidFormula = false;
        }

        if (splittedEmpiricalFormula[1] !== "H") {
            if (isNumerical(splittedEmpiricalFormula[1])) {
                numCarbons = splittedEmpiricalFormula[1];
            } else {
                return isValidFormula = false;
            }
        }

        if (splittedEmpiricalFormula[2]) {
            // 🙏
        }
    }

    return(isValidFormula)

}

export {
    splitByEmpiricalFormula
};