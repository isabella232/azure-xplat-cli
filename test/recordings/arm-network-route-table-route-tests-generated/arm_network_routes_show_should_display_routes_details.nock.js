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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"1379cca7-bd54-4787-9b84-ccea6ca0f794\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1379cca7-bd54-4787-9b84-ccea6ca0f794"',
  'x-ms-request-id': '9eeeda32-4802-4955-8be6-5d35c4c63d8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '282580c7-fb79-4f1a-b513-3b4813255739',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103528Z:282580c7-fb79-4f1a-b513-3b4813255739',
  date: 'Wed, 27 Sep 2017 10:35:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"1379cca7-bd54-4787-9b84-ccea6ca0f794\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1379cca7-bd54-4787-9b84-ccea6ca0f794"',
  'x-ms-request-id': '9eeeda32-4802-4955-8be6-5d35c4c63d8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '282580c7-fb79-4f1a-b513-3b4813255739',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103528Z:282580c7-fb79-4f1a-b513-3b4813255739',
  date: 'Wed, 27 Sep 2017 10:35:28 GMT',
  connection: 'close' });
 return result; }]];