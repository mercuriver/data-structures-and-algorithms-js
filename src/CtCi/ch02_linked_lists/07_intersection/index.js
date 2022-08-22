const isIntersection = (firstList, secondList) => {
  let firstPointer = firstList.head;

  while (firstPointer) {
    let secondPointer = secondList.head;

    // JS는 주소값을 사용할 수 없기 때문에, Node class 내 생성자에서 부여하는 Symbol type 'uid'로 대체
    const addr = firstPointer.uid;

    while (secondPointer) {
      if (addr === secondPointer.uid) {
        return secondPointer;
      }
      secondPointer = secondPointer.next;
    }
    firstPointer = firstPointer.next;
  }

  return undefined;
};

export default isIntersection;
