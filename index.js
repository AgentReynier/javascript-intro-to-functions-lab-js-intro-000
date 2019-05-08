function shout(string) {
  return string.toUpperCase()
  }


function whisper(string) {
  return string.toLowerCase()
  }

function logShout(string) {
  console.log(string.toUpperCase())
  }

function logWhisper(string) {
  console.log(string.toLowerCase())
  }

function sayHiToGrandma(string) {

  var uppercase = 'HELLO'
  var lowercase = 'hello'
  var iLoveYou = 'I love you, Grandma.'

  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  }

  if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }

  if (string = iLoveYou) {
    return "I love you, too."
  }

}
