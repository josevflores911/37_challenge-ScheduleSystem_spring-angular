export class User {
    id?:number;
    clave?: string;
    login?: string;

    constructor(clave:string,login:string){
        this.clave=clave;
        this.login=login;
    }
} 