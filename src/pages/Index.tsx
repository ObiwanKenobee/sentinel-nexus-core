
import React from 'react';
import { Shield, Activity, Users, TrendingUp } from 'lucide-react';
import { HeroCard } from '@/components/HeroCard';
import ThreatOverview from '@/components/ThreatOverview';
import OutbreakHeatmap from '@/components/OutbreakHeatmap';
import { MissionCard } from '@/components/MissionCard';

const Index = () => {
  const heroAgents = [
    {
      name: "Agent Fury",
      status: "online" as const,
      region: "East Africa",
      threatLevel: "moderate" as const,
      activeAlerts: 12,
      lastUpdate: "1 min ago"
    },
    {
      name: "Agent Romanoff",
      status: "online" as const,
      region: "West Africa",
      threatLevel: "high" as const,
      activeAlerts: 8,
      lastUpdate: "3 min ago"
    },
    {
      name: "Agent Rogers",
      status: "standby" as const,
      region: "North Africa",
      threatLevel: "low" as const,
      activeAlerts: 3,
      lastUpdate: "15 min ago"
    },
    {
      name: "Agent Banner",
      status: "offline" as const,
      region: "Southern Africa",
      threatLevel: "moderate" as const,
      activeAlerts: 0,
      lastUpdate: "2 hours ago"
    }
  ];

  const activeMissions = [
    {
      title: "Stark-level Scout",
      description: "Report and verify 10 symptom clusters in your region for enhanced surveillance intelligence.",
      reward: "500 XP + Digital Badge",
      difficulty: "rookie" as const,
      participants: 1247,
      location: "Nairobi Metro",
      timeLeft: "2 days"
    },
    {
      title: "Fury Finder",
      description: "Confirm and validate 5 positive case clusters using our advanced diagnostic protocols.",
      reward: "1000 XP + Rare Badge",
      difficulty: "hero" as const,
      participants: 89,
      location: "Lagos District",
      timeLeft: "5 days"
    },
    {
      title: "Wakanda Beacon",
      description: "Establish a rural surveillance node station to extend our monitoring network reach.",
      reward: "2000 XP + Legendary Status",
      difficulty: "avenger" as const,
      participants: 23,
      location: "Remote Areas",
      timeLeft: "1 week"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-wakanda-purple animate-pulse-glow" />
          <div>
            <h1 className="text-3xl font-bold text-foreground glow-text">Command Center</h1>
            <p className="text-muted-foreground">S.H.I.E.L.D. Global Operations Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-wakanda-purple/20">
            <Activity className="w-4 h-4 text-wakanda-purple" />
            <span className="text-sm font-medium text-wakanda-purple">OPERATIONAL</span>
          </div>
          <button className="stark-button">
            Deploy Mission
          </button>
        </div>
      </div>

      {/* Threat Overview */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-stark-gold" />
          <h2 className="text-2xl font-bold text-foreground glow-text">Global Threat Assessment</h2>
        </div>
        <ThreatOverview />
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Outbreak Map */}
        <div className="lg:col-span-2">
          <OutbreakHeatmap />
        </div>

        {/* Hero Agents */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-wakanda-purple" />
            <h2 className="text-xl font-bold text-foreground glow-text">Field Agents</h2>
          </div>
          <div className="space-y-4">
            {heroAgents.slice(0, 2).map((agent, index) => (
              <HeroCard key={index} {...agent} />
            ))}
          </div>
        </div>
      </div>

      {/* Active Missions */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-stark-gold" />
            <h2 className="text-2xl font-bold text-foreground glow-text">Citizen Missions</h2>
          </div>
          <button className="px-4 py-2 rounded-lg bg-wakanda-purple/20 text-wakanda-purple text-sm font-medium hover:bg-wakanda-purple/30 transition-colors">
            View All Missions
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMissions.map((mission, index) => (
            <MissionCard key={index} {...mission} />
          ))}
        </div>
      </section>

      {/* Additional Hero Agents */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <Users className="w-6 h-6 text-wakanda-purple" />
          <h2 className="text-2xl font-bold text-foreground glow-text">Extended Team Roster</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroAgents.map((agent, index) => (
            <HeroCard key={index} {...agent} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
