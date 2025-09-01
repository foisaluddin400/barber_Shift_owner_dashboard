import { useGetDasboardQuery } from "../../page/redux/api/manageApi";
import ShopRegistration from "./ShopRegistration";
import { SubscriptionGrowth } from "./SubscriptionGrowth";
import UserGrowth from "./UserGrowth";

const Dashboard = () => {
  const {data:dashboradData} = useGetDasboardQuery()
  return (
    <div className="p-2 min-h-screen">
      <div className="  grid grid-cols-2 gap-4 text-center py-3">
        <div className="bg-white py-6 rounded-md">
          <p className=" mt-3 text-xl">Total Customer</p>
          <h1 className="text-3xl font-bold">{dashboradData?.data?.totalCustomers || '0'}</h1>
        </div>
        <div className=" bg-white py-6 rounded-md">
        <p className=" mt-3 text-xl">Total Barber</p>
          <h1 className="text-3xl font-bold">{dashboradData?.data?.totalBarbers || '0'}</h1>
          
        </div>
        
      </div>
      <div className="lg:grid grid-cols-2 gap-4">
        <div className="bg-white rounded p-3">
          <SubscriptionGrowth></SubscriptionGrowth>
        </div>
        <div className="bg-white rounded mt-3 lg:mt-0">
          <UserGrowth></UserGrowth>
        </div>
      </div>
      <ShopRegistration></ShopRegistration>
    </div>
  );
};

export default Dashboard;
