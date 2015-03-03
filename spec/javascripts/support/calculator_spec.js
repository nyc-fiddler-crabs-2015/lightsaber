describe('calculator', function() {
    it('the calculator should add, subtract, multiply and divide', function() {
        expect(calculator.add).toBeDefined();
        expect(calculator.sub).toBeDefined();
        expect(calculator.mul).toBeDefined();
        expect(calculator.div).toBeDefined();
    });
    it("should add two numbers together", function() {
+    expect(calculator.add(2,3)).toEqual(5);
+  });
+  it("should subtract two numbers together", function() {
+    expect(calculator.sub(3,2)).toEqual(1);
+  });
+  it("should multiply two numbers together", function() {
+    expect(calculator.mul(2,3)).toEqual(6);
+  });
+  it("should divide two numbers together", function() {
+    expect(calculator.div(50,5)).toEqual(10);
+  });
});