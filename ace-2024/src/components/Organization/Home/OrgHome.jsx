import React,{useEffect,useState} from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OrgSidebar from '../Sidebar/OrgSidebar';
import "./OrgHome.css"
import imagecar from "../../../assets/undraw_delivery_truck_vt6p.svg"

const OrgHome = () => {
  const[data,setData]=useState([]);
  const getAllItems = async () => {
    try{
        const response = await fetch("http://localhost:5000/getAllItems")
        const jsonData = await response.json();
        setData(jsonData);
    }catch(err){
        console.log(err.message);
    }
}
  useEffect(() => {
    getAllItems();
  },[]);

  return (
    <>
        <div className="p-7 w-full">
        <div className="text-3xl font-semibold text-indigo-700"><u>Sharma Caterers</u></div>
        <div className="w-full mt-10 h-42 text-center items-center flex justify-between">
            <div id='neo' className='w-80 h-32 ml-32 border-2 rounded-xl items-center  border-t-orange-500 border-l-orange-500 border-b-cyan-600 border-r-cyan-600'>
                <div className='text-5xl font-bold mt-3 text-indigo-800'>29</div>
                <div className='text-2xl font-medium mt-2'>Happy Deliveries</div>
            </div>

            <div>
            <img className="p-2 h-40 mr-20" src={imagecar} />
            </div>
        </div>

        <div className="mt-14">
              <div className=" bg-transparent border-2  rounded-xl drop-shadow-xl overflow-x-auto">
                <table className="w-full">
                  <thead className="w-full bg-slate-500">
                    <tr className="border border-solid">
                      <th className="text-lg px-6 py-3">Food Item</th>
                      <th className="text-lg px-6 py-3">Quantity</th>
                      <th className="text-lg px-6 py-3">Exp. Date</th>
                      <th className="text-lg px-6 py-3">Storage Req.</th>
                      <th className="text-lg px-6 py-3">Food Safety</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.map((index) => (
                        <tr key={index.item_id} className='text-center mt-2 font-normal'>
                            <td className='text-xl px-6 py-3 font-medium'><div>{index.name}</div></td>
                            <td className='text-xl px-6 py-3 font-medium'><div>{index.quantity}</div></td>
                            <td className='text-xl px-6 py-3 font-medium'><div>{index.expdate}</div></td>
                            <td className='text-xl px-6 py-3 font-medium'><div>{index.storereq}</div></td>
                            <td className='text-xl px-6 py-3 font-medium'><div>{index.foodsafety}</div></td>
                        </tr>
                    ) )}
                    
                  </tbody>
                </table>
              </div>
            </div>
        
      </div>
    </>
  )
};

export default OrgHome