exports.config = {

    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    rootElement: '[ng-app]',

    specs: [
        'app.spec.js'
    ],

    multiCapabilities: [
        //{browserName: 'firefox'},
        {browserName: 'chrome'}
    ],

    onPrepare: function () {
        browser.get('http://localhost:63342/protractor/app/index.html');

        // mock
        browser.addMockModule('httpMocker', function() {
            angular.module('httpMocker', ['ngMockE2E'])
                .run(function($httpBackend) {
                    $httpBackend.whenGET('data1.json').respond({"name": "Data from MOCK Json file"});
                    $httpBackend.whenGET('data2.json').passThrough();
                })
        });
    }
};