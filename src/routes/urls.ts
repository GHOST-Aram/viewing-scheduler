import { Router } from "express"
import { Controller } from "../controllers/controller"
import { postValidators } from "./input-validation"
import { validator } from "../z-library/validation/validator"

const router = Router()
export const routesWrapper = (controller: Controller): Router =>{
    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', postValidators, validator.handleValidationErrors,
        controller.addNew
    )
    
    return router
}