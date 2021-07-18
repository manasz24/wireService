import { LightningElement,wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireGetPicklistValues extends LightningElement {

    selectedIndustry = ''
    industryOptions = []

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId', 
                            fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data)
            this.industryOptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }

    }


    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    generatePicklist(data){
            return data.values.map(items=>({ label: items.label, value: items.value }))

    }



    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }



}