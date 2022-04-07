"use strict";

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((element) =>
    objectB.value.includes(element.key)
      ? { key: element.key, count: getCount(element.count) }
      : element
  );
}

function getCount(number) {
  return number - parseInt(number / 3);
}
