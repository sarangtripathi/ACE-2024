import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolSidebar from '../Sidebar/VolSIdeBar';
import "./VolHome.css"

import Designer from "../../../assets/Designer.png";
import Community from '../community/community';
import communityimage from "../../../assets/undraw_community_re_cyrm.svg"
const data = [
  { 
    "id" : "113",
    "Organisation" :"Community Kitchen",
    "Place" : "Mira Road",
    "Date" : "10-01-2021",
    "Food" : "Snacks",
    "Beneficiaries" : "250",
},
{
  "id" : "113",
  "Organisation" :"Generous Eats",
  "Place" : "Ram mandir",
  "Date" : "22-01-2024",
  "Food" : "lunch",
  "Beneficiaries" : "500",
}
,
{
  "id" : "113",
  "Organisation" :"Generous Eats",
  "Place" : "Ram mandir",
  "Date" : "22-01-2024",
  "Food" : "lunch",
  "Beneficiaries" : "500",
}
,
{
  "id" : "113",
  "Organisation" :"Mahakal Hotel",
  "Place" : "Pratapgarh",
  "Date" : "10-01-2023",
  "Food" : "Meal",
  "Beneficiaries" : "200",
}
,
{
  "id" : "113",
  "Organisation" :"Nourish Together",
  "Place" : "Deoria",
  "Date" : "13-11-2020",
  "Food" : "Breakfast",
  "Beneficiaries" : "120",
}

  
]

const VolHome = () => {
  return (
    <>

        <div className="p-7 w-full">
        <div className="text-3xl font-semibold text-indigo-700"><u>Volunteer Name</u></div>
        {/* <div className=''><Index2/></div> */}
        <div className="w-full mt-7 h-42 text-center items-center flex justify-between">
            <div id='neo' className='w-80 h-32 ml-32 border-2 rounded-xl items-center border-t-orange-500 border-l-orange-500 border-b-cyan-600 border-r-cyan-600 '>
                <div className='text-5xl font-bold mt-3 text-indigo-800 '>37*</div>
                <div className='text-2xl font-medium mt-2 '>Smiles Delivered</div>
            </div>

            <div>
            <img className="p-1 h-40 w-800 mr-40 rounded-3xl" src={communityimage} />

            </div>
        </div>

        <div className="mt-9">
              <div className=" bg-transparent border-2  rounded-xl drop-shadow-xl overflow-x-auto">
                <table className="w-full">
                  <thead className="w-full">
                    <tr className="border border-solid">
                      <th className="text-lg px-6 py-3 bg-blue-400">Organisation Name</th>
                      <th className="text-lg px-6 py-3 bg-blue-400">Place Name</th>
                      <th className="text-lg px-6 py-3 bg-blue-400"> Date</th>
                      <th className="text-lg px-6 py-3 bg-blue-400">Food </th>
                      <th className="text-lg px-6 py-3 bg-blue-400">Beneficiaries</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.map((index) => (
                        <tr key={index.id} className='text-center mt-2 font-normal'>
                            <td className='text-xl px-6 py-3 bg-blue-200'><div>{index.Organisation}</div></td>
                            <td className='text-xl px-6 py-3 bg-blue-200'><div>{index.Place}</div></td>
                            <td className='text-xl px-6 py-3 bg-blue-200'><div>{index.Date}</div></td>
                            <td className='text-xl px-6 py-3 bg-blue-200'><div>{index.Food}</div></td>
                            <td className='text-xl px-6 py-3 bg-blue-200'><div>{index.Beneficiaries}</div></td>
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

export default VolHome