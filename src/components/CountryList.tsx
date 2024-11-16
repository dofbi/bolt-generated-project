import React from 'react';

    interface Country {
      code: string;
      name: string;
      lastElection: {
        type: string;
        year: number;
        nextElectionYear: number;
      };
      electoralFramework: {
        constitution: string;
        electoralCode: string;
      };
    }

    interface CountryListProps {
      countries: Country[];
    }

    const CountryList: React.FC<CountryListProps> = ({ countries }) => {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <div 
              key={country.code} 
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-africa-secondary mb-2">
                {country.name}
              </h2>
              <div className="text-sm">
                <p>
                  <strong>Dernière Élection:</strong> {country.lastElection.type} ({country.lastElection.year})
                </p>
                <p>
                  <strong>Prochaine Élection:</strong> {country.lastElection.nextElectionYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    };

    export default CountryList;
