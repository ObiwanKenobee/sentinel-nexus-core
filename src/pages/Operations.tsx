
import React from 'react';
import { Globe, Satellite, MapPin, Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Operations = () => {
  const globalOperations = [
    {
      region: 'North America',
      status: 'operational',
      agents: 247,
      threats: 12,
      missions: 8,
      coverage: 98,
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      region: 'Europe',
      status: 'operational',
      agents: 189,
      threats: 7,
      missions: 12,
      coverage: 96,
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      region: 'Asia Pacific',
      status: 'alert',
      agents: 312,
      threats: 23,
      missions: 15,
      coverage: 94,
      coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    {
      region: 'Africa',
      status: 'operational',
      agents: 156,
      threats: 18,
      missions: 22,
      coverage: 87,
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      region: 'South America',
      status: 'maintenance',
      agents: 98,
      threats: 5,
      missions: 3,
      coverage: 78,
      coordinates: { lat: -23.5505, lng: -46.6333 }
    }
  ];

  const activeMissions = [
    {
      id: 'OP-2024-001',
      name: 'Project Sentinel',
      region: 'Asia Pacific',
      priority: 'high',
      status: 'active',
      progress: 75,
      eta: '2 hours'
    },
    {
      id: 'OP-2024-002',
      name: 'Beacon Network',
      region: 'Africa',
      priority: 'medium',
      status: 'active',
      progress: 45,
      eta: '6 hours'
    },
    {
      id: 'OP-2024-003',
      name: 'Data Harvest',
      region: 'Europe',
      priority: 'low',
      status: 'pending',
      progress: 12,
      eta: '1 day'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'vision-green';
      case 'alert':
        return 'ultron-red';
      case 'maintenance':
        return 'stark-gold';
      default:
        return 'wakanda-purple';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'alert':
        return <AlertTriangle className="w-5 h-5" />;
      case 'maintenance':
        return <Clock className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'ultron-red';
      case 'medium':
        return 'stark-gold';
      case 'low':
        return 'vision-green';
      default:
        return 'wakanda-purple';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-stark-gold" />
          <div>
            <h1 className="text-3xl font-bold text-foreground glow-text">Global Operations</h1>
            <p className="text-muted-foreground">Worldwide command and control center</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-vision-green/20">
            <Satellite className="w-4 h-4 text-vision-green" />
            <span className="text-sm font-medium text-vision-green">SATELLITES ONLINE</span>
          </div>
          <button className="stark-button">
            Emergency Protocol
          </button>
        </div>
      </div>

      {/* Global Status Map */}
      <div className="holographic-panel">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground glow-text">Global Status Overview</h2>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-stark-gold" />
            <span className="text-sm text-stark-gold font-medium">Live Satellite Feed</span>
          </div>
        </div>

        {/* Simulated world map */}
        <div className="relative bg-stark-matte rounded-lg p-6 min-h-[400px] border border-wakanda-purple/30">
          <div className="absolute inset-0 bg-gradient-to-br from-wakanda-purple/5 to-transparent rounded-lg"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {globalOperations.map((region, index) => (
              <div key={index} className="holographic-panel p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{region.region}</h3>
                  <div className={`flex items-center space-x-1 text-${getStatusColor(region.status)}`}>
                    {getStatusIcon(region.status)}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agents</span>
                    <span className="text-foreground font-medium">{region.agents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Threats</span>
                    <span className="text-ultron-red font-medium">{region.threats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Missions</span>
                    <span className="text-wakanda-purple font-medium">{region.missions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="text-vision-green font-medium">{region.coverage}%</span>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${getStatusColor(region.status)} rounded-full transition-all duration-1000`} 
                    style={{ width: `${region.coverage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Missions */}
      <div className="holographic-panel">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground glow-text">Active Operations</h2>
          <button className="px-4 py-2 rounded-lg bg-wakanda-purple/20 text-wakanda-purple text-sm font-medium hover:bg-wakanda-purple/30 transition-colors">
            Deploy New Mission
          </button>
        </div>
        
        <div className="space-y-4">
          {activeMissions.map((mission) => (
            <div key={mission.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full bg-${getPriorityColor(mission.priority)} animate-pulse`}></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{mission.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mission.id} • {mission.region} • Priority: {mission.priority.toUpperCase()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-lg font-bold text-foreground">{mission.progress}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">ETA</p>
                  <p className="text-lg font-bold text-foreground">{mission.eta}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-md bg-wakanda-purple/20 text-wakanda-purple text-xs font-medium hover:bg-wakanda-purple/30 transition-colors">
                    Monitor
                  </button>
                  <button className="px-3 py-1 rounded-md bg-ultron-red/20 text-ultron-red text-xs font-medium hover:bg-ultron-red/30 transition-colors">
                    Abort
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operations;
