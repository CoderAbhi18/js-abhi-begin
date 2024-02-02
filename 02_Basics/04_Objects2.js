// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "Abhi"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser  = {
    email: "abhi@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Abhijit",
            lastName: "Salunkhe"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

