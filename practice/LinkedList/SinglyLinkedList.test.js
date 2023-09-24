import SinglyLinkedList, { Node } from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
  test("1-1. 배열을 입력받아 배열의 각 요소를 값으로 갖는 노드들의 연결 리스트를 생성합니다.", () => {
    const list = new SinglyLinkedList([1, 2, 3]);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
  });

  test("1-2. 초기화 값을 넣어주지 않은 경우 비어있는 연결 리스트를 생성합니다.", () => {
    const emptyList = new SinglyLinkedList();
    expect(emptyList.size).toBe(0);
    expect(emptyList.head).toBeNull();
    expect(emptyList.tail).toBeNull();
  });

  test("1-3. 배열이 아닌 값을 넣어준 경우 TypeError를 throw합니다.", () => {
    expect(() => {
      new SinglyLinkedList(1);
    }).toThrowError(TypeError);
    expect(() => {
      new SinglyLinkedList("1");
    }).toThrowError(TypeError);
    expect(() => {
      new SinglyLinkedList(true);
    }).toThrowError(TypeError);
    expect(() => {
      new SinglyLinkedList(null);
    }).toThrowError(TypeError);
    expect(() => {
      new SinglyLinkedList({});
    }).toThrowError(TypeError);
    expect(() => {
      new SinglyLinkedList({ length: 1, 0: "abc" });
    }).toThrowError(TypeError);
  });

  test("2. size, head, tail은 연결 리스트의 전체 길이, 제일 앞의 노드, 제일 끝의 노드를 반환합니다.", () => {
    const list = new SinglyLinkedList([1, 2, 3]);
    expect(list.size).toBe(3);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
  });

  test("3. isEmpty는 연결 리스트가 비어있다면 true, 비어있지 않다면 false를 반환합니다.", () => {
    const emptyList = new SinglyLinkedList();
    const nonEmptyList = new SinglyLinkedList([1, 2]);
    expect(emptyList.isEmpty()).toBe(true);
    expect(nonEmptyList.isEmpty()).toBe(false);
  });

  test("4. from은 유사 배열 객체를 입력받아 해당 객체의 값을 value로 갖는 Node를 생성해 연결 리스트를 생성해 반환합니다.", () => {
    // TODO
  });

  test("5. pushHead는 연결 리스트의 앞에 노드를 추가합니다.", () => {
    // TODO
  });

  test("6. pushTail은 연결 리스트의 마지막에 노드를 추가합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    list.pushTail(node1);

    expect(list.size).toBe(1);
    expect(list.head).toBe(node1);
    expect(list.tail).toBe(node1);

    const node2 = new Node(2);
    list.pushTail(node2);

    expect(list.size).toBe(2);
    expect(list.head).toBe(node1);
    expect(list.tail).toBe(node2);
  });

  test("7-1. pushAt은 연결 리스트의 index번째 위치에 노드를 추가합니다.", () => {
    // TODO
  });

  test("7-2. index가 연결 리스트의 길이보다 크거나 같은 경우, 0보다 작은 경우(해당 index가 존재하지 않는 경우) ReferenceError를 throw합니다.", () => {
    // TODO
  });

  test("8. popAt은 연결 리스트의 index번째 위치의 노드를 제거해 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.", () => {
    // TODO
  });

  test("9. removeAt은 연결 리스트의 index번째 위치의 노드를 제거한 연결 리스트를 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.", () => {
    // TODO
  });

  test("10-1. concat은 연결 리스트 2개를 인자로 받아 앞의 리스트의 마지막 Node의 next로 뒤의 리스트 첫 Node를 연결한 뒤 새로운 연결 리스트를 반환합니다.", () => {
    // TODO
  });

  test("10-2. concat된 이후 인자로 받은 두 연결 리스트는 변하지 않습니다.", () => {
    // TODO
  });

  test("11. forEach는 연결 리스트를 순회하며 callback의 코드 블록을 실행합니다. callback의 인수로 각 위치의 Node, index, self(연결 리스트 자기 자신)을 전달합니다.", () => {
    // TODO
  });
});
