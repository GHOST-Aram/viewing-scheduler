import { Router } from "express"
import { Controller } from "../controllers/controller"

const router = Router()
export const routesWrapper = (controller: Controller): Router =>{

    return router
}