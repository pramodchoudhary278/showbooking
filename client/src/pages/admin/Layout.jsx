import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* TEST 1: Only Navbar */}
      {/* <AdminNavbar /> */}

      {/* TEST 2: Only Sidebar */}
      {/* <AdminSidebar /> */}

      {/* TEST 3: Both */}
      <AdminNavbar />
      <div className='flex'>
        <AdminSidebar />
        <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
          <Outlet />
        </div>
      </div>
      
      

      <Outlet />
    </>
  );
};

export default Layout;









// import React from "react";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       {/* Temporary Navbar */}
//       <header className="bg-gray-800 text-white p-4">
//         Admin Navbar (Dummy)
//       </header>

//       <div className="flex min-h-[calc(100vh-64px)]">
//         {/* Temporary Sidebar */}
//         <aside className="w-64 bg-gray-200 p-4">
//           Admin Sidebar (Dummy)
//         </aside>

//         {/* Main content */}
//         <main className="flex-1 px-4 py-10 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
