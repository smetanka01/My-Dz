class User{
    constructor(username, age, password) {
        this.username = username
        this.age = age;
        this.password = password;
    }

    login(){
        if (!this.username){
            console.log("not filled")
        } else {
            console.log(`Your username: ${this.username}`)
        }
        if (!this.age){
            console.log("not filled")
        } else {
            console.log(`Your age: ${this.age}`)
        }
        if (!this.password){
            console.log("not filled")
        } else {
            console.log(`Your password: ${this.password}`)
        }
    }
}

const user = new User('Vlad')
console.log(user)

user.login()