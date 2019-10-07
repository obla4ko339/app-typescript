import Service from './Service'
import DataList from './DataList'
import * as C from './Constants'

const postList  = new DataList(C.dataList)

C.btnFetch.addEventListener("click", ()=>{
    Service.fetchAll(postList.renderList, C.dataList)
})