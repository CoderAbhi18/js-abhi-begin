const User = {
    _email: "Abhi@g.com",
    _password: "Abhi1817",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const abhi = Object.create(User)
console.log(abhi.email);