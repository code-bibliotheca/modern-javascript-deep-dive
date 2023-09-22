import Stack from "./Stack";

describe("Stack", () => {
  let stack;
  let log;

  beforeAll(() => {
    log = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    log.mockRestore();
  });

  beforeEach(() => {
    stack = new Stack();
  });

  test("push는 스택의 맨 위에 item을 넣습니다.", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test("isEmpty는 스택이 비어있다면 true, 아니라면 false를 반환합니다.", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("pop은 스택의 마지막 item을 반환합니다.", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("pop은 스택이 비어있다면 RangeError를 반환합니다.", () => {
    expect(() => {
      stack.pop();
    }).toThrow(RangeError);
  });

  test("peek은 마지막 item을 스택에서 빼내지 않고 확인합니다.", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBeUndefined();
  });

  test("from은 비어있거나 undefined, null이 아닌 요소들만 배열로부터 저장해 새로운 stack을 생성합니다.", () => {
    const stack = Stack.from([0, 1, null, 3, , undefined]);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(0);
    expect(() => {
      stack.pop();
    }).toThrow(RangeError);
  });

  test("print는 맨 위 item부터 바닥까지 모든 item을 순서대로 콘솔에 출력합니다.", () => {
    const stack = Stack.from([2, 6, -3, 12]);
    stack.print();

    expect(log).toHaveBeenCalledTimes(4);
    expect(log.mock.calls[0][0]).toBe(12);
    expect(log.mock.calls[1][0]).toBe(-3);
    expect(log.mock.calls[2][0]).toBe(6);
    expect(log.mock.calls[3][0]).toBe(2);
  });
});
