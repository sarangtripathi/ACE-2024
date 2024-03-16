import React from 'react'

const links = ["Saab","Volvo","BMW"]

const Testing = ({prop}) => {
    // const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
			className={`transition-all  duration-500  fixed top-0 
			}`}>
			<div className="flex h-screen overflow-y-auto flex-col   w-64 px-4 py-8 border-r min-h-screen relative bg-[#EBEAF2]">
				<button
					// onClick={closeSidebar}
					className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
				>
					{/* <HiX className="w-5 h-5" /> */}
				</button>
				<h2 className="text-3xl font-semibold text-gray-800">
					Feeding <span className="text-indigo-500 ml-1">Media</span>
				</h2>
				
				<div className="flex flex-col mt-6  justify-between flex-1">
					<nav className="text">
						<hr className="font-" />
						<a
							// href="/color-shade-generator"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							{/* <HiTicket className="w-5 h-5" /> */}
							<span className="font-bold ml-4">Distributed</span>
						</a>
						<a
							// href="/color-shade-generator"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							{/* <MdSettings className="w-5 h-5" /> */}
							<span className="mx-4 font-bold">Expired</span>
						</a><a
							// href="/color-shade-generator"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							{/* <MdSettings className="w-5 h-5" /> */}
							<span className="mx-4 font-bold">History</span>
						</a>
					</nav>
					<div className="flex items-center px-4 -mx-2 mt-5">
						<img
							src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							alt="avatar"
							className="h-9 w-9 mx-2 object-center object-cover rounded-full"
						/>
						<h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
							John Doe
						</h4>
					</div>
				</div>
			</div>
            {prop}
		</div>
  )
}

export default Testing