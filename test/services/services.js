const supertest = require('supertest');

const app = require('../../src');
const UserService = require('../../src/services/user');

const api = supertest(app);
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);
module.exports = () => {
  /* describe('Number', function() {
    it('Should return a string value', async function() {
      await UserService.test(1).then(function(data) {
        expect(data).to.be.equal(2);
      });
    });
  }); */
  describe('create', function() {
    it('Should return a ok', async function() {
      const user = {
        email: 'john.louis@gmail.com',
        password: 'p4ssw0rd',
        profileId: '1',
      };
      await UserService.create(user).then(function(data) {
        console.log('dataaaaaaaaaaaaaaaaaaaaaaaa', data);
      });
    });
  });
  it('should return positive value of given positive number', function() {
    expect(Math.abs(3)).to.be.equal(3);
  });
  /*describe('delete', function() {
    it('Should return a ok', async function() {
      const id = 4;
      await UserService.delete(id).then(function(data) {
        console.log(data);
      });
    });
  });*/
};
