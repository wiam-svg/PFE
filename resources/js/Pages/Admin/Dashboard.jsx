
// import React, { useRef } from 'react';
// import { usePage } from '@inertiajs/react';
// import {
//   BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
//   Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';
// import { DownloadCloud } from 'lucide-react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const COLORS = {
//   primary: "#3B82F6",
//   secondary: "#10B981",
//   accent: "#6366F1",
//   success: "#22C55E",
//   warning: "#F59E0B",
//   danger: "#EF4444",
//   gray: "#6B7280"
// };

// const StatCard = ({ title, value, growth, suffix = "" }) => {
//   const isPositive = growth >= 0;
//   return (
//     <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-medium text-gray-700">{title}</h3>
//       </div>
//       <div className="text-3xl font-bold mb-2">
//         {value}
//         {suffix && <span className="text-gray-500 text-lg ml-1">{suffix}</span>}
//       </div>
//       <div className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//         <span className="mr-1">
//           {isPositive ? '↑' : '↓'} {Math.abs(growth)}%
//         </span>
//         <span className="text-gray-600">depuis le mois dernier</span>
//       </div>
//     </div>
//   );
// };

// const ExportButton = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 shadow transition-colors duration-200"
//   >
//     <DownloadCloud size={18} />
//     <span>Exporter PDF</span>
//   </button>
// );

// export default function Dashboard() {
//   const { stats } = usePage().props;
//   const pdfRef = useRef();

//   const handleExportPDF = () => {
//     const input = pdfRef.current;
//     if (!input) {
//       alert("Erreur : élément PDF non trouvé");
//       return;
//     }
//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('dashboard.pdf');
//     });
//   };

//   return (
//     <AppLayout>
//       <div className="flex">
//         <AdminSidebar />
//         <div className="p-6 max-w-7xl mx-auto w-full bg-gray-50">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
//             <ExportButton onClick={handleExportPDF} />
//           </div>

//           {/* ✅ L'élément à capturer doit être enveloppé avec la ref */}
//           <div ref={pdfRef}>
//             {/* Cartes statistiques */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <StatCard
//                 title="Signalements totaux"
//                 value={stats.totalSignalements.value}
//                 growth={stats.totalSignalements.growth}
//               />
//               <StatCard
//                 title="Utilisateurs actifs"
//                 value={stats.activeUsers.value}
//                 growth={stats.activeUsers.growth}
//               />
//               <StatCard
//                 title="Taux de résolution"
//                 value={stats.resolutionRate.value}
//                 suffix="%"
//                 growth={stats.resolutionRate.growth}
//               />
//             </div>

//             {/* Graphiques */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               {/* Graphique d'évolution des signalements */}
//               <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-medium text-gray-700 mb-4">Évolution du nombre de signalements</h3>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                       data={stats.signalementsByMonth}
//                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                       <XAxis dataKey="month" stroke="#6B7280" />
//                       <YAxis stroke="#6B7280" />
//                       <Tooltip 
//                         contentStyle={{ 
//                           backgroundColor: "white", 
//                           borderRadius: "0.375rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
//                         }} 
//                       />
//                       <Legend />
//                       <Line
//                         type="monotone"
//                         dataKey="signalements"
//                         name="Signalements"
//                         stroke={COLORS.primary}
//                         strokeWidth={2}
//                         activeDot={{ r: 8 }}
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Graphique des catégories de signalements */}
//               <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-medium text-gray-700 mb-4">Répartition par catégorie</h3>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={stats.signalementsByCategory}
//                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                       <XAxis dataKey="category" stroke="#6B7280" />
//                       <YAxis stroke="#6B7280" />
//                       <Tooltip 
//                         contentStyle={{ 
//                           backgroundColor: "white", 
//                           borderRadius: "0.375rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
//                         }} 
//                       />
//                       <Legend />
//                       <Bar
//                         dataKey="total_signalements"
//                         name="Nombre"
//                         fill={COLORS.accent}
//                         radius={[4, 4, 0, 0]}
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div> {/* FIN de ref */}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }



import React, { useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { DownloadCloud } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const COLORS = {
  primary: "#3B82F6",
  secondary: "#10B981",
  accent: "#6366F1",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  gray: "#6B7280"
};

const StatCard = ({ title, value, growth, suffix = "" }) => {
  const { t } = useTranslation();
  const isPositive = growth >= 0;
  
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      </div>
      <div className="text-3xl font-bold mb-2">
        {value}
        {suffix && <span className="text-gray-500 text-lg ml-1">{suffix}</span>}
      </div>
      <div className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <span className="mr-1">
          {isPositive ? '↑' : '↓'} {Math.abs(growth)}%
        </span>
        <span className="text-gray-600">{t('admin_dashboard.since_last_month')}</span>
      </div>
    </div>
  );
};

const ExportButton = ({ onClick }) => {
  const { t } = useTranslation();
  
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 shadow transition-colors duration-200"
    >
      <DownloadCloud size={18} />
      <span>{t('admin_dashboard.export_pdf')}</span>
    </button>
  );
};

export default function Dashboard() {
  const { stats } = usePage().props;
  const { t } = useTranslation();
  const pdfRef = useRef();

  const handleExportPDF = () => {
    const input = pdfRef.current;
    if (!input) {
      alert(t('admin_dashboard.pdf_error'));
      return;
    }
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('dashboard.pdf');
    });
  };

  return (
    <AppLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="p-6 max-w-7xl mx-auto w-full bg-gray-50">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              {t('admin_dashboard.titre')}
            </h1>
            <ExportButton onClick={handleExportPDF} />
          </div>

          <div ref={pdfRef}>
            {/* Cartes statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title={t('admin_dashboard.total_reports')}
                value={stats.totalSignalements.value}
                growth={stats.totalSignalements.growth}
              />
              <StatCard
                title={t('admin_dashboard.active_users')}
                value={stats.activeUsers.value}
                growth={stats.activeUsers.growth}
              />
              <StatCard
                title={t('admin_dashboard.resolution_rate')}
                value={stats.resolutionRate.value}
                suffix="%"
                growth={stats.resolutionRate.growth}
              />
            </div>

            {/* Graphiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Graphique d'évolution des signalements */}
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {t('admin_dashboard.reports_evolution')}
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={stats.signalementsByMonth}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          borderRadius: "0.375rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        }} 
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="signalements"
                        name={t('admin_dashboard.reports')}
                        stroke={COLORS.primary}
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Graphique des catégories de signalements */}
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  {t('admin_dashboard.reports_by_category')}
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={stats.signalementsByCategory}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="category" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          borderRadius: "0.375rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        }} 
                      />
                      <Legend />
                      <Bar
                        dataKey="total_signalements"
                        name={t('admin_dashboard.number')}
                        fill={COLORS.accent}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}