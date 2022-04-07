"use strict";

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((element) =>
    objectB.value.includes(element.key)
      ? { key: element.key, count: element.count - 1 }
      : element
  );
}
