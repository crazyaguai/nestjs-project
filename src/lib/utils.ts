import uuidV1 = require('uuid/v1');

export function generateId() {
  return uuidV1();
}