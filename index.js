var recipes = new Object({});

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function deleteFromObjectByKey(obj, key) {
  var newRecipes = Object.assign({}, obj);
  delete newRecipes.obj;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete recipes[key];
  return recipes;
}