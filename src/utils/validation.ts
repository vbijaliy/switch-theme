import { ValidatorDefinition, ValidatorConstants } from "../types/validationTypes";

const validateRequired = (value: unknown) => {
    if (typeof value == "undefined" || value === null) return false
    if (typeof value == "string" && value.length === 0) return false
    if (typeof value == "number" && isNaN(value)) return false
    return true
}

const validateLengthMax = (max: number | undefined, value: number | string): boolean => {
    if (typeof max === "undefined") return true

    if (typeof value === "number" && value.toString().length > max ||
        typeof value === "string" && value.length > max
    ) {
        return false
    }
    return true
}

const validateLengthMin = (min: number | undefined, value: number | string): boolean => {
    if (typeof min === "undefined") return true

    if (typeof value === "number" && value.toString().length < min ||
        typeof value === "string" && value.length < min
    ) {
        return false
    }
    return true
}

const validateOne = (valdation: ValidatorDefinition, value: number | string): boolean => {
    switch (valdation.type) {
        case ValidatorConstants.REQUIRED:
            return validateRequired(value)
        case ValidatorConstants.LENGTH_MIN:
            return validateLengthMin(valdation.minLength, value)
        case ValidatorConstants.LENGTH_MAX:
            return validateLengthMax(valdation.maxLength, value)
    }
    return true
}

export default validateOne