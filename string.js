//convert anystring firstindex in uppercase
const jvascript =  str => str.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
console.log(jvascript( 'javascript string tips'))

// op = [ 'Javascript', 'String', 'Tips' ]