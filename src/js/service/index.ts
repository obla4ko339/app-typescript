import {data, Iuser} from './data'


class Service{

    private users:Iuser[];

    // readonly users:Iuser[]

    constructor(users:Iuser[]){
        this.users = [...users];
    }

    get getUsers(){
        return [...this.users]
    }

    addUser(user:Iuser):Iuser[]{
        this.users.push(user)
        return [...this.users];
    }

    removeUser(id:number):Iuser[]{
        this.users.splice(id,1);
        return [...this.users]
    }

    changeUser(user:Iuser, id:number):Iuser[]{
        this.users[id] = user
        return [...this.users]
    }

}

export default new Service(data);