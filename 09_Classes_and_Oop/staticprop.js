class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return `1817`
    }

}
const Abhi = new user("Virat")
console.log(Abhi.createId());

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ios = new Teacher("ios", "iphone@gmail.com")
ios.logMe();