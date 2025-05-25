var { sum,positive } = require('../index');


describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  // at before all assign pos vals with array of positive numbers,
   // and assign negative vals with negative array of numbers,

  // assign vals to pos_vals.concat(neg_vals);

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
  beforeAll(function () {
    pos_vals=[12,4,20,2];
    neg_vals=[-12,-4,-20,-2];
    vals=pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);

//     sum_of_vals=0;
// for (let val of vals) {
//   sum_of_vals += val;

// }
    
  })

  // at before each console.log all vals
  beforeEach(function () {
    console.log("all vals",vals);

  })
 
  // at after each console.log done
  afterEach(function () {
    console.log("done");
  })

  // at after all set all variables to 0

  afterAll(function () {
  pos_vals=0;
  neg_vals=0;
  vals=0;
  sum_of_vals=0;
  })

  it("sum function should equal to sum of the values", () => {
expect(sum(vals)).toBe(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
   expect(positive(vals)).toEqual(pos_vals);

   

  });
});





