import React from 'react';
import { usePage } from '@inertiajs/react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';



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
  const isPositive = growth >= 0;
  return (
    
    <div className="bg-white rounded-lg shadow p-6">
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
        <span className="text-gray-600">depuis le mois dernier</span>
      </div>
    </div>
    
  );
};

export default function Dashboard() {
  // Récupérer les données des props Inertia
  const { stats } = usePage().props;

  return (
    <AppLayout>
      <div className="flex">
      <AdminSidebar/>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Tableau de bord</h1>
        {/* Cartes statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Signalements totaux"
            value={stats.totalSignalements.value}
            growth={stats.totalSignalements.growth}
          />
          <StatCard
            title="Utilisateurs actifs"
            value={stats.activeUsers.value}
            growth={stats.activeUsers.growth}
          />
          <StatCard
            title="Taux de résolution"
            value={stats.resolutionRate.value}
            suffix="%"
            growth={stats.resolutionRate.growth}
          />
        </div>
        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Graphique d'évolution des signalements */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Évolution du nombre de signalements</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={stats.signalementsByMonth}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="signalements"
                    name="Signalements"
                    stroke={COLORS.primary}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Graphique des catégories de signalements */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Répartition par catégorie</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stats.signalementsByCategory}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="count"
                    name="Nombre"
                    fill={COLORS.accent}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    
    </AppLayout>
  );
}