언뜻 배열로 착각하고 reverse같은 메서드들을 시도해볼 수 있지만, List의 형태로 주어지기때문에 배열에서 사용하는 메서드들을 사용할 수 없습니다.
​
문제 설명에서, 각 List가 어떻게 구성되는지 알수있는 함수가 주어집니다.
​
``` javascript
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}
```
​
이를 이용해, l1과 l2를 앞에서부터 더해나가서, 정답 List의 Next에 하나씩 붙여줍니다.
​
​
​