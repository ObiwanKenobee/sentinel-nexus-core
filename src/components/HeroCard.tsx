
import React from 'react';
import { Shield, Activity, AlertTriangle } from 'lucide-react';

type HeroCardProps = {
  name: string;
  status: 'online' | 'offline' | 'standby';
  region: string;
  threatLevel: 'low' | 'moderate' | 'high';
  activeAlerts?: number;
  lastUpdate?: string;
};

export const HeroCard: React.FC<HeroCardProps> = ({ 
  name, 
  status, 
  region, 
  threatLevel, 
  activeAlerts = 0,
  lastUpdate = "2 min ago"
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'online':
        return <Activity className="w-5 h-5 text-vision-green" />;
      case 'offline':
        return <AlertTriangle className="w-5 h-5 text-ultron-red" />;
      default:
        return <Shield className="w-5 h-5 text-stark-gold" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'text-vision-green';
      case 'offline':
        return 'text-ultron-red';
      default:
        return 'text-stark-gold';
    }
  };

  return (
    <div className="hero-card group cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getStatusIcon()}
          <div>
            <h3 className="text-lg font-bold text-foreground glow-text">{name}</h3>
            <p className="text-sm text-muted-foreground">Agent • {region}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor()} bg-current/10`}>
          {status.toUpperCase()}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Threat Level</span>
          <span className={`threat-indicator threat-${threatLevel}`}>
            {threatLevel.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Active Alerts</span>
          <span className="text-sm font-medium text-foreground">{activeAlerts}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Last Update</span>
          <span className="text-sm font-medium text-foreground">{lastUpdate}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex space-x-2">
          <button className="flex-1 py-2 px-3 rounded-md bg-wakanda-purple/20 text-wakanda-purple text-xs font-medium hover:bg-wakanda-purple/30 transition-colors">
            View Details
          </button>
          <button className="flex-1 py-2 px-3 rounded-md bg-stark-gold/20 text-stark-gold text-xs font-medium hover:bg-stark-gold/30 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
