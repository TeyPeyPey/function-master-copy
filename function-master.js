//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I:object
O:values in an array
C:
E:
*/ 
function objectValues(object) {
   let output = [];
   for (let key in object){
    output.push(object[key]);
   }
   return output;
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let output = '';
for(let key in object){
    output += key + ' '
}
return output.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: object
O: all its string values separated in a string, each separated by a space
C:
E:
*/ 
function valuesToString(object) {
  let output = '';
  for (let key in object){
    if(typeof object[key] === 'string') {
        output += object[key] + ' '
    }
  }
return output.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
        if (Array.isArray(collection)){
            return 'array';
     } else if (typeof collection === 'object'){
          return 'object';
        }
    };

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)
};

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' ');
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
    }


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var newName = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    return 'Welcome' + ' ' + newName + '!';
};
console.log(welcomeMessage({name: 'Teyonce'}));
console.log(welcomeMessage({name: 'bert'}));
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var newName = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    var newSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1).toLowerCase(); 
return newName + ' ' + 'is a' + ' ' + newSpecies
};
console.log(profileInfo({name: 'Rex', species: 'cat'}));
console.log(profileInfo({name: 'cat', species: 'bird'}));

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(Array.isArray(object.noises) && object.noises.length > 0){
       return object.noises.join(' ');
     } else if (Array.isArray(object.noises)) {
     return 'there are no noises';
   } else {
     return 'there are no noises';
   }
   };

console.log(maybeNoises({noises:['bark', 'woof', 'chirp', 'thump']}));
console.log(maybeNoises([]));
console.log(maybeNoises({}));

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var answer = string.split(' ').includes(word);
    return answer;
  };
  console.log(hasWord('hello guys please help', 'help'));
  console.log(hasWord('this is kinf of crazy', 'kind'));


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
     if (typeof object === 'array'){
         object.friends = [];
    } object.friends.push(name);
        return object;
}
console.log(addFriend('Nosy', {friends: ['pete', 'amy', 'nope']}));
console.log(addFriend('hen', {friends: []}));


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Array.isArray(object.friends)) {
        return object.friends.includes(name);
    } else {
        return false;
    }
}
console.log(isFriend('teyonce', {friends: ['teyonce', 'pete', 'nope']}));
console.log(isFriend('nope', {friends: ['carrie', 'ben', 'chunky']} ));


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*var data = [
    {name: "Jimmy", friends:["Sara", "Liza"]},
    {name: "Bob", friends:[]},
    {name: "Liza", friends: ["Jimmy"]},
    {name: "Sara", friends: ["Jimmy"]}
  ];
  */

function nonFriends(name, array) {
    placeHolder = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
            if (!array[i].friends.includes(name)){
                placeHolder.push(array[i].name);
            }
}
    }
return placeHolder;
};
console.log(nonFriends('Jimmy',[
    {name: "Jimmy", friends:["Sara", "Liza"]},
    {name: "Bob", friends:[]},
    {name: "Liza", friends: ["Jimmy"]},
    {name: "Sara", friends: ["Jimmy"]}
  ]));



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++) {
    if (object.hasOwnProperty(array[i])) {
        delete object[array[i]]
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
        var output = [];
          for (var i = 0; i < array.length; i++) {
            if (!output.includes(array[i])) {
              output.push(array[i])
            }
          }
          return output;
        }
        
        console.log(dedup([10, 30, 30, 50, 60, 70, 70]));


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}