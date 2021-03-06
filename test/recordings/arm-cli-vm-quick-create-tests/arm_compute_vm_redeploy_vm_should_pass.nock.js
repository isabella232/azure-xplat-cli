// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Compute/virtualMachines/vm13245/redeploy?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '7903870a-0906-4dba-a3ad-92b893de7339',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '431f0747-d275-4805-8646-1094076c4c61',
  'x-ms-routing-request-id': 'WESTUS:20170602T153337Z:431f0747-d275-4805-8646-1094076c4c61',
  date: 'Fri, 02 Jun 2017 15:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate3552/providers/Microsoft.Compute/virtualMachines/vm13245/redeploy?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '7903870a-0906-4dba-a3ad-92b893de7339',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '431f0747-d275-4805-8646-1094076c4c61',
  'x-ms-routing-request-id': 'WESTUS:20170602T153337Z:431f0747-d275-4805-8646-1094076c4c61',
  date: 'Fri, 02 Jun 2017 15:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'eb64a297-bf2e-41ea-9bc4-1c53ae027618',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8b7a3c15-6f95-402b-8aea-8ff25ffff57f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153408Z:8b7a3c15-6f95-402b-8aea-8ff25ffff57f',
  date: 'Fri, 02 Jun 2017 15:34:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'eb64a297-bf2e-41ea-9bc4-1c53ae027618',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8b7a3c15-6f95-402b-8aea-8ff25ffff57f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153408Z:8b7a3c15-6f95-402b-8aea-8ff25ffff57f',
  date: 'Fri, 02 Jun 2017 15:34:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '87b0174e-60b5-46b8-b4b5-46af6f2bd25f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e79e7ef9-6267-4afd-808b-a6365760042a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153439Z:e79e7ef9-6267-4afd-808b-a6365760042a',
  date: 'Fri, 02 Jun 2017 15:34:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '87b0174e-60b5-46b8-b4b5-46af6f2bd25f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e79e7ef9-6267-4afd-808b-a6365760042a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153439Z:e79e7ef9-6267-4afd-808b-a6365760042a',
  date: 'Fri, 02 Jun 2017 15:34:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fa6db10c-8fc9-413f-879c-9026e3c939a9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4d0fdd71-4837-4160-8e2d-37ec28d6b484',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153509Z:4d0fdd71-4837-4160-8e2d-37ec28d6b484',
  date: 'Fri, 02 Jun 2017 15:35:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fa6db10c-8fc9-413f-879c-9026e3c939a9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4d0fdd71-4837-4160-8e2d-37ec28d6b484',
  'x-ms-routing-request-id': 'WESTUS2:20170602T153509Z:4d0fdd71-4837-4160-8e2d-37ec28d6b484',
  date: 'Fri, 02 Jun 2017 15:35:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '65904d6c-c5f2-4115-95db-5f413399ba85',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14814',
  'x-ms-correlation-request-id': '7d94d58f-5fe9-415a-99ce-126fa5a386fa',
  'x-ms-routing-request-id': 'WESTUS:20170602T153540Z:7d94d58f-5fe9-415a-99ce-126fa5a386fa',
  date: 'Fri, 02 Jun 2017 15:35:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '65904d6c-c5f2-4115-95db-5f413399ba85',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14814',
  'x-ms-correlation-request-id': '7d94d58f-5fe9-415a-99ce-126fa5a386fa',
  'x-ms-routing-request-id': 'WESTUS:20170602T153540Z:7d94d58f-5fe9-415a-99ce-126fa5a386fa',
  date: 'Fri, 02 Jun 2017 15:35:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"endTime\": \"2017-06-02T15:35:45.1560942+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fbc1a5e9-3448-4ef8-a01b-e5c48955d8a6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '6449f9e3-164c-46a7-99c8-c9452e33b08f',
  'x-ms-routing-request-id': 'WESTUS:20170602T153611Z:6449f9e3-164c-46a7-99c8-c9452e33b08f',
  date: 'Fri, 02 Jun 2017 15:36:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/7903870a-0906-4dba-a3ad-92b893de7339?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T15:33:38.7741815+00:00\",\r\n  \"endTime\": \"2017-06-02T15:35:45.1560942+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"7903870a-0906-4dba-a3ad-92b893de7339\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'fbc1a5e9-3448-4ef8-a01b-e5c48955d8a6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '6449f9e3-164c-46a7-99c8-c9452e33b08f',
  'x-ms-routing-request-id': 'WESTUS:20170602T153611Z:6449f9e3-164c-46a7-99c8-c9452e33b08f',
  date: 'Fri, 02 Jun 2017 15:36:11 GMT',
  connection: 'close' });
 return result; }]];
