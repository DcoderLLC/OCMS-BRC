import { } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import DataTable from '../Components/Dashboard/DataTable'

const Table = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative m-8">
        <div className="pt-16">
          
        </div>
        <div className="p-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Data Table</h2>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table