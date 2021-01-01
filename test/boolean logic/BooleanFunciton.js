const { or, and, not, } = require('../../src/boolean logic/BooleanFunction')
const nand = require('../../src/boolean logic/nand');
const { expect } = require("chai")

describe('basic logic', () => {
  describe('test OR', () => {
    it('0 or 0 => 0', () => {
      expect(or(0,0)).equal(0);
    });
    it('0 or 1 => 1', () => {
      expect(or(0,1)).equal(1);
    });
    it('1 or 0 => 1', () => {
      expect(or(1,0)).equal(1);
    });
    it('1 or 1 => 1', () => {
      expect(or(1,1)).equal(1);
    });
  })
  describe('test AND', () => {
    it('0 and 0 => 0', () => {
      expect(and(0,0)).equal(0);
    });
    it('0 and 1 => 1', () => {
      expect(and(0,1)).equal(0);
    });
    it('1 and 0 => 1', () => {
      expect(and(1,0)).equal(0);
    });
    it('1 and 1 => 1', () => {
      expect(and(1,1)).equal(1);
    });
  })
  describe('test NOT', () => {
    it('not 0 => 1', () => {
      expect(not(1)).equal(0);
    });
    it('not 1 => 0', () => {
      expect(not(0)).equal(1);
    });
  });

  describe('test NAND', () => {
    describe('NAND or', () => {
      it('0 or 0 = 0', () => {
        expect(or(0,0), nand.nandOr(0,0));
      });
      it('0 or 1 = 1', () => {
        expect(or(0,1), nand.nandOr(0,1));
      });
      it('1 or 0 = 1', () => {
        expect(or(1,0), nand.nandOr(1,0));
      });
      it('1 or 1 = 1', () => {
        expect(or(1,1), nand.nandOr(1,1));
      });
    });

    describe('NAND and', () => {
      it('0 and 0 => 0', () => {
        expect(and(0,0)).equal(nand.nandAnd(0));
      });
      it('0 and 1 => 0', () => {
        expect(and(0,1)).equal(nand.nandAnd(0));
      });
      it('1 and 0 => 0', () => {
        expect(and(1,0)).equal(nand.nandAnd(0));
      });
      it('1 and 1 => 1', () => {
        expect(and(1,1)).equal(nand.nandAnd(1));
      });
    })

    describe('NAND not', () => {
      it('not 0 => 1', () => {
        expect(not(1)).equal(nand.nandNot(1));
      });
      it('not 1 => 0', () => {
        expect(not(0)).equal(nand.nandNot(0));
      });
    });

  })
})