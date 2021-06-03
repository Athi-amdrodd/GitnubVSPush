import { LightningElement, wire } from 'lwc';

import getContactFields from '@salesforce/apex/ExploreCustomContactController.getContactFields';

export default class ExploreReimplementDataTable extends LightningElement {
    @wire(getContactFields) wiredContactFields;
}