"use strict";

function countSameElements(collection) {
  const keyList = [];
  const countList = [];
  collection.forEach((element) => {
    if (keyList.includes(element)) {
      countList[keyList.indexOf(element)]++;
    } else {
      keyList.push(element);
      countList.push(1);
    }
  });

  const result = [];
  keyList.map((element, index) => {
    result.push({ key: element, count: countList[index] });
  });
  return result;
}
