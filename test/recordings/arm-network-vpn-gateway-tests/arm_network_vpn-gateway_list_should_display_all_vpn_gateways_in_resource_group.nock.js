// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-gateway\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n      \"etag\": \"W/\\\"d932f21b-13af-481a-b98b-c5aed486761d\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"d932f21b-13af-481a-b98b-c5aed486761d\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.1.0.12\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"sku\": {\r\n          \"name\": \"Standard\",\r\n          \"tier\": \"Standard\",\r\n          \"capacity\": 2\r\n        },\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": false,\r\n        \"vpnClientConfiguration\": {\r\n          \"vpnClientAddressPool\": {\r\n            \"addressPrefixes\": [\r\n              \"10.0.0.0/24\"\r\n            ]\r\n          },\r\n          \"vpnClientRootCertificates\": [],\r\n          \"vpnClientRevokedCertificates\": []\r\n        },\r\n        \"bgpSettings\": {\r\n          \"asn\": 65515,\r\n          \"bgpPeeringAddress\": \"10.1.0.14\",\r\n          \"peerWeight\": 0\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bc8bd58b-7489-4c15-9a59-935e601f12eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '63775c39-8ce7-4755-ba17-5fefb91b0336',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092523Z:63775c39-8ce7-4755-ba17-5fefb91b0336',
  date: 'Thu, 31 Mar 2016 09:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-gateway\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n      \"etag\": \"W/\\\"d932f21b-13af-481a-b98b-c5aed486761d\\\"\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n      \"location\": \"westeurope\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"d932f21b-13af-481a-b98b-c5aed486761d\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.1.0.12\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"sku\": {\r\n          \"name\": \"Standard\",\r\n          \"tier\": \"Standard\",\r\n          \"capacity\": 2\r\n        },\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": false,\r\n        \"vpnClientConfiguration\": {\r\n          \"vpnClientAddressPool\": {\r\n            \"addressPrefixes\": [\r\n              \"10.0.0.0/24\"\r\n            ]\r\n          },\r\n          \"vpnClientRootCertificates\": [],\r\n          \"vpnClientRevokedCertificates\": []\r\n        },\r\n        \"bgpSettings\": {\r\n          \"asn\": 65515,\r\n          \"bgpPeeringAddress\": \"10.1.0.14\",\r\n          \"peerWeight\": 0\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bc8bd58b-7489-4c15-9a59-935e601f12eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '63775c39-8ce7-4755-ba17-5fefb91b0336',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092523Z:63775c39-8ce7-4755-ba17-5fefb91b0336',
  date: 'Thu, 31 Mar 2016 09:25:23 GMT',
  connection: 'close' });
 return result; }]];