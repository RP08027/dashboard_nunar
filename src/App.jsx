// import React from 'react';
// import { BellIcon, UserCircleIcon, XCircleIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'; // O /24/solid si prefieres

// function App() {
//   const avatarUrl = "https://randomuser.me/api/portraits/women/68.jpg"; // URL de avatar de ejemplo

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold text-gray-900">SnapSocial</h1>
//           </div>
//           <div className="flex items-center space-x-6">
//             <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Clientes</a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Servicios</a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Facturas</a>
//             <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               <BellIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//             <img
//               className="h-8 w-8 rounded-full"
//               src={avatarUrl}
//               alt="User avatar"
//             />
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Resumen de Cliente
//         </h2>

//         {/* Mes en curso pendiente */}
//         <div className="bg-slate-100 p-6 rounded-lg shadow mb-8">
//           <p className="text-sm text-slate-600">Mes en curso pendiente</p>
//           <p className="text-3xl font-bold text-slate-900 mt-1">$1,250</p>
//         </div>

//         {/* Estado del Pago */}
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">Estado del Pago</h3>
//           <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
//             <div className="flex items-center">
//               <XCircleIcon className="h-10 w-10 text-gray-400 mr-3" />
//               <div>
//                 <p className="font-medium text-gray-700">Pago del mes actual</p>
//                 <p className="text-sm text-blue-500">Pago Pendiente</p>
//               </div>
//             </div>
//             <button className="text-gray-400 hover:text-gray-600">
//               <XCircleIcon className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {/* Próximo Recibo */}
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">Próximo Recibo</h3>
//           <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
//             <div className="flex items-center">
//               <CalendarDaysIcon className="h-10 w-10 text-gray-400 mr-3" />
//               <div>
//                 <p className="font-medium text-gray-700">Fecha</p>
//                 <p className="text-sm text-gray-500">15 de Noviembre</p>
//               </div>
//             </div>
//             <p className="font-semibold text-gray-700">$1,500</p>
//           </div>
//         </div>

//         {/* Acciones Rápidas */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Acciones Rápidas</h3>
//           <div className="flex justify-between items-center">
//             <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition duration-150">
//               Servicios Adicionales
//             </button>
//             <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition duration-150">
//               Historial Completo de Pagos
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

// import Dashboard from "./pages/Dashboard";

// function App() {
//   return <Dashboard />;
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
