"use strict";

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((item) => collectionB.flat(1).includes(item));
}
