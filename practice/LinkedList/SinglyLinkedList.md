# Node

연결 리스트를 구성하는 원소들로, 자신의 값과 다음 노드의 주소값을 프로퍼티로 갖고 있습니다.

## 접근자 메서드

### value() : number

getter 접근자 메서드로, 노드의 값을 반환합니다.

### next() : Node

getter 접근자 메서드로, 해당 노드의 다음 노드를 반환합니다. 다음 노드가 없는 경우 null을 반환합니다.

### next(Node) : undefined

setter 접근자 메서드로, 해당 노드의 다음 노드를 입력받은 노드로 설정합니다.

# SinglyLinkedList

단일 연결 리스트는 노드들의 연결로 구성된 자료구조입니다. 배열을 입력받아 배열의 각 요소를 값으로 갖는 노드들의 연결 리스트를 생성합니다. 입력을 받지 않거나 빈 배열을 받으면 비어있는 연결 리스트를 생성합니다.

배열이 아닌 값을 받으면 TypeError를 throw합니다.

## 접근자 메서드

### size() : number

getter 접근자 메서드로, 연결 리스트의 전체 길이를 반환합니다.

### head() : Node | undefined

getter 접근자 메서드로, 연결 리스트의 제일 앞에 있는 아이템을 반환합니다. 기존 연결 리스트는 변하지 않으며, 비어있는 연결 리스트의 경우 undefined를 반환합니다.

### tail() : Node | undefined

getter 접근자 메서드로, 연결 리스트의 제일 끝에 있는 아이템을 반환합니다. 기존 연결 리스트는 변하지 않으며, 비어있는 연결 리스트의 경우 undefined를 반환합니다.

```js
// 사용 예시
const linkedList = new SinglyLinkedList([1, 2, 3]);

const size = linkedList.size;
const head = linkedList.head;
const tail = linkedList.tail;
```

## 정적 메서드

### from(ArrayLike) : SinglyLinkedList

유사 배열 객체를 입력받아 해당 객체의 값을 value로 갖는 Node를 생성해 연결 리스트를 생성해 반환합니다.

## 프로토타입 메서드

### isEmpty() : boolean

연결 리스트가 비어있다면 true, 비어있지 않다면 false를 반환합니다.

### pushHead(Node)

연결 리스트의 앞에 노드를 추가합니다.

### pushTail(Node)

연결 리스트의 마지막에 노드를 추가합니다.

### pushAt(Node, index)

연결 리스트의 index번째 위치에 노드를 추가합니다. 해당 위치의 Node가 입력받은 Node가 되며, 기존에 있던 노드는 새로 추가된 노드의 next()가 됩니다.

index가 연결 리스트의 길이보다 크거나 같은 경우, 0보다 작은 경우(해당 index가 존재하지 않는 경우) ReferenceError를 throw합니다.

### popAt(index) : SinglyLinkedList

연결 리스트의 index번째 위치의 노드를 제거해 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.

### removeAt(index) : SinglyLinkedList

연결 리스트의 index번째 위치의 노드를 제거한 연결 리스트를 반환합니다. index가 유효하지 않은 경우 ReferenceError를 throw합니다.

### concat(SinglyLinkedList1, SinglyLinkedList2) : SinglyLinkedList

연결 리스트 2개를 인자로 받아 앞의 리스트의 마지막 Node의 next로 뒤의 리스트 첫 Node를 연결한 뒤 새로운 연결 리스트를 반환합니다.

이 때 인자로 받은 두 연결 리스트는 변하지 않습니다.

### forEach((Node, index, self) => { ... })

연결 리스트를 순회하며 callback의 코드 블록을 실행합니다. callback의 인수로 각 위치의 Node, index, self(연결 리스트 자기 자신)을 전달합니다.

### print()

연결 리스트를 순회하며 노드의 value를 출력합니다.
