import React from 'react';
    import { 
      FaCalendar, 
      FaFlag, 
      FaUsers, 
      FaCheckCircle 
    } from 'react-icons/fa';

    interface ElectionCardProps {
      election: {
        id: string;
        country: string;
        type: string;
        date: string;
        status: string;
        candidates?: number;
        observingOrgs?: number;
        turnout?: number;
        winner?: string;
        challenges?: boolean;
      };
      variant?: 'upcoming' | 'recent';
    }

    const ElectionCard: React.FC<ElectionCardProps> = ({ 
      election, 
      variant = 'upcoming' 
    }) => {
      const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      };

      return (
        <div className={`
          bg-white shadow-md rounded-lg p-6 
          ${variant === 'upcoming' 
            ? 'border-l-4 border-africa-secondary' 
            : 'border-l-4 border-africa-accent'}
        `}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaFlag className="mr-3 text-africa-primary" />
              <h2 className="text-2xl font-bold text-africa-primary">
                {election.country}
              </h2>
            </div>
            {election.challenges && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                Contesté
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaCalendar className="mr-2 text-africa-secondary" />
              <div>
                <span className="text-sm text-gray-600">Date</span>
                <p className="font-semibold">{formatDate(election.date)}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaUsers className="mr-2 text-africa-accent" />
              <div>
                <span className="text-sm text-gray-600">Type</span>
                <p className="font-semibold">{election.type}</p>
              </div>
            </div>

            {variant === 'upcoming' && (
              <>
                <div className="flex items-center">
                  <FaUsers className="mr-2 text-africa-secondary" />
                  <div>
                    <span className="text-sm text-gray-600">Candidats</span>
                    <p className="font-semibold">{election.candidates}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-africa-accent" />
                  <div>
                    <span className="text-sm text-gray-600">Statut</span>
                    <p className="font-semibold">{election.status}</p>
                  </div>
                </div>
              </>
            )}

            {variant === 'recent' && (
              <>
                <div className="flex items-center">
                  <FaUsers className="mr-2 text-africa-secondary" />
                  <div>
                    <span className="text-sm text-gray-600">Participation</span>
                    <p className="font-semibold">{election.turnout}%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-africa-accent" />
                  <div>
                    <span className="text-sm text-gray-600">Vainqueur</span>
                    <p className="font-semibold">{election.winner}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      );
    };

    export default ElectionCard;
