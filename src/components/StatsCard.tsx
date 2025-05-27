
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'yellow' | 'purple' | 'red';
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  color = 'blue'
}) => {
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'blue': return 'border-democracy-blue bg-democracy-blue/5 text-democracy-blue';
      case 'green': return 'border-democracy-green bg-democracy-green/5 text-democracy-green';
      case 'yellow': return 'border-democracy-yellow bg-democracy-yellow/5 text-democracy-yellow';
      case 'purple': return 'border-democracy-purple bg-democracy-purple/5 text-democracy-purple';
      case 'red': return 'border-democracy-red bg-democracy-red/5 text-democracy-red';
      default: return 'border-democracy-blue bg-democracy-blue/5 text-democracy-blue';
    }
  };

  return (
    <Card className="hover:shadow-md transition-all duration-300 animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getColorClasses(color)}`}>
          <span className="text-lg">{icon}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{description}</span>
          {trend && (
            <span className={`ml-2 flex items-center ${trend.isPositive ? 'text-democracy-green' : 'text-democracy-red'}`}>
              {trend.isPositive ? '↗' : '↘'} {trend.value}%
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
