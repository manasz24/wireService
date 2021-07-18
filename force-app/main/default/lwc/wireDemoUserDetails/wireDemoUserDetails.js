import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi' //adapter
import Id from '@salesforce/user/Id' //0056D00000452xoQAA
import USER_NAME from '@salesforce/schema/user.Name'
import USER_MAIL from '@salesforce/schema/user.Email'
const fields =[USER_NAME,USER_MAIL]
export default class WireDemoUserDetails extends LightningElement {

    userId = Id
    userDetail
    userDetailProperty
    //@wire(getRecord,{recordId:'0056D00000452xoQAA', fields:['User.Name','User.Email']})

    //$userId is to handle the asynchronous prcoess of the getRecord

    @wire(getRecord,{recordId:'$userId', fields:fields})
    userDetailHandler({data,error}){
        //console.log(response)
        //response.data
        //response.error
        if(data){
            this.userDetail=data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord,{recordId:'0056D00000452xoQAA', fields:fields})
    userDetailProperty


}