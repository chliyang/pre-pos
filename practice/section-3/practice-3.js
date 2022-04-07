"use strict";

function createUpdatedCollection(collectionA, objectB) {
  const summaryCollection = countSameElements(collectionA);
  return summaryCollection.map((element) =>
    objectB.value.includes(element.key)
      ? { key: element.key, count: getCount(element.count) }
      : element
  );
}

function getCount(number) {
  return number - parseInt(number / 3);
}

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
