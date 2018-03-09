var recipes= {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]= value;
  return object;
}
var Obj2 = Object.assign({}, obj);
function deleteFromObjectByKey(object, key){
  delete Obj2[key]
  return Obj2
}
