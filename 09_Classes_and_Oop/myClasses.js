class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const Abhi = new User("Abhi", "Abhi@gmail.com", "1817")

console.log(Abhi.encryptPassword());
console.log(Abhi.changeUsername());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chaha = new User("chaha", "chaha@gmail.com", "1817")
console.log(chaha.encryptPassword());
console.log(chaha.changeUsername());