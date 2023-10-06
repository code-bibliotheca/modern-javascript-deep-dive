import SinglyLinkedList, { Node } from "./SinglyLinkedList.수종";

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
  test("3. from은 유사 배열 객체를 입력받아 해당 객체의 값을 value로 갖는 Node를 생성해 연결 리스트를 생성해 반환합니다.", () => {
    const arrayLike = {
      length: 3,
      0: 1,
      1: 3,
      2: 9,
      [Symbol.iterator]: function () {
        let idx = 0;
        return {
          next: () => {
            if (idx === this.length) return { done: true };
            const next = { value: this[idx], done: false };
            idx += 1;
            return next;
          },
        };
      },
    };
    const list = SinglyLinkedList.from([...arrayLike]);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(3);
    expect(list.tail.value).toBe(9);
    expect(list.tail.next).toBeNull();
  });
  test("4. concat은 연결 리스트 2개를 인자로 받아 앞의 리스트의 마지막 Node의 next로 뒤의 리스트 첫 Node를 연결한 뒤 새로운 연결 리스트를 반환합니다. 기존의 두 연결 리스트는 변하지 않습니다.", () => {
    const list1 = new SinglyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    list1.pushTail(node1);
    list1.pushTail(node2);
    const list2 = new SinglyLinkedList();
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    list2.pushTail(node3);
    list2.pushTail(node4);
    list2.pushTail(node5);

    const concatenatedList = SinglyLinkedList.concat(list1, list2);
    expect(concatenatedList.size).toBe(5);
    expect(concatenatedList.head.value).toBe(1);
    expect(concatenatedList.head.next.value).toBe(2);
    expect(concatenatedList.head.next.next.value).toBe(3);
    expect(concatenatedList.head.next.next.next.value).toBe(4);
    expect(concatenatedList.tail.value).toBe(5);
    expect(list1.head).toBe(node1);
    expect(list1.head.next).toBe(node2);
    expect(list1.tail.next).toBeNull();
    expect(list2.head).toBe(node3);
    expect(list2.tail).toBe(node5);
    expect(list2.tail.next).toBeNull();
  });
  test("5. isEmpty는 연결 리스트가 비어있다면 true, 비어있지 않다면 false를 반환합니다.", () => {
    const emptyList = new SinglyLinkedList();
    const nonEmptyList = new SinglyLinkedList([1, 2]);
    expect(emptyList.isEmpty()).toBe(true);
    expect(nonEmptyList.isEmpty()).toBe(false);
  });
  test("6. at은 연결 리스트의 index 번째 노드를 반환합니다. 만약 index가 유효하지 않다면 ReferenceError를 throw합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    list.pushTail(node1);
    list.pushTail(node2);
    list.pushTail(node3);
    expect(() => list.at(-1)).toThrowError(ReferenceError);
    expect(() => list.at(3)).toThrowError(ReferenceError);
    expect(list.at(0)).toBe(node1);
    expect(list.at(1)).toBe(node2);
    expect(list.at(2)).toBe(node3);
  });
  test("7. pushHead는 연결 리스트의 앞에 노드를 추가합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    list.pushHead(node1);
    expect(list.size).toBe(1);
    expect(list.head).toBe(node1);
    expect(list.tail).toBe(node1);
    const node2 = new Node(2);
    list.pushHead(node2);
    expect(list.size).toBe(2);
    expect(list.head).toBe(node2);
    expect(list.tail).toBe(node1);
  });
  test("8. pushTail은 연결 리스트의 마지막에 노드를 추가합니다.", () => {
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
  test("9. pushAt은 연결 리스트의 index번째 위치에 노드를 추가합니다. 유효하지 않은 index에 대해 ReferenceError를 throw합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    list.pushTail(node1);
    list.pushTail(node2);
    list.pushTail(node3);
    const insertingNode1 = new Node(18);
    expect(() => list.pushAt(insertingNode1, -1)).toThrowError(ReferenceError);
    expect(() => list.pushAt(insertingNode1, 3)).toThrowError(ReferenceError);
    // 맨 앞에 넣을 때
    list.pushAt(insertingNode1, 0);
    expect(list.head).toBe(insertingNode1);
    expect(list.at(1)).toBe(node1);
    // 맨 뒤에 넣을 때
    const insertingNode2 = new Node(28);
    list.pushAt(insertingNode2, 3);
    expect(list.tail).toBe(node3);
    expect(list.at(3)).toBe(insertingNode2);
    // 나머지 경우
    const insertingNode3 = new Node(999);
    list.pushAt(insertingNode3, 2);
  });
  test("10. popAt은 연결 리스트의 index번째 위치의 노드를 제거해 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    list.pushTail(node1);
    list.pushTail(node2);
    list.pushTail(node3);
    expect(() => list.popAt(-1)).toThrowError(ReferenceError);
    expect(() => list.popAt(3)).toThrowError(ReferenceError);
    const poppedNode = list.popAt(1);
    expect(poppedNode).toBe(node2);
    expect(list.size).toBe(2);
    expect(list.head).toBe(node1);
    expect(list.tail).toBe(node3);
    const anotherPoppedNode = list.popAt(1);
    expect(anotherPoppedNode).toBe(node3);
    expect(list.size).toBe(1);
    expect(list.head).toBe(node1);
    expect(list.tail).toBe(node1);
    const lastPoppedNode = list.popAt(0);
    expect(lastPoppedNode).toBe(node1);
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
  test("11. removeAt은 연결 리스트의 index번째 위치의 노드를 제거한 연결 리스트를 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.", () => {
    const list = new SinglyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    list.pushTail(node1);
    list.pushTail(node2);
    expect(() => list.removeAt(-1)).toThrowError(ReferenceError);
    expect(() => list.removeAt(2)).toThrowError(ReferenceError);
    const removedList = list.removeAt(1);
    expect(removedList.size).toBe(1);
    expect(removedList.head).toBe(node1);
    expect(removedList.tail).toBe(node1);
    const anotherRemovedList = removedList.removeAt(0);
    expect(anotherRemovedList.size).toBe(0);
    expect(anotherRemovedList.head).toBeNull();
    expect(anotherRemovedList.tail).toBeNull();
  });

  test("12. forEach는 연결 리스트를 순회하며 callback의 코드 블록을 실행합니다. callback의 인수로 각 위치의 Node, index, self(연결 리스트 자기 자신)을 전달합니다.", () => {
    const list1 = new SinglyLinkedList([1, 2, 3]);
    const values = [];

    list1.forEach((node) => {
      values.push(node.value);
    });
    expect(values).toEqual([1, 2, 3]);

    const list2 = new SinglyLinkedList();
    const mockCallback = jest.fn();

    list2.forEach(mockCallback);
    expect(mockCallback).not.toHaveBeenCalled();

    list2.pushTail(new Node(10));
    list2.forEach(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(expect.any(Node), 0, list2);
  });

  test("13. print는 연결 리스트를 순회하며 노드의 value를 출력합니다.", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});

    const list = new SinglyLinkedList([1, 2, 3]);
    list.print();

    expect(log).toHaveBeenCalledTimes(3);
    expect(log.mock.calls[0][0]).toBe(1);
    expect(log.mock.calls[1][0]).toBe(2);
    expect(log.mock.calls[2][0]).toBe(3);

    log.mockRestore();
  });
});
