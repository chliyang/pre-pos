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
        countList[keyList.indexOf(element.charAt(0))] += getPlusCount(element);
      } else {
        keyList.push(element.charAt(0));
        countList.push(getPlusCount(element));
      }
    });
    return { keyList, countList };
  }
}

function getPlusCount(element) {
  if (element.length === 1) {
    return 1;
  }
  return Number(element.replace(/[^0-9]/gi, ""));
}
