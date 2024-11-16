import React from 'react';
    import { FaFlag, FaUsers, FaVoteYea, FaBalanceScale } from 'react-icons/fa';

    interface CountryCardProps {
      country: {
        code: string;
        name: string;
        population: number;
        lastElection: {
          type: string;
          year: number;
          turnout: number;
        };
        politicalSystem: string;
      };
    }

    const formatNumber = (num: number) => 
      new Intl.NumberFormat('fr-FR').format(num);

    const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
      return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <FaFlag className="text-africa-secondary mr-3 text-3xl" />
            <h2 className="text-2xl font-bold text-africa-primary">
              {country.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaUsers className="mr-2 text-africa-accent" />
              <div>
                <span className="text-sm text-gray-600">Population</span>
                <p className="font-semibold">{formatNumber(country.population)}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaVoteYea className="mr-2 text-africa-accent" />
              <div>
                <span className="text-sm text-gray-600">Dernière Élection</span>
                <p className="font-semibold">
                  {country.lastElection.type} ({country.lastElection.year})
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaBalanceScale className="mr-2 text-africa-accent" />
              <div>
                <span className="text-sm text-gray-600">Système Politique</span>
                <p className="font-semibold">{country.politicalSystem}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaVoteYea className="mr-2 text-africa-accent" />
              <div>
                <span className="text-sm text-gray-600">Participation</span>
                <p className="font-semibold">
                  {country.lastElection.turnout}%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <a 
              href={`/countries/${country.code}`} 
              className="bg-africa-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Détails
            </a>
            <button 
              className="bg-africa-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Élections
            </button>
          </div>
        </div>
      );
    };

    export default CountryCard;
