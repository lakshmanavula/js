export class User{
    constructor(firstName,lastName,userName, email,orgName,password ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email= email;
        this.orgName = orgName;
        this.password = password;
        
    }
    showDetails(){
        console.log(`${this.firstName} - ${this.lastName} - ${this.userName} - ${this.email} - ${this.orgName}`);
        
    }
}