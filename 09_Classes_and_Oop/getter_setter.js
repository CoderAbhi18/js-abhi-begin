class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }
}

const Abhijit = new user("Abhi@gmail.com", "abhi")
console.log(Abhijit.password);
console.log(Abhijit.email);