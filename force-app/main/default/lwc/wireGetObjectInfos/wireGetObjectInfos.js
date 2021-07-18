import { LightningElement,wire } from 'lwc';
import {getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class WireGetObjectInfos extends LightningElement {
    arrayMy = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]

    objectinfos

    @wire(getObjectInfos,{objectApiNames:'$arrayMy'})
    objectInfosHandler({data,error}){
        if(data){
                this.objectinfos=data
                console.log(data)
        }
        if(error){
            console.log(error)

        }

    }        


}