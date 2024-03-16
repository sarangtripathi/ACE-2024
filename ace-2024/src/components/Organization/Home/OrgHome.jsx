import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OrgSidebar from '../Sidebar/OrgSidebar';
import "./OrgHome.css"
import imagecar from "../../../assets/undraw_delivery_truck_vt6p.svg"
const data = [
    {
        "id" : "112",
        "name" : "Chappati",
        "quantity" : "12",
        "expdate" : "12-12-2003",
        "storagereq" : "cold dry place",
        "foodsafety" : "good quality",
    },
    {
        "id" : "113",
        "name" : "rajma chawal",
        "quantity" : "10pkt",
        "expdate" : "13-11-2003",
        "storagereq" : "cool dry place",
        "foodsafety" : "avg quality",
    }
]

const OrgHome = () => {
  return (
    <>
        <div className="p-7 w-full">
        <div className="text-3xl font-semibold text-indigo-700"><u>Sharma Caterers</u></div>
        <div className="w-full mt-7 h-42 text-center items-center flex justify-between">
            <div id='neo' className='w-80 h-32 ml-32 border-2 rounded-xl items-center  border-t-orange-500 border-l-orange-500 border-b-cyan-600 border-r-cyan-600'>
                <div className='text-5xl font-bold mt-3 text-indigo-800'>29</div>
                <div className='text-2xl font-medium mt-2'>Happy Deliveries</div>
            </div>

            <div>
            <img className="p-2 h-40 mr-20" src={imagecar} />
            </div>
        </div>

        <div className="mt-9">
              <div className=" bg-transparent border-2  rounded-xl drop-shadow-xl overflow-x-auto">
                <table className="w-full">
                  <thead className="w-full">
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
                        <tr key={index.id} className='text-center mt-2 font-normal'>
                            <td className='text-xl px-6 py-3'><div>{index.name}</div></td>
                            <td className='text-xl px-6 py-3'><div>{index.quantity}</div></td>
                            <td className='text-xl px-6 py-3'><div>{index.expdate}</div></td>
                            <td className='text-xl px-6 py-3'><div>{index.storagereq}</div></td>
                            <td className='text-xl px-6 py-3'><div>{index.foodsafety}</div></td>
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