import service from './service'

import AdminTable from './Table'

const table:AdminTable = new AdminTable()
table.renderUsers(service.getUsers)

console.log(service.getUsers);