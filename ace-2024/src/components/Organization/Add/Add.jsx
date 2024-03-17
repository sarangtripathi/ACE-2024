import React, { useState } from 'react';

const Add = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expdate, setExpdate] = useState("");
  const [storereq, setStorereq] = useState("");
  const [foodsafety, setFoodsafety] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, quantity, expdate, storereq, foodsafety };
      const response = await fetch("http://localhost:5000/orgaddsurplus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/orghome"; // Redirect to homepage after successful submission
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="p-7 w-full">
        <form onSubmit={onSubmitForm}>
          <div className="text-3xl font-semibold text-indigo-700"><u>Sharma Caterers</u></div>
          <div className="flex justify-between pt-8 mr-auto">
            <div className="">
              <div className="font-medium text-2xl">Add Surplus Items to be listed</div>
              <div className="text-sm italic">Enter details and click on Add</div>
            </div>
            <div>
              <button type="submit" className="justify-end text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Surplus</button>
            </div>
          </div>

          <div className="mt-9 grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="itemName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item name</label>
              <input type="text" id="itemName" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" required />
            </div>
            <div>
              <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc" required />
            </div>

            <div>
              <label htmlFor="expdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date</label>
              <input type="date" id="expdate" value={expdate} onChange={(e) => setExpdate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Expire Date" required />
            </div>
            <div>
              <label htmlFor="storereq" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Storage Requirement</label>
              <input type="text" id="storereq" value={storereq} onChange={(e) => setStorereq(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Requirement" required />
            </div>
            <div>
              <label htmlFor="foodsafety" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Safety</label>
              <input type="text" id="foodsafety" value={foodsafety} onChange={(e) => setFoodsafety(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Safety Remarks"  required />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add;