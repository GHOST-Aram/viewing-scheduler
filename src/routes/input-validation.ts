import { validator } from "../z-library/validation/validator"

export const postValidators = [
    validator.validateObjectId('tenant', {required: true}),
    validator.validateObjectId('property', { required: true }),
    validator.validateString('viewDate', { required: true }),
    validator.validateString('viewTime', { required: true })
]