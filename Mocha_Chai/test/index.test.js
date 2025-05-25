var { capitalizeText, createArray } = require('../index');
var assert = require("assert");
var expect = require("chai").expect;



// ======= Capitalize ===========
describe("capitalizeText", function () {

  // test that the function takes a string and returns a string
  it("should return a string type when input is a string", function () {

    assert.strictEqual(typeof capitalizeText("iti"), "string");
  });

  // test that the function capitalizes the string
  it("function takes a string and returns it capitalized", function () {
    expect(capitalizeText("iti")).to.equal("ITI");
  });

  //  test if the function takes a number it will throw type error
  it("should throw a TypeError if input is not a string", function () {
    expect(function () {
        capitalizeText(6)
    }).to.throw(TypeError, "parameter should be string");
  });

  //test that result is not 'hello'
  it("should not return 'hello' when input is 'iti'", function () {
    assert.notStrictEqual(capitalizeText("iti"), "hello");
  });

});



// input number 3 ==> output should be [0,1,2]

var num=0;
// describe("function test",function () {
  
// });

// ======Array ==========

 
describe("createArray", function () {
        // timeout(6000);

      beforeEach(function () {
        num++;
        // delay test
        //   setTimeout(test, 5000);
    })
//test that the return value of type array
  it("should  return an array", function () {
    // expect.strictEqual( )
   expect(createArray(num)).to.be.an("array");
  });

  it("should return an array of correct length", function () {
    expect(createArray(num).length).to.equal(num);
  });

//   test if we pass 3 it will return array of length 3 and test it's include 1

  it("should include 1 if input > 1", function () {
    if (num >1){
 expect( createArray(num)).to.include(1);
    }

  });

  //test that result is not 'hello'
  it.skip("pending", function () {
    
  });

});
