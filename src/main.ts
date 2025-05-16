import { splitByEmpiricalFormula } from "./utils/formulas";

export {
    isAlkaneByCount, isAlkeneByEmpiricalFormula,
    isAlkeneByCount,
    isAlkyneByCount
} from "./compound/hydrocarbons";
export { isHalogenatedHydrocarbonByCount } from "./compound/halogenated"

console.log(splitByEmpiricalFormula("CA4"))