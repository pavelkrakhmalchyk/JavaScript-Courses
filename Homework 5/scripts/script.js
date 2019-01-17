function Plant(name, age, placeOfGrow){
  var name = name;
  var age = age;
  var placeOfGrow = placeOfGrow;

  this.getName = function(){
    return name;
  }

  this.setName = function(value){
    name = value;
  }

  this.getAge = function(){
    return age;
  }

  this.setAge = function(value){
    if (value > 0){
      age = value;
    }
  }

  this.getPlaceOfGrow = function(){
    return placeOfGrow;
  }

  this.setPlaceOfGrow = function(value){
    placeOfGrow = value;
  }

  this.toString = function(){
    return 'Name: ' + name + '\nAge: ' + age + '\nPlaceOfGrow: ' + placeOfGrow;
  }
}


function Fern(name, age, placeOfGrow, leafShape){
  Plant.apply(this, arguments);
  var leafShape = leafShape;

  this.getLeafShape = function(){
    return leafShape;
  }

  this.setLeafShape = function(value){
    leafShape = value;
  }

  parentToString = this.toString;
  this.toString = function(){
    return parentToString() + '\nLeaf shape: ' + leafShape;
  }
}


function Spruce(name, age, placeOfGrow, needleShape){
  Plant.apply(this, arguments);
  var needleShape = needleShape;

  this.getNeedleShape = function(){
    return needleShape;
  }

  this.setNeedleShape = function(value){
    needleShape = value;
  }

  parentToString = this.toString;
  this.toString = function(){
    return parentToString() + '\nNeedle shape: ' + needleShape;
  }
}


function onCreateSpruce(){
  var spruce = new Spruce();

  spruce.setName(document.getElementById('name').value);
  spruce.setAge(document.getElementById('age').value);
  spruce.setPlaceOfGrow(document.getElementById('placeOfGrow').value);
  spruce.setNeedleShape(document.getElementById('needleShape').value);

  alert(spruce.toString());
}

