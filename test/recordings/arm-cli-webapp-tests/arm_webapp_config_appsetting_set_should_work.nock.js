// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '742239f5-feb4-471e-accf-b9f0657ec98b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c1dd27b8-9ac4-4b15-a17c-5c7d2bcdac84',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013654Z:c1dd27b8-9ac4-4b15-a17c-5c7d2bcdac84',
  date: 'Wed, 21 Sep 2016 01:36:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '742239f5-feb4-471e-accf-b9f0657ec98b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c1dd27b8-9ac4-4b15-a17c-5c7d2bcdac84',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013654Z:c1dd27b8-9ac4-4b15-a17c-5c7d2bcdac84',
  date: 'Wed, 21 Sep 2016 01:36:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787\",\"name\":\"webappclitests7787\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests7787\",\"state\":\"Running\",\"hostNames\":[\"webappclitests7787.azurewebsites.net\"],\"webSpace\":\"testrg12842-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-047.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg12842-WestUSwebspace/sites/webappclitests7787\",\"repositorySiteName\":\"webappclitests7787\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests7787.azurewebsites.net\",\"webappclitests7787.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests7787.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests7787.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests8801\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-21T01:36:55.41\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests7787\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.40.28.42,104.40.26.133,104.40.25.66,104.40.24.165\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-047\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg12842\",\"defaultHostName\":\"webappclitests7787.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2515',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D213A8A2CF6520"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4923aca4-d4fb-4155-9f97-24df610f9d26',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd78df655-fe34-46fc-97dd-0a39517b8c21',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013654Z:d78df655-fe34-46fc-97dd-0a39517b8c21',
  date: 'Wed, 21 Sep 2016 01:36:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787\",\"name\":\"webappclitests7787\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests7787\",\"state\":\"Running\",\"hostNames\":[\"webappclitests7787.azurewebsites.net\"],\"webSpace\":\"testrg12842-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-047.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg12842-WestUSwebspace/sites/webappclitests7787\",\"repositorySiteName\":\"webappclitests7787\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests7787.azurewebsites.net\",\"webappclitests7787.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests7787.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests7787.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests8801\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-21T01:36:55.41\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests7787\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.40.28.42,104.40.26.133,104.40.25.66,104.40.24.165\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-047\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg12842\",\"defaultHostName\":\"webappclitests7787.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2515',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D213A8A2CF6520"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4923aca4-d4fb-4155-9f97-24df610f9d26',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd78df655-fe34-46fc-97dd-0a39517b8c21',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013654Z:d78df655-fe34-46fc-97dd-0a39517b8c21',
  date: 'Wed, 21 Sep 2016 01:36:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey16247\":\"testval16010\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e68f8446-476b-4b79-a666-0bd45f12b150',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ceb95370-6e5b-433f-bbdc-77819a308beb',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013656Z:ceb95370-6e5b-433f-bbdc-77819a308beb',
  date: 'Wed, 21 Sep 2016 01:36:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12842/providers/Microsoft.Web/sites/webappclitests7787/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey16247\":\"testval16010\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e68f8446-476b-4b79-a666-0bd45f12b150',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ceb95370-6e5b-433f-bbdc-77819a308beb',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013656Z:ceb95370-6e5b-433f-bbdc-77819a308beb',
  date: 'Wed, 21 Sep 2016 01:36:55 GMT',
  connection: 'close' });
 return result; }]];