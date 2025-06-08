
import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Shield } from 'lucide-react';

const ThreatOverview: React.FC = () => {
  const threatData = [
    {
      title: "Global Threat Level",
      value: "MODERATE",
      change: "+2%",
      trend: "up",
      color: "stark-gold",
      icon: Shield
    },
    {
      title: "Active Outbreaks",
      value: "127",
      change: "-5%",
      trend: "down",
      color: "vision-green",
      icon: TrendingDown
    },
    {
      title: "Critical Alerts",
      value: "23",
      change: "+12%",
      trend: "up",
      color: "ultron-red",
      icon: AlertTriangle
    },
    {
      title: "Sentinel Nodes",
      value: "2,847",
      change: "+18%",
      trend: "up",
      color: "wakanda-purple",
      icon: TrendingUp
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {threatData.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="holographic-panel group hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-${item.color}/20`}>
                <IconComponent className={`w-5 h-5 text-${item.color}`} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${item.color}/10 text-${item.color}`}>
                {item.change}
              </span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground glow-text">{item.value}</h3>
              <p className="text-sm text-muted-foreground">{item.title}</p>
            </div>

            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div className={`h-full bg-${item.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`} style={{ width: '70%' }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThreatOverview;
