import {} from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import DonutChart from "../Components/Dashboard/DonutChart";
import DataTable from "../Components/Dashboard/DataTable";
import { FaUsers, FaChartLine } from "react-icons/fa";
import DashboardCard from "./../Components/Dashboard/DasboardCard";
import CountupCards from "./../Components/Dashboard/CountupCards";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative m-8">
        <div className="pt-16">
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CountupCards title="Users" count={1500} icon={FaUsers} />
              <CountupCards title="Revenue" count={75000} icon={FaChartLine} />
              <CountupCards title="Revenue" count={75000} icon={FaChartLine} />
              <CountupCards title="Revenue" count={75000} icon={FaChartLine} />
            </div>
          </div>
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
        <div className="p-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Data Table</h2>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
