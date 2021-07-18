import { LightningElement,wire,api } from 'lwc';
import {getRecord,getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
//import NAME_FIELD from '@salesforce/schema/Account.Name'
export default class WireGetRecord extends LightningElement {
 myFields=[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]
 Name
 owner
 AnnualRevenue   

    @api recordId

    //fields
    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandler({data,error}){
    if(data){
        console.log(data)
        this.name = getFieldValue(data,NAME_FIELD)
        this.owner = getFieldValue(data,OWNER_NAME_FIELD)
        this.AnnualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD)
    }
}

//layout

// @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
//     accountHandler({data,error}){
//     if(data){
//         console.log(data)
//         this.name = data.fields.Name.value
//         this.owner = data.fields.Owner.displayValue
//         this.AnnualRevenue = data.fields.AnnualRevenue.value
//     }
// }


}