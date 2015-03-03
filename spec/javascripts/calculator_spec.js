describe ("createTree", function() {
  it("should return a tree object", function() {
    expect(createTree()).toBeDefined();
  });
  it("should return tree with age 0 when created", function() {
    var tree=createTree();
    expect(tree.age).toEqual(0);
  });
  it("should have height 0 when created", function() {
    var tree=createTree();
    expect(tree.height).toEqual(0);
  });
  it("should have 0 oranges when created", function() {
    var tree=createTree();
    expect(tree.orangeCount).toEqual(0);
  });
  describe("grow", function() {

    xit("should increase the age of the tree by 1 year", function() {
      var tree=createTree();
      tree.grow();
      expect(tree.age).toEqual(1);
    });

    it("should increase the height of the tree by 10 inches", function() {
      var tree=createTree();
      tree.grow();
      expect(tree.height).toEqual(10);
    });
    it("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
      var tree=createTree();
      while (tree.age < FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.orangeCount).toBeGreaterThan(0);
    });
    it("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
      var tree=createTree();
      while (tree.age < (FRUIT_BEARING_AGE-1)) {
        tree.grow();
      }
      expect(tree.orangeCount).toEqual(0);
    });
  });

  describe ("die",function() {
    xit("should be alive when age <= MAX_AGE",function() {
      var tree=createTree();
      while (tree.age < (MAX_AGE-1)) {
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toEqual(true);
    });
    xit("should die when age > MAX_AGE",function() {
      var tree=createTree();
      while (tree.age < MAX_AGE) {
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toEqual(false);
    });
  });

  describe("dropOrange", function() {
    xit("should return the orange that is removed from oranges", function() {
      var tree=createTree();
      while (tree.age< FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.dropOrange()).toBeDefined();
    });
  });

  describe ("pickOrange", function() {
    xit("should return a orange object", function() {
      expect(pickOrange()).toBeDefined();
    });
    xit("should return an orange with a random diameter > 0", function() {
      var orange = pickOrange();
      expect(orange.diameter).toBeGreaterThan(0);
    });
  });

});



// describe('calculator', function() {
//     it('the calculator should add, subtract, multiply and divide', function() {
//         expect(calculator.add).toBeDefined();
//         expect(calculator.sub).toBeDefined();
//         expect(calculator.mul).toBeDefined();
//         expect(calculator.div).toBeDefined();
//     });
//     it("should add two numbers together", function() {
// +    expect(calculator.add(2,3)).toEqual(5);
// +  });
// +  it("should subtract two numbers together", function() {
// +    expect(calculator.sub(3,2)).toEqual(1);
// +  });
// +  it("should multiply two numbers together", function() {
// +    expect(calculator.mul(2,3)).toEqual(6);
// +  });
// +  it("should divide two numbers together", function() {
// +    expect(calculator.div(50,5)).toEqual(10);
// +  });
// });