var engine = require("./engine.js");

describe('simple test', function () {

    it('static text', function () {
        engine.waitFor(by.id('pageTitle'));
        expect(element(by.id('pageTitle')).getText()).toEqual('Static Page Title');
    });

    it('dynamic text', function () {
        engine.waitFor(by.binding('dynamicPageTitle'));
        expect(element(by.binding('dynamicPageTitle')).getText()).toEqual('Dynamic Page Title');
    });

    it('json one object', function () {
        engine.waitFor(by.binding('data1'));
        expect(element(by.binding('data1')).getText()).toEqual('Data from MOCK Json file');
    });

    it('json list of objects', function () {
        expect(element.all(by.repeater('item in listData')).get(0).toString())
            .toEqual(({"id":1, "name":"Lorem p"}).toString());
    });
});