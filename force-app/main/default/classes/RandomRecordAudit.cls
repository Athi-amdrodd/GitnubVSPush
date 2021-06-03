public with sharing class RandomRecordAudit {
    @AuraEnabled(cacheable=true)
    public static map<string, string> getAllObjects(){
        map<string, string> objectList = new map<string, string>();
        for ( Schema.SObjectType o : Schema.getGlobalDescribe().values() )
        {
            Schema.DescribeSObjectResult objResult = o.getDescribe();
            objectList.put(objResult.getName(), objResult.getLabel());
        }
        System.System.debug('objectList'+objectList);
        System.System.debug('objectList'+objectList);
        return objectList;
    } 
}