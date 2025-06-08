
import React from 'react';
import { Star, Users, MapPin, Clock } from 'lucide-react';

type MissionCardProps = {
  title: string;
  description: string;
  reward: string;
  difficulty: 'rookie' | 'hero' | 'avenger';
  participants: number;
  location: string;
  timeLeft: string;
  completed?: boolean;
};

export const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  reward,
  difficulty,
  participants,
  location,
  timeLeft,
  completed = false
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'rookie':
        return 'vision-green';
      case 'hero':
        return 'stark-gold';
      case 'avenger':
        return 'ultron-red';
      default:
        return 'wakanda-purple';
    }
  };

  const getDifficultyStars = () => {
    const starCount = difficulty === 'rookie' ? 1 : difficulty === 'hero' ? 2 : 3;
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < starCount ? `text-${getDifficultyColor()} fill-current` : 'text-muted'}`}
      />
    ));
  };

  return (
    <div className={`hero-card group cursor-pointer transition-all duration-300 hover:scale-105 ${completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-foreground glow-text">{title}</h3>
            {completed && (
              <span className="px-2 py-1 rounded-full bg-vision-green/20 text-vision-green text-xs font-medium">
                COMPLETED
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 mb-3">
            {getDifficultyStars()}
            <span className={`text-xs font-medium text-${getDifficultyColor()} ml-2`}>
              {difficulty.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{participants} participants</span>
          </div>
          <span className="text-stark-gold font-medium">{reward}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{timeLeft}</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        {!completed ? (
          <>
            <button className="flex-1 py-2 px-3 rounded-md bg-wakanda-purple/20 text-wakanda-purple text-sm font-medium hover:bg-wakanda-purple/30 transition-colors">
              Accept Mission
            </button>
            <button className="flex-1 py-2 px-3 rounded-md bg-muted/20 text-muted-foreground text-sm font-medium hover:bg-muted/30 transition-colors">
              View Details
            </button>
          </>
        ) : (
          <button className="w-full py-2 px-3 rounded-md bg-vision-green/20 text-vision-green text-sm font-medium">
            Mission Complete
          </button>
        )}
      </div>
    </div>
  );
};
