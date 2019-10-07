import {IPost} from '../Service'

export default class DataList{

    public container:HTMLUListElement;

    constructor(containers:HTMLUListElement){
        this.container = containers
       
    }

   

    renderList(data:IPost[], container:HTMLUListElement){
      
        data.map((post:IPost)=>{
            const rowPost = document.createElement("li")
            const postRef = document.createElement("a")
            postRef.href = "#"
            postRef.innerText = post.title
            rowPost.appendChild(postRef)

            postRef.addEventListener("click", (e)=>{
                e.preventDefault()
                alert(post.body)
            })
            
            container.appendChild(rowPost)
        })
    }
}