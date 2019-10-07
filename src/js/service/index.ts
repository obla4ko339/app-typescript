import * as C from '../Constants'

export interface IPost{
    id:number,
    title:string,
    body:string,
    userId:number
}

class Service{

     url:string = "https://jsonplaceholder.typicode.com/";

    fetchAll(renderData:Function, container:HTMLUListElement):void{
        C.statusBar.innerText = "Down..."
        fetch(`${this.url}posts`, {
            method:"get"
           
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            C.statusBar.innerText=""
            renderData(data,container)
        })
        
    }

    fetchOne(): IPost{

        return null
    }
}


export default new Service()