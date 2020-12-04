import isCamelCase from "../isCamelCase";
import decipher from "../decipher";

// 驼峰命名法测试用例
describe("test", () => {
  it("match", () => {
    expect(isCamelCase()).toBe(false);
  });
});

describe("test0", () => {
  it("match", () => {
    let param = "";
    expect(isCamelCase(param)).toBe(false);
  });
});

describe("test1", () => {
  it("match", () => {
    let param = "";
    expect(isCamelCase(param)).toBe(false);
  });
});

describe("test2", () => {
  it("match", () => {
    let param = "camel";
    expect(isCamelCase(param)).toBe(false);
  });
});

describe("test3", () => {
  it("match", () => {
    let param = "PascalCase";
    expect(isCamelCase(param)).toBe(false);
  });
});

describe("test4", () => {
  it("match", () => {
    let param = "camelCase";
    expect(isCamelCase(param)).toBe(true);
  });
});

describe("test5", () => {
  it("match", () => {
    let param = "camelCaseCaseCase";
    expect(isCamelCase(param)).toBe(true);
  });
});

describe("test6", () => {
  it("match", () => {
    let param = "camelCaseR";
    expect(isCamelCase(param)).toBe(false);
  });
});

// 栅格密码翻译测试用例
describe("decipher", () => {
  it("match", () => {
    const origin = "i3aasmc5gbtgf3aqw3yvt0louehmzs4ywioaqscvrgytn";
    expect(decipher(origin)).toBe("iambatman");
  });
});
