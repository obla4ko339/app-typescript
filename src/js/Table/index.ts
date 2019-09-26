import C from '../constants'
import {Iuser} from '../service/data'

export default class AdminTable{
    

    private userRow(user:Iuser):string{

        return `
        <div class="user_row">
            <span>${user.name}</span>
            <span>${user.surname}</span>
            <span>${user.email}</span>
            <span>${user.phone ? user.phone : "empty"}</span>
            <span>${user.work ? user.work : "empty"}</span>
            <span>${user.hobby}</span>
            <span>${user.age}</span>
        </div>
        `
    }

    renderUsers(users:Iuser[]){
        users.map((user:Iuser)=>{
            C.table.innerHTML += this.userRow(user)
        })
    }
}