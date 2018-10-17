# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###
This repository is for the kliq android app tests.


### How do I get set up? ###
Install the Kliq apk into your emulator.
Open up this project on one of your text editors.

Thefile "DesiredCapabilities.js" includes all the desired capabilities in order to get the app started on your emulator,
make sure the capabilities match your emulator.

Create a package.json file and add the dependencies below
"assert": "^1.4.1",
"chai": "^4.1.2",
"mocha": "^5.0.0",
"webdriverio": "^4.12.0"

make sure the below dependencies are installed using "npm install"

"test": "mocha --timeout 6000000 tests/login.test && mocha --timeout 6000000 tests/post-feed.test && mocha --timeout 6000000 tests/people.test && mocha --timeout 6000000 tests/chats.test && mocha --timeout 6000000 tests/happening.test && mocha --timeout 6000000 tests/jobs.test && mocha --timeout 6000000 tests/market-place.test && mocha --timeout 6000000 tests/settings.test"
add the above mentioned script into your package.json. This script will run all your tests.

Your package.json file would look something like this

{
  "name": "kliq-android-test",
  "version": "1.0.0",
  "description": "android tests",
  "main": "test.js",
  "dependencies": {
    "appium": "^1.9.0",
    "webdriverio": "^4.13.2"
  },
  "devDependencies": {
    "assert": "^1.4.1",
    "chai": "^4.1.2",
    "mocha": "^5.0.0",
    "webdriverio": "^4.12.0"
  },
  "scripts": {
    "test": "mocha --timeout 6000000 tests/login.test && mocha --timeout 6000000 tests/post-feed.test && mocha --timeout 6000000 tests/people.test && mocha --timeout 6000000 tests/chats.test && mocha --timeout 6000000 tests/happening.test && mocha --timeout 6000000 tests/jobs.test && mocha --timeout 6000000 tests/market-place.test && mocha --timeout 6000000 tests/settings.test"

  }

The command to run the tests will be "npm run test


### Contribution guidelines ###

In order to continue writing tests, create your test.js file inside the tests folder. Make sure to include .test in the extension.
Example:- "xample-tests.test.js"
in order to run your new test suite, you need to include this file in script which is in the package.json file.

### Who do I talk to? ###
Contact your Tecnology supervisor if there is anything else you need clarified.