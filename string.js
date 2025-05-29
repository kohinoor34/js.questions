// 1. convert anystring firstindex in uppercase
const jvascript =  str => str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
console.log(jvascript( 'javascript string tips'))

// op = [ 'Javascript', 'String', 'Tips' ]


//2.remove unwanted space

const trimmed = "   hellow everyone  "
console.log(trimmed);
console.log(trimmed.trim());



