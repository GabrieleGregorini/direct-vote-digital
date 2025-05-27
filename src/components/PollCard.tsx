
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PollOption {
  label: string;
  percentage: number;
  votes: number;
}

interface PollCardProps {
  id: string;
  title: string;
  description: string;
  category: 'fiscale' | 'trasporti' | 'ambiente' | 'sociale' | 'economia';
  status: 'attivo' | 'scaduto' | 'urgente';
  options: PollOption[];
  totalVotes: number;
  endDate: string;
  region?: string;
  onVote: (pollId: string) => void;
  onViewDetails: (pollId: string) => void;
}

const PollCard: React.FC<PollCardProps> = ({
  id,
  title,
  description,
  category,
  status,
  options,
  totalVotes,
  endDate,
  region,
  onVote,
  onViewDetails
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'fiscale': return 'bg-democracy-yellow text-white';
      case 'trasporti': return 'bg-democracy-green text-white';
      case 'ambiente': return 'bg-democracy-green text-white';
      case 'sociale': return 'bg-democracy-purple text-white';
      case 'economia': return 'bg-democracy-blue text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (stat: string) => {
    switch (stat) {
      case 'attivo': return 'bg-democracy-blue text-white';
      case 'urgente': return 'bg-democracy-red text-white';
      case 'scaduto': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const topOption = options.reduce((prev, current) => 
    (prev.percentage > current.percentage) ? prev : current
  );

  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2">
            <Badge className={getCategoryColor(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            <Badge className={getStatusColor(status)}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          {region && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{region}</span>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Progress for top option */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {topOption.label}
            </span>
            <span className="text-sm font-bold text-democracy-blue">
              {topOption.percentage}%
            </span>
          </div>
          <Progress 
            value={topOption.percentage} 
            className="h-2 bg-gray-200 dark:bg-gray-700"
          />
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>Partecipanti: {totalVotes.toLocaleString()}</span>
          <span>Scadenza: {endDate}</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button 
            onClick={() => onVote(id)}
            className="flex-1 bg-democracy-blue hover:bg-democracy-blue/90 text-white"
            disabled={status === 'scaduto'}
          >
            {status === 'scaduto' ? 'Scaduto' : 'Partecipa'}
          </Button>
          <Button 
            onClick={() => onViewDetails(id)}
            variant="outline"
            className="flex-1 border-democracy-blue text-democracy-blue hover:bg-democracy-blue/10"
          >
            Dettagli
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PollCard;
