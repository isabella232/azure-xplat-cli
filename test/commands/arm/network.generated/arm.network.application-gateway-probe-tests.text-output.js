﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-application-gateway-probe-tests-generated',
  groupName = 'xplat-test-probe',
  location;
var index = 0;

var probes = {
  protocol: 'Http',
  protocolNew: 'Https',
  host: 'create',
  hostNew: '',
  path: '/createpath',
  pathNew: '/setpath',
  interval: '1',
  intervalNew: '86400',
  timeout: '86400',
  timeoutNew: '1',
  unhealthyThreshold: '20',
  unhealthyThresholdNew: '1',
  pickHostNameFromBackendHttpSettings: 'false',
  pickHostNameFromBackendHttpSettingsNew: 'true',
  minServers: '2',
  minServersNew: '0',
  body: 'body',
  bodyNew: '',
  statusCodes: '200,202',
  statusCodesNew: '',
  name: 'probeName'
};

probes.virtualNetworkName = 'virtualNetworkName';
probes.subnetName = 'subnetName';
probes.publicIPAddressName = 'publicIPAddressName';
probes.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'applicationGatewayName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = probes.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        probes.location = location;
        probes.name = suite.isMocked ? probes.name : suite.generateId(probes.name, null);
        probes.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(applicationGateway, groupName);
                  generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    done();
                  });
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('probes', function () {
      this.timeout(testTimeout);
      it('create should create probes', function (done) {
        var cmd = 'network application-gateway probe create -g {group} -n {name} --protocol {protocol} --host-name {host} --path {path} --interval {interval} --timeout {timeout} --unhealthy-threshold {unhealthyThreshold} --pick-host-name {pickHostNameFromBackendHttpSettings} --min-servers {minServers} --health-response-body {body} --status-codes {statusCodes} --gateway-name {applicationGatewayName}'.formatArgs(probes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display probes details', function (done) {
        var cmd = 'network application-gateway probe show -g {group} -n {name} --gateway-name {applicationGatewayName}'.formatArgs(probes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update probes', function (done) {
        var cmd = 'network application-gateway probe set -g {group} -n {name} --protocol {protocolNew} --host-name {hostNew} --path {pathNew} --interval {intervalNew} --timeout {timeoutNew} --unhealthy-threshold {unhealthyThresholdNew} --pick-host-name {pickHostNameFromBackendHttpSettingsNew} --min-servers {minServersNew} --health-response-body {bodyNew} --status-codes {statusCodesNew} --gateway-name {applicationGatewayName}'.formatArgs(probes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all probes in resource group', function (done) {
        var cmd = 'network application-gateway probe list -g {group} --gateway-name {applicationGatewayName}'.formatArgs(probes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete probes', function (done) {
        var cmd = 'network application-gateway probe delete -g {group} -n {name} --gateway-name {applicationGatewayName} --quiet'.formatArgs(probes);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway probe show -g {group} -n {name} --gateway-name {applicationGatewayName}'.formatArgs(probes);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network application-gateway probe list -g {group} --gateway-name {applicationGatewayName}'.formatArgs(probes);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});