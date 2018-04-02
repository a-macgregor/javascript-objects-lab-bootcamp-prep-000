var recipes = new Object({});

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function deleteFromObjectByKey(obj, key) {
  var Recipes = { obj: key };
  var newRecipes = Object.assign({}, obj);
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(obj, key, value) {
  delete recipes[key];
  return recipes;
}