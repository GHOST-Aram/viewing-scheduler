import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { HydratedViewScheduler, ViewScheduler, ViewSchedulerModel } from "./model";

export class DataAccess extends GenericDataAccess<ViewSchedulerModel, ViewScheduler>{

    constructor(model: ViewSchedulerModel){
        super(model)
    }

    public findExistingSchedule = async(tenantId: string, propertyId: string
        ): Promise<HydratedViewScheduler | null>  =>{
        return await this.model.findOne({ tenant: tenantId }, { property: propertyId })
    } 
}