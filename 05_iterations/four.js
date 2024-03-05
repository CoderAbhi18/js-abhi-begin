const myObject = {
    js: 'javascript',
    cpp: 'c++',
    R: 'ruby'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    
}

const programming = ["js", "java", "c"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India"),
map.set('CH', "China"),
map.set('FR', "France")

for (const key in map) {
    console.log(key);
}