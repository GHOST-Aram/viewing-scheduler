import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { ViewScheduler, ViewSchedulerModel } from "./model";

export class DataAccess extends GenericDataAccess<ViewSchedulerModel, ViewScheduler>{

    constructor(model: ViewSchedulerModel){
        super(model)
    }
}