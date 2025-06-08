
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Activity, 
  BarChart3, 
  Globe, 
  Users, 
  Settings, 
  Brain, 
  Zap,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Command Center', icon: Shield },
    { path: '/analytics', name: 'Analytics Hub', icon: BarChart3 },
    { path: '/operations', name: 'Global Ops', icon: Globe },
    { path: '/intelligence', name: 'AI Intelligence', icon: Brain },
    { path: '/research', name: 'R&D Labs', icon: Zap },
    { path: '/team', name: 'Team Portal', icon: Users },
    { path: '/settings', name: 'System Config', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-wakanda-purple/20 text-wakanda-purple"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-stark-matte/95 backdrop-blur-xl border-r border-wakanda-purple/30 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-wakanda-purple animate-pulse-glow" />
            <div>
              <h1 className="text-xl font-bold text-foreground glow-text">NEXUS CORE</h1>
              <p className="text-xs text-muted-foreground">Ultra-Tech Platform</p>
            </div>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${active 
                      ? 'bg-wakanda-purple/20 text-wakanda-purple border border-wakanda-purple/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-vision-green/10">
              <Activity className="w-4 h-4 text-vision-green" />
              <span className="text-xs font-medium text-vision-green">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
