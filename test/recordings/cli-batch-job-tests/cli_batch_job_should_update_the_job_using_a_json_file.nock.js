// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D351A8305DB8AE\",\"lastModified\":\"2016-03-21T16:45:19.7175982Z\",\"creationTime\":\"2016-03-21T16:45:19.649563Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:19.7175982Z\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n    },{\r\n      \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-03-21T16:45:19.7175982Z\",\"poolId\":\"pool1\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 21 Mar 2016 16:45:19 GMT',
  etag: '0x8D351A8305DB8AE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a536e1a-7fad-4493-a5f4-4feb9a964b6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7ef4cc26-3476-4f9a-bf45-1e57851946cd',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D351A8305DB8AE\",\"lastModified\":\"2016-03-21T16:45:19.7175982Z\",\"creationTime\":\"2016-03-21T16:45:19.649563Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:19.7175982Z\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n    },{\r\n      \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-03-21T16:45:19.7175982Z\",\"poolId\":\"pool1\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 21 Mar 2016 16:45:19 GMT',
  etag: '0x8D351A8305DB8AE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a536e1a-7fad-4493-a5f4-4feb9a964b6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7ef4cc26-3476-4f9a-bf45-1e57851946cd',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 21 Mar 2016 16:45:21 GMT',
  etag: '0x8D351A8316DF03D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b14f7638-f575-4151-8973-ffac9e4f9a2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'cabc335f-3f4d-4df8-9689-66a9d9df42f2',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jsxplat.centralus.batch.azure.com/jobs/xplatJob',
  date: 'Mon, 21 Mar 2016 16:45:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 21 Mar 2016 16:45:21 GMT',
  etag: '0x8D351A8316DF03D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b14f7638-f575-4151-8973-ffac9e4f9a2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'cabc335f-3f4d-4df8-9689-66a9d9df42f2',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jsxplat.centralus.batch.azure.com/jobs/xplatJob',
  date: 'Mon, 21 Mar 2016 16:45:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D351A8316DF03D\",\"lastModified\":\"2016-03-21T16:45:21.5015997Z\",\"creationTime\":\"2016-03-21T16:45:19.649563Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:19.7175982Z\",\"priority\":5,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-03-21T16:45:19.7175982Z\",\"poolId\":\"pool1\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 21 Mar 2016 16:45:21 GMT',
  etag: '0x8D351A8316DF03D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cd988bb5-6f9e-4bec-becd-a86c2f5b2eb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e7345a2c-66bc-4fc1-adc3-c5ea3bfce1f3',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/jobs/xplatJob?api-version=2015-12-01.2.2&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"xplatJob\",\"displayName\":\"displayName\",\"url\":\"https://jsxplat.centralus.batch.azure.com/jobs/xplatJob\",\"eTag\":\"0x8D351A8316DF03D\",\"lastModified\":\"2016-03-21T16:45:21.5015997Z\",\"creationTime\":\"2016-03-21T16:45:19.649563Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-21T16:45:19.7175982Z\",\"priority\":5,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n  },\"jobManagerTask\":{\r\n    \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"name1\",\"value\":\"value1\"\r\n      },{\r\n        \"name\":\"name2\",\"value\":\"value2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n    },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n  },\"jobPreparationTask\":{\r\n    \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n      },{\r\n        \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n      }\r\n    ],\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n    },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n  },\"jobReleaseTask\":{\r\n    \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n      {\r\n        \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n      }\r\n    ],\"environmentSettings\":[\r\n      {\r\n        \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n      },{\r\n        \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n      }\r\n    ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n  },\"commonEnvironmentSettings\":[\r\n    {\r\n      \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n    },{\r\n      \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n    }\r\n  ],\"poolInfo\":{\r\n    \"poolId\":\"pool1\"\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ],\"executionInfo\":{\r\n    \"startTime\":\"2016-03-21T16:45:19.7175982Z\",\"poolId\":\"pool1\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 21 Mar 2016 16:45:21 GMT',
  etag: '0x8D351A8316DF03D',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cd988bb5-6f9e-4bec-becd-a86c2f5b2eb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e7345a2c-66bc-4fc1-adc3-c5ea3bfce1f3',
  dataserviceversion: '3.0',
  date: 'Mon, 21 Mar 2016 16:45:20 GMT',
  connection: 'close' });
 return result; }]];