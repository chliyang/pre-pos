"use strict";

function countSameElements(collection) {
  const { keyList, countList } = getLists();

  const result = [];
  keyList.map((element, index) => {
    result.push({ key: element, count: countList[index] });
  });
  return result;

  function getLists() {
    const keyList = [];
    const countList = [];
    collection.forEach((element) => {
      if (keyList.includes(element.charAt(0))) {
        countList[keyList.indexOf(element)] += getCount(element);
      } else {
        keyList.push(element.charAt(0));
        countList.push(getCount(element));
      }
    });
    return { keyList, countList };
  }
}

function getCount(element) {
  if (element.length === 1) {
    return 1;
  }
  return Number(element.replace(/[^0-9]/gi, ""));
}
