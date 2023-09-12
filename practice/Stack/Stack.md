# Stack

스택은 어떠한 값도 인자로 받지 않으며 비어있는 인스턴스를 생성합니다.

## push(item)

스택의 맨 위에 item을 넣습니다.

## isEmpty()

스택이 비어있다면 true, 아니라면 false를 반환합니다.

## pop()

마지막 item을 반환합니다.

- 스택이 비어있다면 RangeError를 반환합니다.

## peek()

마지막 item을 return해 확인합니다.

- pop과 달리 마지막 item을 스택에서 빼내지 않습니다.
- 스택이 비어있는 경우 undefined를 반환합니다.

## from(array)

배열을 입력받아 순서대로 stack에 넣습니다.

- 배열 요소들 중 비어있거나 undefined, null 값을 갖는 아이템은 저장하지 않습니다.

## print()

배열의 맨 위 item부터 바닥까지 모든 item을 순서대로 콘솔에 출력합니다.
