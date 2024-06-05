import {} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import DashboardCard from '../Components/Dashboard/DasboardCard'
import DonutChart from '../Components/Dashboard/DonutChart'

const Charts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative m-8">
        <div className="pt-16">
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
                <DashboardCard />
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Distribution</h2>
                <DonutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts