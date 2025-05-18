// import React from 'react';
// import { usePage } from '@inertiajs/react';
// import {
//     BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
//     Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import AppLayout from '@/Layouts/AppLayout';
// import  AgentSidebar from '@/Components/AgentSidebar';

// // Couleurs pour les graphiques
// const COLORS = {
//     primary: "#3B82F6",
//     secondary: "#10B981",
//     accent: "#6366F1",
//     success: "#22C55E",
//     warning: "#F59E0B",
//     danger: "#EF4444",
//     pending: "#F59E0B",
//     inProgress: "#3B82F6",
//     resolved: "#10B981"
// };

// // Couleurs pour le graphique de statut
// const STATUS_COLORS = [COLORS.pending, COLORS.inProgress, COLORS.resolved];

// const StatCard = ({ title, value, subtitle, subtitleDetails }) => {
//     return (
        
//             <div className="bg-white rounded-lg shadow p-6">
//                 <div className="mb-3">
//                     <h3 className="text-lg font-medium text-gray-700">{title}</h3>
//                 </div>
//                 <div className="text-3xl font-bold mb-1">{value}</div>
//                 <div className="text-sm text-gray-600">
//                     {subtitle}
//                     {subtitleDetails && (
//                         <span className={subtitleDetails.startsWith('+') ? 'text-green-500 ml-1' : 'text-red-500 ml-1'}>
//                             {subtitleDetails}
//                         </span>
//                     )}
//                 </div>
//             </div>
        
//     );
// };

// export default function AgentDashboard() {
//     // Récupérer les données des props Inertia
//     const { stats } = usePage().props;
//     return (
//         <AppLayout>
//            <div className="flex">
//              <AgentSidebar/>
//             <div className="p-6 max-w-7xl mx-auto">
//                 <h1 className="text-2xl font-bold mb-8 text-gray-800">Tableau de bord</h1>
//                 {/* Cartes statistiques */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     <StatCard
//                         title="Assignés"
//                         value={stats.assignedSignalements.total}
//                         subtitle={`${stats.assignedSignalements.pending} en attente, ${stats.assignedSignalements.inProgress} en cours`}
//                     />
//                     <StatCard
//                         title="Cette semaine"
//                         value={stats.thisWeekAssigned.total}
//                         subtitle="depuis la semaine dernière"
//                         subtitleDetails={stats.thisWeekAssigned.change >= 0 ? `+${stats.thisWeekAssigned.change}` : stats.thisWeekAssigned.change.toString()}
//                     />
//                     <StatCard
//                         title="Résolus"
//                         value={stats.resolvedThisYear}
//                         subtitle="En 2025"
//                     />
//                 </div>
//                 {/* Graphiques */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//                     {/* Graphique d'activité hebdomadaire */}
//                     <div className="bg-white rounded-lg shadow p-6">
//                         <h3 className="text-lg font-medium text-gray-700 mb-4">Activité hebdomadaire</h3>
//                         <div className="h-64">
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <BarChart
//                                     data={stats.weeklyActivity}
//                                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                                 >
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="day" />
//                                     <YAxis />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Bar
//                                         dataKey="count"
//                                         name="Signalements assignés"
//                                         fill={COLORS.primary}
//                                     />
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                     {/* Graphique de répartition par statut */}
//                     <div className="bg-white rounded-lg shadow p-6">
//                         <h3 className="text-lg font-medium text-gray-700 mb-4">État des signalements</h3>
//                         <div className="h-64">
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <PieChart>
//                                     <Pie
//                                         data={stats.signalementStatusData}
//                                         cx="50%"
//                                         cy="50%"
//                                         labelLine={true}
//                                         nameKey="name"
//                                         dataKey="value"
//                                         outerRadius={80}
//                                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                                     >
//                                         {stats.signalementStatusData.map((entry, index) => (
//                                             <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
//                                         ))}
//                                     </Pie>
//                                     <Tooltip formatter={(value) => [`${value} signalements`, 'Quantité']} />
//                                     <Legend />
//                                 </PieChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </AppLayout>
//     );
// }







import React from 'react';
import { usePage } from '@inertiajs/react';
import {
    BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import { useTranslation, Trans } from 'react-i18next';

// Couleurs pour les graphiques
const COLORS = {
    primary: "#3B82F6",
    secondary: "#10B981",
    accent: "#6366F1",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    pending: "#F59E0B",
    inProgress: "#3B82F6",
    resolved: "#10B981"
};

const STATUS_COLORS = [COLORS.pending, COLORS.inProgress, COLORS.resolved];

const StatCard = ({ title, value, subtitle, subtitleDetails }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-3">
                <h3 className="text-lg font-medium text-gray-700">{title}</h3>
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-sm text-gray-600">
                {subtitle}
                {subtitleDetails && (
                    <span className={subtitleDetails.startsWith('+') ? 'text-green-500 ml-1' : 'text-red-500 ml-1'}>
                        {subtitleDetails}
                    </span>
                )}
            </div>
        </div>
    );
};

export default function AgentDashboard() {
    const { t, i18n } = useTranslation();
    const { stats } = usePage().props;
    
    const currentYear = new Date().getFullYear();

    return (
        <AppLayout>
            <div className="flex">
                <AgentSidebar/>
                <div className="p-6 max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8 text-gray-800">{t('agent_dashboard.title')}</h1>
                    
                    {/* Cartes statistiques */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard
                            title={t('agent_dashboard.stats.assigned.title')}
                            value={stats.assignedSignalements.total}
                            subtitle={t('agent_dashboard.stats.assigned.subtitle', {
                                pending: stats.assignedSignalements.pending,
                                inProgress: stats.assignedSignalements.inProgress
                            })}
                        />
                        <StatCard
                            title={t('agent_dashboard.stats.this_week.title')}
                            value={stats.thisWeekAssigned.total}
                            subtitle={t('agent_dashboard.stats.this_week.subtitle')}
                            subtitleDetails={stats.thisWeekAssigned.change >= 0 ? `+${stats.thisWeekAssigned.change}` : stats.thisWeekAssigned.change.toString()}
                        />
                        <StatCard
                            title={t('agent_dashboard.stats.resolved.title')}
                            value={stats.resolvedThisYear}
                            subtitle={t('agent_dashboard.stats.resolved.subtitle', { year: currentYear })}
                        />
                    </div>
                    
                    {/* Graphiques */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Graphique d'activité hebdomadaire */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-700 mb-4">
                                {t('agent_dashboard.charts.weekly_activity')}
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={stats.weeklyActivity}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="day" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar
                                            dataKey="count"
                                            name={t('agent_dashboard.charts.assigned_reports')}
                                            fill={COLORS.primary}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        
                        {/* Graphique de répartition par statut */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-700 mb-4">
                                {t('agent_dashboard.charts.status_distribution')}
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={stats.signalementStatusData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={true}
                                            nameKey="name"
                                            dataKey="value"
                                            outerRadius={80}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {stats.signalementStatusData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            formatter={(value) => [
                                                t('agent_dashboard.charts.reports_count', { count: value }),
                                                t('agent_dashboard.charts.quantity')
                                            ]} 
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}