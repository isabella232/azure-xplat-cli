// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'x-ms-correlation-request-id': '10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203047Z:10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:30:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'x-ms-correlation-request-id': '10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203047Z:10c8d4f8-d845-45f9-aca4-5ed634978edb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:30:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'd19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'x-ms-correlation-request-id': 'd19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203118Z:d19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-request-id': 'd19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'x-ms-correlation-request-id': 'd19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203118Z:d19633d6-48f5-4b1c-8a8a-be32a8d0f312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-request-id': 'a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'x-ms-correlation-request-id': 'a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203148Z:a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:31:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14946',
  'x-ms-request-id': 'a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'x-ms-correlation-request-id': 'a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203148Z:a01ebfe0-9c2e-4f2e-ad27-5ffb3953c711',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:31:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '89a7a533-1413-4007-b20e-7cddcf295537',
  'x-ms-correlation-request-id': '89a7a533-1413-4007-b20e-7cddcf295537',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203219Z:89a7a533-1413-4007-b20e-7cddcf295537',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:32:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '89a7a533-1413-4007-b20e-7cddcf295537',
  'x-ms-correlation-request-id': '89a7a533-1413-4007-b20e-7cddcf295537',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203219Z:89a7a533-1413-4007-b20e-7cddcf295537',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:32:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'x-ms-correlation-request-id': 'a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203249Z:a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'x-ms-correlation-request-id': 'a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203249Z:a28f2a0a-bee9-4525-8c0b-a037e9b0da2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '3674c83d-86a4-4412-9ea7-7253a6cff294',
  'x-ms-correlation-request-id': '3674c83d-86a4-4412-9ea7-7253a6cff294',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203320Z:3674c83d-86a4-4412-9ea7-7253a6cff294',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:33:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '3674c83d-86a4-4412-9ea7-7253a6cff294',
  'x-ms-correlation-request-id': '3674c83d-86a4-4412-9ea7-7253a6cff294',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203320Z:3674c83d-86a4-4412-9ea7-7253a6cff294',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:33:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'x-ms-correlation-request-id': 'c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203350Z:c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:33:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': 'c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'x-ms-correlation-request-id': 'c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'x-ms-routing-request-id': 'CENTRALUS:20160805T203350Z:c684d6df-a3d0-4e75-b746-615cef86e5c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:33:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-request-id': '7a09b88e-dd54-4d25-913f-72f52af7792d',
  'x-ms-correlation-request-id': '7a09b88e-dd54-4d25-913f-72f52af7792d',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203421Z:7a09b88e-dd54-4d25-913f-72f52af7792d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:34:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-request-id': '7a09b88e-dd54-4d25-913f-72f52af7792d',
  'x-ms-correlation-request-id': '7a09b88e-dd54-4d25-913f-72f52af7792d',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203421Z:7a09b88e-dd54-4d25-913f-72f52af7792d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:34:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-request-id': '229d7575-562e-4e08-9da5-a887995594dd',
  'x-ms-correlation-request-id': '229d7575-562e-4e08-9da5-a887995594dd',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203451Z:229d7575-562e-4e08-9da5-a887995594dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:34:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-request-id': '229d7575-562e-4e08-9da5-a887995594dd',
  'x-ms-correlation-request-id': '229d7575-562e-4e08-9da5-a887995594dd',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203451Z:229d7575-562e-4e08-9da5-a887995594dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:34:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-request-id': '45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'x-ms-correlation-request-id': '45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203521Z:45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536/operationResults/YTM0YjFmMTUtMDgwYS00OTY5LTk1ZGEtNTM3ZWU2MWVhMWEw?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-request-id': '45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'x-ms-correlation-request-id': '45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203521Z:45c46a5c-c6dc-478e-97d7-fabead92ca78',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABOIww=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub6536.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-request-id': 'e3dfc60d-571c-49b9-b1e6-a84339844344',
  'x-ms-correlation-request-id': 'e3dfc60d-571c-49b9-b1e6-a84339844344',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203522Z:e3dfc60d-571c-49b9-b1e6-a84339844344',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABOIww=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub6536.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-request-id': 'e3dfc60d-571c-49b9-b1e6-a84339844344',
  'x-ms-correlation-request-id': 'e3dfc60d-571c-49b9-b1e6-a84339844344',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203522Z:e3dfc60d-571c-49b9-b1e6-a84339844344',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABOIww=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub6536.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '41c35de1-a1cd-4a57-831e-8470ed14b531',
  'x-ms-correlation-request-id': '41c35de1-a1cd-4a57-831e-8470ed14b531',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203522Z:41c35de1-a1cd-4a57-831e-8470ed14b531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub6536\",\"name\":\"xplattestiothub6536\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABOIww=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub6536.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6536-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-58309-c7ab449e38.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1605',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '41c35de1-a1cd-4a57-831e-8470ed14b531',
  'x-ms-correlation-request-id': '41c35de1-a1cd-4a57-831e-8470ed14b531',
  'x-ms-routing-request-id': 'WESTUS2:20160805T203522Z:41c35de1-a1cd-4a57-831e-8470ed14b531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 05 Aug 2016 20:35:21 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplattestiothub6536'];};