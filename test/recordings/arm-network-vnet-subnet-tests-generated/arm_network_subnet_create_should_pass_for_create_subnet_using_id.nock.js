// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0ffb161e-61fe-4014-9fc2-4f0c81248340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e9fabbeb-d3ae-4529-aee6-704ce5f830f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080531Z:e9fabbeb-d3ae-4529-aee6-704ce5f830f3',
  date: 'Wed, 27 Sep 2017 08:05:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0ffb161e-61fe-4014-9fc2-4f0c81248340',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e9fabbeb-d3ae-4529-aee6-704ce5f830f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080531Z:e9fabbeb-d3ae-4529-aee6-704ce5f830f3',
  date: 'Wed, 27 Sep 2017 08:05:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"bd61b234-f59d-430d-b275-63b4b6cf9b1e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '875dd2a1-5a1a-48d0-9ed8-4d802098f332',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '2c81c6d8-66b4-4f4d-8b1d-fb462101fc60',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080533Z:2c81c6d8-66b4-4f4d-8b1d-fb462101fc60',
  date: 'Wed, 27 Sep 2017 08:05:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"bd61b234-f59d-430d-b275-63b4b6cf9b1e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '875dd2a1-5a1a-48d0-9ed8-4d802098f332',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '2c81c6d8-66b4-4f4d-8b1d-fb462101fc60',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080533Z:2c81c6d8-66b4-4f4d-8b1d-fb462101fc60',
  date: 'Wed, 27 Sep 2017 08:05:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b269bbfd-5e43-44bc-b096-fceb0ac8724a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080604Z:75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8',
  date: 'Wed, 27 Sep 2017 08:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b269bbfd-5e43-44bc-b096-fceb0ac8724a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080604Z:75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8',
  date: 'Wed, 27 Sep 2017 08:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0"',
  'x-ms-request-id': '8cd77f4b-d9de-41c7-b72c-59a988567897',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9528a24d-d186-4b4a-9b76-eb43b2f841e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080604Z:9528a24d-d186-4b4a-9b76-eb43b2f841e7',
  date: 'Wed, 27 Sep 2017 08:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0"',
  'x-ms-request-id': '8cd77f4b-d9de-41c7-b72c-59a988567897',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9528a24d-d186-4b4a-9b76-eb43b2f841e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080604Z:9528a24d-d186-4b4a-9b76-eb43b2f841e7',
  date: 'Wed, 27 Sep 2017 08:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0"',
  'x-ms-request-id': '01a4160c-74e9-4163-8ab1-49198864ee6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '45deff82-1ea0-4ab1-85d6-b1c495d62c5c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080606Z:45deff82-1ea0-4ab1-85d6-b1c495d62c5c',
  date: 'Wed, 27 Sep 2017 08:06:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName\",\r\n  \"etag\": \"W/\\\"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e9a4a5b1-6e95-46bd-82e3-772e985ae1b0"',
  'x-ms-request-id': '01a4160c-74e9-4163-8ab1-49198864ee6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '45deff82-1ea0-4ab1-85d6-b1c495d62c5c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080606Z:45deff82-1ea0-4ab1-85d6-b1c495d62c5c',
  date: 'Wed, 27 Sep 2017 08:06:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': 'a4f1c633-442e-489d-85ab-494a5ce60495',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2f5130eb-d6fc-4237-974c-4efd0d99e77c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080607Z:2f5130eb-d6fc-4237-974c-4efd0d99e77c',
  date: 'Wed, 27 Sep 2017 08:06:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetUsingIdName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': 'a4f1c633-442e-489d-85ab-494a5ce60495',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2f5130eb-d6fc-4237-974c-4efd0d99e77c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080607Z:2f5130eb-d6fc-4237-974c-4efd0d99e77c',
  date: 'Wed, 27 Sep 2017 08:06:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e11b340e-2e37-4fdc-bca0-b986d7ad717c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '11b06f6f-0d00-47e3-a801-1bcc651202d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080638Z:11b06f6f-0d00-47e3-a801-1bcc651202d1',
  date: 'Wed, 27 Sep 2017 08:06:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/a4f1c633-442e-489d-85ab-494a5ce60495?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e11b340e-2e37-4fdc-bca0-b986d7ad717c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '11b06f6f-0d00-47e3-a801-1bcc651202d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080638Z:11b06f6f-0d00-47e3-a801-1bcc651202d1',
  date: 'Wed, 27 Sep 2017 08:06:37 GMT',
  connection: 'close' });
 return result; }]];