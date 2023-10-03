// give username from email adress

class GmailData {
    constructor(email) {
        this.email = email;
    }
    giveName() {
        let name = this.email.split("@")[0];
        return name
    }
}

let GetUsername = new GmailData("yagniksid999@gmail.com");
let username = GetUsername.giveName();
console.log("ussername : ", username);

// give "gmail" from email adress

class Users {
    constructor(email) {
        this.email = email
    }
    giveGmail() {
        let mail = this.email.split("@")
        let Gmail = mail[1].split('.')[0];
        return Gmail
    }
}

let g = new Users("yagniksid999@gmail.com")
let name = g.giveGmail();
console.log("result : ", name);

// give Domain from email adress

class GMAIL {
    constructor(email) {
        this.email = email
    }
    giveDomain() {
        let mail = this.email.split('gmail')
        let Gmail = mail[1].split('.')[1]
        return Gmail
    }
}
let a = new GMAIL("yagniksid999@gmail.com")
let domain = a.giveDomain()
console.log(" domain :", domain)