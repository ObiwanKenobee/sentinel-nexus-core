
import React from 'react';
import { MapPin, AlertTriangle, TrendingUp } from 'lucide-react';

const OutbreakHeatmap: React.FC = () => {
  const outbreakData = [
    { city: "Nairobi", cases: 127, severity: "high", lat: -1.2921, lng: 36.8219 },
    { city: "Lagos", cases: 89, severity: "moderate", lat: 6.5244, lng: 3.3792 },
    { city: "Cairo", cases: 156, severity: "high", lat: 30.0444, lng: 31.2357 },
    { city: "Cape Town", cases: 43, severity: "low", lat: -33.9249, lng: 18.4241 },
    { city: "Kinshasa", cases: 67, severity: "moderate", lat: -4.4419, lng: 15.2663 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'ultron-red';
      case 'moderate':
        return 'stark-gold';
      case 'low':
        return 'vision-green';
      default:
        return 'wakanda-purple';
    }
  };

  return (
    <div className="holographic-panel">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground glow-text">Outbreak Intelligence</h2>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-stark-gold" />
          <span className="text-sm text-stark-gold font-medium">Live Updates</span>
        </div>
      </div>

      {/* Simulated map area */}
      <div className="relative bg-stark-matte rounded-lg p-4 mb-6 min-h-[300px] border border-wakanda-purple/30">
        <div className="absolute inset-0 bg-gradient-to-br from-wakanda-purple/10 to-transparent rounded-lg"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center space-y-2">
            <MapPin className="w-12 h-12 text-wakanda-purple mx-auto animate-pulse-glow" />
            <p className="text-sm text-muted-foreground">Interactive Map Loading...</p>
            <p className="text-xs text-muted-foreground">Tactical Satellite View • Live Feed</p>
          </div>
        </div>
        
        {/* Simulated outbreak markers */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-ultron-red rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-stark-gold rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-ultron-red rounded-full animate-pulse-glow"></div>
      </div>

      {/* Outbreak list */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Hotspots</h3>
        {outbreakData.map((outbreak, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full bg-${getSeverityColor(outbreak.severity)} animate-pulse`}></div>
              <div>
                <p className="text-sm font-medium text-foreground">{outbreak.city}</p>
                <p className="text-xs text-muted-foreground">{outbreak.cases} new cases</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${getSeverityColor(outbreak.severity)}/20 text-${getSeverityColor(outbreak.severity)}`}>
                {outbreak.severity.toUpperCase()}
              </span>
              <AlertTriangle className={`w-4 h-4 text-${getSeverityColor(outbreak.severity)}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutbreakHeatmap;
