import { DataAccess } from "./data-access";
import { HydratedViewScheduler, ViewScheduler, ViewSchedulerModel } from "./model";
import { postData } from "../test/data/data";

export class MockDataAccess extends DataAccess{
    constructor(model: ViewSchedulerModel){
        super(model)
    }

    public createNew = jest.fn(async(data: ViewScheduler
        ): Promise<HydratedViewScheduler>=>{
        return new ViewScheduler(data)
    })  
    
    public findExistingSchedule = jest.fn(async(tenantId: string, propertyId: string ) =>{
        if(tenantId === '64c9e4f2df7cc072af2ac9e0' && propertyId === '64c9e4f2df7cc072af2ac9e0'){
            return new ViewScheduler(postData)
        } 

        else return null
    })
}