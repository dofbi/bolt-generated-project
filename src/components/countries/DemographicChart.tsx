import React from 'react';

    interface DemographicChartProps {
      demographics: {
        ageGroups: {
          group: string;
          percentage: number;
        }[];
        gender: {
          male: number;
          female: number;
        };
        voterRegistration: {
          registered: number;
          eligible: number;
        };
      };
    }

    const DemographicChart: React.FC<DemographicChartProps> = ({ demographics }) => {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Genre */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-[#2C3E50]">
              Répartition par Genre
            </h3>
            <div className="flex justify-between">
              <div className="text-center w-1/2">
                <div className="text-3xl font-bold text-[#3498DB]">
                  {demographics.gender.male}%
                </div>
                <div className="text-gray-600">Hommes</div>
              </div>
              <div className="text-center w-1/2">
                <div className="text-3xl font-bold text-[#E74C3C]">
                  {demographics.gender.female}%
                </div>
                <div className="text-gray-600">Femmes</div>
              </div>
            </div>
          </div>

          {/* Groupes d'Âge */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-[#2C3E50]">
              Groupes d'Âge
            </h3>
            <div className="space-y-2">
              {demographics.ageGroups.map(group => (
                <div key={group.group} className="flex items-center">
                  <div className="w-1/2 text-gray-600">{group.group}</div>
                  <div className="w-1/2">
                    <div 
                      className="bg-[#27AE60] h-2 rounded-full" 
                      style={{ width: `${group.percentage}%` }}
                    ></div>
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    {group.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inscription Électorale */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-[#2C3E50]">
              Inscription Électorale
            </h3>
            <div className="flex justify-between">
              <div className="text-center w-1/2">
                <div className="text-3xl font-bold text-[#3498DB]">
                  {demographics.voterRegistration.registered}
                </div>
                <div className="text-gray-600">Inscrits</div>
              </div>
              <div className="text-center w-1/2">
                <div className="text-3xl font-bold text-[#2ECC71]">
                  {demographics.voterRegistration.eligible}
                </div>
                <div className="text-gray-600">Éligibles</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-[#3498DB] h-2 rounded-full" 
                style={{ 
                  width: `${
                    (demographics.voterRegistration.registered / 
                     demographics.voterRegistration.eligible) * 100
                  }%` 
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    };

    export default DemographicChart;
