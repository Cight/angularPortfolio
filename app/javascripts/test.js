'use strict';

describe('myApp.home module', function () {

    beforeEach(module('myApp.home'));

    describe('home controller', function () {

        it('should ....', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl');
            expect(view1Ctrl).toBeDefined();
        }));

    });
});

describe('myApp.about module', function () {

    beforeEach(module('myApp.about'));

    describe('about controller', function () {

        it('should ....', inject(function ($controller) {
            //spec body
            var view2Ctrl = $controller('View2Ctrl');
            expect(view2Ctrl).toBeDefined();
        }));

    });
});