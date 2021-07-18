import { LightningElement,wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireGetObjectInfo extends LightningElement {
RecordTypeId

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
            if(data){
                this.RecordTypeId=data.defaultRecordTypeId
                //console.log(data)
            }
            if(error){
                //console.log(error)
            }
        }  
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfoproperty

    

}