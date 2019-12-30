
import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

//BUNDLE IDs
const iOSBundleIds = {
    dev: 'com.nex_crypto_traning_mobile_app',
    production: 'com.nex_crypto_traning_mobile_app',
}
const androidVersionNameSuffix = {
    debug: 'debug',
    staging: 'staging',
    production: '0',
}

// BUILD TYPES
const dev = {};
dev.buildMode = 'DEV';
dev.serverSchema = 'http';
dev.apiPrefix = 'api';
dev.uploadPrefix = 'uploads';
dev.serverHost = 'doan.tecconect.top';

const staging = {};
staging.buildMode = 'STAGING';
staging.serverSchema = 'http';
staging.apiPrefix = 'api';
staging.uploadPrefix = 'uploads';
staging.serverHost = 'doan.tecconect.top';

const production = {};
production.buildMode = 'PRODUCTION';
production.serverSchema = 'https';
production.apiPrefix='api';
production.uploadPrefix='uploads';
production.serverHost = 'doan.tecconect.top';

//
export const buildApp = (build) => {
    switch (build.buildMode) {
        case dev.buildMode:
            return dev;
        case production.buildMode:
            return production;
        case staging.buildMode:
            return staging;
        default:
            return dev;
    }
}

export const getBuildType = () => {
    if (Platform.OS === 'ios') {
        if (DeviceInfo.getBundleId() == iOSBundleIds.production){
            return production
        } else {
            return dev
        }
    } else if (Platform.OS === 'android') {
        const version = DeviceInfo.getVersion();
        if(version.endsWith(androidVersionNameSuffix.debug)){
            return dev
        } else if(version.endsWith(androidVersionNameSuffix.staging)){
            return staging
        } else {
            return production
        }
    }
}

// const currentBuild = dev;
// const currentBuild = staging;
// const currentBuild = production;
const currentBuild = getBuildType();

module.exports = {
    buildTypes: {
        dev, staging, production,
        isProduction: (currentBuild.buildMode == production.buildMode),
        isStaging: (currentBuild.buildMode == staging.buildMode),
        isDevelop: (currentBuild.buildMode == dev.buildMode),
    },
    build: buildApp(currentBuild)
};