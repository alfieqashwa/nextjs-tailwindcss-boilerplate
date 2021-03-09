import React, { Children } from "react";
import Head from 'next/head';



import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";
import Testcard from 'components/Cards/testCard';

// export default function Admin({ children }) {
//   return (
//     <>
//       <Sidebar />
//       <div className="relative md:ml-64 bg-gray-200">
//         <AdminNavbar />
//         {/* Header */}
//         <HeaderStats />
//         <div className="px-4 md:px-10 mx-auto w-full -m-24">
//           {children}
//           <FooterAdmin />
//         </div>
//       </div>
//     </>
//   );
// }

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Head>

    </Head>
  
    <div className="relative md:ml-64 bg-gray-200">
         <AdminNavbar />
         <Sidebar />
         <HeaderStats />
         
       </div>
       <div className="relative md:ml-64 bg-gray-200">
           {children}
           <FooterAdmin />
         </div>
  
  
    </>
  )
  }


  


export default Layout