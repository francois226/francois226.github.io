import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  useEffect(() => {
    setMounted(true);
  }, []);

  const revenueData = [
    { mois: 'Jan', valeur: 45000, objectif: 42000 },
    { mois: 'Fév', valeur: 52000, objectif: 48000 },
    { mois: 'Mar', valeur: 48000, objectif: 50000 },
    { mois: 'Avr', valeur: 61000, objectif: 55000 },
    { mois: 'Mai', valeur: 58000, objectif: 58000 },
    { mois: 'Jun', valeur: 67000, objectif: 62000 },
  ];

  const salesData = [
    { produit: 'Produit A', ventes: 4200 },
    { produit: 'Produit B', ventes: 3800 },
    { produit: 'Produit C', ventes: 2900 },
    { produit: 'Produit D', ventes: 2100 },
  ];

  const categoryData = [
    { name: 'Électronique', value: 35 },
    { name: 'Mode', value: 28 },
    { name: 'Maison', value: 22 },
    { name: 'Sports', value: 15 },
  ];

  const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  const metrics = [
    {
      title: 'Revenu Total',
      value: '67 000€',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Clients Actifs',
      value: '2,847',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Commandes',
      value: '1,234',
      change: '+23.1%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Taux Conversion',
      value: '3.24%',
      change: '-2.4%',
      trend: 'down',
      icon: Activity,
      color: 'from-orange-500 to-amber-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-8 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard Entreprise</h1>
          <p className="text-purple-200">Vue d'ensemble des performances</p>
          
          <div className="mt-4 flex gap-2">
            {['week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                {period === 'week' ? 'Semaine' : period === 'month' ? 'Mois' : 'Année'}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className={`transform transition-all duration-700 ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                      metric.trend === 'up' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                    }`}>
                      {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-semibold">{metric.change}</span>
                    </div>
                  </div>
                  <p className="text-purple-200 text-sm mb-1">{metric.title}</p>
                  <p className="text-white text-3xl font-bold">{metric.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Évolution du Revenu</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="mois" stroke="#c4b5fd" />
                <YAxis stroke="#c4b5fd" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e1b4b', 
                    border: '1px solid #8b5cf6',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="valeur" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  dataKey="objectif" 
                  stroke="#ec4899" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#ec4899', r: 4 }}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Sales by Product */}
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Ventes par Produit</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="produit" stroke="#c4b5fd" />
                <YAxis stroke="#c4b5fd" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e1b4b', 
                    border: '1px solid #8b5cf6',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar 
                  dataKey="ventes" 
                  fill="#8b5cf6" 
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Répartition par Catégorie</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e1b4b', 
                      border: '1px solid #8b5cf6',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Statistiques Rapides</h3>
            <div className="space-y-4">
              {[
                { label: 'Panier Moyen', value: '54.32€', color: 'bg-purple-500' },
                { label: 'Nouveaux Clients', value: '342', color: 'bg-pink-500' },
                { label: 'Taux Retour', value: '2.1%', color: 'bg-orange-500' },
                { label: 'Satisfaction', value: '94%', color: 'bg-emerald-500' },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${stat.color} animate-pulse`}></div>
                    <span className="text-purple-200">{stat.label}</span>
                  </div>
                  <span className="text-white font-bold text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;