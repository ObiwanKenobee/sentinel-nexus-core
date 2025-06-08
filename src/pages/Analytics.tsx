
import React from 'react';
import { BarChart3, TrendingUp, Target, Zap, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const performanceData = [
    { month: 'Jan', threats: 145, resolved: 132, efficiency: 91 },
    { month: 'Feb', threats: 158, resolved: 147, efficiency: 93 },
    { month: 'Mar', threats: 172, resolved: 164, efficiency: 95 },
    { month: 'Apr', threats: 189, resolved: 181, efficiency: 96 },
    { month: 'May', threats: 201, resolved: 195, efficiency: 97 },
    { month: 'Jun', threats: 234, resolved: 228, efficiency: 97 },
  ];

  const threatDistribution = [
    { name: 'Biological', value: 45, color: '#FF3C3C' },
    { name: 'Cyber', value: 30, color: '#5300CE' },
    { name: 'Environmental', value: 15, color: '#FFB300' },
    { name: 'Other', value: 10, color: '#00E676' },
  ];

  const kpiData = [
    {
      title: 'Response Time',
      value: '2.3s',
      change: '+15%',
      trend: 'up',
      color: 'vision-green'
    },
    {
      title: 'Threat Detection',
      value: '99.7%',
      change: '+2.1%',
      trend: 'up',
      color: 'wakanda-purple'
    },
    {
      title: 'Global Coverage',
      value: '247',
      change: '+18',
      trend: 'up',
      color: 'stark-gold'
    },
    {
      title: 'Active Agents',
      value: '1,847',
      change: '-3%',
      trend: 'down',
      color: 'ultron-red'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-stark-gold" />
          <div>
            <h1 className="text-3xl font-bold text-foreground glow-text">Analytics Hub</h1>
            <p className="text-muted-foreground">Advanced intelligence and performance metrics</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 rounded-lg bg-wakanda-purple/20 text-wakanda-purple text-sm font-medium hover:bg-wakanda-purple/30 transition-colors">
            Export Report
          </button>
          <button className="stark-button">
            Real-time Sync
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="holographic-panel group hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {kpi.title}
              </h3>
              <div className={`flex items-center space-x-1 text-${kpi.color}`}>
                {kpi.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                <span className="text-xs font-medium">{kpi.change}</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground glow-text">{kpi.value}</p>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className={`h-full bg-${kpi.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`} style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Trends */}
        <div className="holographic-panel">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground glow-text">Performance Trends</h2>
            <TrendingUp className="w-5 h-5 text-stark-gold" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="threats" stroke="hsl(var(--ultron-red))" strokeWidth={2} />
              <Line type="monotone" dataKey="resolved" stroke="hsl(var(--vision-green))" strokeWidth={2} />
              <Line type="monotone" dataKey="efficiency" stroke="hsl(var(--wakanda-purple))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Distribution */}
        <div className="holographic-panel">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground glow-text">Threat Distribution</h2>
            <Target className="w-5 h-5 text-stark-gold" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={threatDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {threatDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="holographic-panel">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground glow-text">Monthly Intelligence Report</h2>
          <Zap className="w-5 h-5 text-stark-gold" />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="threats" fill="hsl(var(--ultron-red))" />
            <Bar dataKey="resolved" fill="hsl(var(--vision-green))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
