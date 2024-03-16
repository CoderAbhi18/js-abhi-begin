class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Student extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ABHI = new Student("ABHI", "ABHI@student.com", "1817")
ABHI.logMe()

const LegendABHI = new User("LegendABHI")
LegendABHI.logMe()

console.log(ABHI instanceof User);