// This file has been autogenerated.
var profile = require('../../lib/util/profile');
exports.getMockedProfile = function() {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123f',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure SDK sandbox',
    username: 'user@domain.example',
    registeredProviders: ['website', 'sqlserver'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};
exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['SSHCERT'] = 'test/data/fakeSshcert.pem';
}
exports.scopes = [
  [

    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control': 'no-cache',
          'content-length': '183188',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '3c1093e5080635829fc5aeffaaedbc47',
          date: 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control': 'no-cache',
          'content-length': '183188',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '3c1093e5080635829fc5aeffaaedbc47',
          date: 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control': 'no-cache',
          'content-length': '183188',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '3c1093e5080635829fc5aeffaaedbc47',
          date: 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control': 'no-cache',
          'content-length': '183188',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '3c1093e5080635829fc5aeffaaedbc47',
          date: 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function(nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1')
        .reply(200, "<OSImage xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Category>User</Category><Label>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Label><Location>West US</Location><LogicalSizeInGB>10</LogicalSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</MediaLink><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><IsPremium>false</IsPremium><PublisherName>User</PublisherName></OSImage>", {
          'cache-control': 'no-cache',
          'content-length': '425',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '2e21aebf82a636cebfbdec38c6064c4f',
          date: 'Fri, 22 Nov 2013 04:44:08 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/vnetvmtest2</Url><ServiceName>vnetvmtest2</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><AffinityGroup>affinity1</AffinityGroup><Label>dm5ldHZtdGVzdDI=</Label><Status>Created</Status><DateCreated>2013-11-20T22:13:19Z</DateCreated><DateLastModified>2013-11-20T22:13:39Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '4051',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/locations')
        .reply(200, "<Locations xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Location><Name>East Asia</Name><DisplayName>East Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>Southeast Asia</Name><DisplayName>Southeast Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Europe</Name><DisplayName>North Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>West Europe</Name><DisplayName>West Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>East US</Name><DisplayName>East US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Central US</Name><DisplayName>North Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>South Central US</Name><DisplayName>South Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>West US</Name><DisplayName>West US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location></Locations>", {
          'cache-control': 'no-cache',
          'content-length': '2413',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'c15bb3fefdf23b6b99dbb38004fd84d5',
          date: 'Fri, 22 Nov 2013 05:21:39 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function(path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices', "*")
        .reply(201, "", {
          'cache-control': 'no-cache',
          'content-length': '0',
          location: 'https://management.core.windows.net/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/compute/xplattestvmcustdata',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'e201c9379bfd3a02ad915f1ef3f7c039',
          date: 'Fri, 22 Nov 2013 05:21:47 GMT'
        });
      return result;
    },
    function(nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/storageservices')
        .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/storageservices/acsforsdk2</Url><ServiceName>acsforsdk2</ServiceName><StorageServiceProperties><Description/><Location>West US</Location><Label>YW5kcmVyb2Q=</Label><Status>Created</Status><Endpoints><Endpoint>http://acsforsdk2.blob.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.queue.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>West US</GeoSecondaryRegion><StatusOfSecondary/></StorageServiceProperties><ExtendedProperties/></StorageService></StorageServices>", {
          'cache-control': 'no-cache',
          'content-length': '5523',
          'content-type': 'application/xml; charset=utf-8',
          server: '33.0.6198.30 (rd_rdfe_stable.130419-2156) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5573fc3bb3054af6b8371637a9215fe7',
          date: 'Thu, 02 May 2013 02:32:14 GMT'
        });
      return result;
    },
    function(nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/storageservices/acsforsdk2')
        .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/storageservices/acsforsdk2</Url><ServiceName>acsforsdk2</ServiceName><StorageServiceProperties><Description/><Location>West US</Location><Label>YWNzZm9yc2RrMg==</Label><Status>Created</Status><Endpoints><Endpoint>http://acsforsdk2.blob.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.queue.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2013-09-10T19:24:30Z</CreationTime><CustomDomains/></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", {
          'cache-control': 'no-cache',
          'content-length': '948',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '81dce72f88e8346c9690658e81211cb5',
          date: 'Thu, 21 Nov 2013 13:48:38 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function(path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmcustdata/certificates', "*")
        .reply(202, "", {
          'cache-control': 'no-cache',
          'content-length': '0',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '872c6309016d3f6da2fc87faedfbb793',
          date: 'Fri, 22 Nov 2013 05:21:52 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/operations/872c6309016d3f6da2fc87faedfbb793')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>872c6309-016d-3f6d-a2fc-87faedfbb792</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control': 'no-cache',
          'content-length': '232',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '1462e7525b3837d1bdede4f666380127',
          date: 'Fri, 22 Nov 2013 05:22:14 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function(path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmcustdata/deployments', "*")
        .reply(202, '<Deployment xmlns="http://schemas.microsoft.com/windowsazure" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Name>xplattestvmcustdata</Name><DeploymentSlot>Production</DeploymentSlot><Label>eHBsYXR0ZXN0dm1jdXN0b21kYXRh</Label><RoleList><Role><RoleName>xplattestvmcustdata</RoleName><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet><ConfigurationSetType>LinuxProvisioningConfiguration</ConfigurationSetType><HostName>xplattestvmcustdata</HostName><UserName>testuser</UserName><UserPassword>Collabera@01</UserPassword><CustomData>bm9kZWpzLHB5dGhvbg==</CustomData></ConfigurationSet></ConfigurationSets><OSVirtualHardDisk><SourceImageName>xplattestimg</SourceImageName></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList></Deployment>', {
          'cache-control': 'no-cache',
          'content-length': '775',
          server: '1.0.6198.50 (rd_rdfe_stable.140219-1552) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '87ecdd4172597ae99ac4b06a0deab9e4',
          date: 'Tue, 25 Feb 2014 12:28:54 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/operations/87ecdd4172597ae99ac4b06a0deab9e4')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>872c6309-016d-3f6d-a2fc-87faedfbb792</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control': 'no-cache',
          'content-length': '232',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '1462e7525b3837d1bdede4f666380127',
          date: 'Fri, 22 Nov 2013 05:22:14 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvmcustdata</Url><ServiceName>xplattestvmcustdata</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '1120',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'e9e05acc29cd37df8b2c9433f02e84e6',
          date: 'Fri, 22 Nov 2013 05:22:16 GMT'
        });
      return result;
    },
    function(nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmcustdata/deploymentslots/Production')
        .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", {
          'cache-control': 'no-cache',
          'content-length': '2445',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '23b475bd87883e1e9335b43052357f49',
          date: 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    }
  ]
];