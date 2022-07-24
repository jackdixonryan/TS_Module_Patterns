
const Singleton = require("../build/Singleton").default;

describe("The Singleton", () => {

  let instanceOfSingleton;

  test("It can be instantiated.", () => {
    expect(() => {
      instanceOfSingleton = new Singleton();
    }).not.toThrowError();
  });

  test("It can be lazily instantiated.", () => {
    const instance = instanceOfSingleton.getInstance();
    expect(instance instanceof Singleton).toBe(true);
  });

  test("It can only be instantiated once.", () => {
    expect(() => {
      new Singleton();
    }).toThrow("ALREADY_INSTANTIATED");
  });
});