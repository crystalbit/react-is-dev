const expect = require('chai').expect;
const isDev = require('./');

const mocks = {};
mocks.React = {
    dev: {
        createElement: () => ({ _self: true })
    },
    prod: {
        createElement: () => ({ })
    }
};

describe('The library test', () => {
    it('check react development mock', () => {
        expect(isDev(mocks.React.dev)).to.be.true;
    });

    it('check react production mock', () => {
        expect(isDev(mocks.React.prod)).to.be.false;
    });
    it('check react development mock - cached', () => {
        expect(isDev(mocks.React.dev)).to.be.true;
    });

    it('check react production mock - cached', () => {
        expect(isDev(mocks.React.prod)).to.be.false;
    });

});
