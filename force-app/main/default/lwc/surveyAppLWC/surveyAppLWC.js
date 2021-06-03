import { LightningElement,track } from 'lwc';
import getAllObjects from '@salesforce/apex/RandomRecordAudit.getAllObjects';

export default class ForumIterateMap extends LightningElement {
    @track objects = [];
    //@track error;
    
        connectedCallback(){
            getAllObjects()
                .then(result => {
                    //this.objects = result;
                    alert(' Result ==> ' + this.objects);
                    for(let key in result) {
                        // Preventing unexcepted data
                        if (result.hasOwnProperty(key)) { // Filtering the data in the loop
                            this.objects.push({value:result[key], key:key});
                        }
                    }
                })
                .catch(error => {
                    this.error = error;
                });
        
    }
}