import React, { useState } from 'react';
    import { 
      FaFilter, 
      FaGlobeAfrica, 
      FaVoteYea, 
      FaCalendarAlt 
    } from 'react-icons/fa';

    const electionTypeOptions = [
      'Présidentielle',
      'Législative',
      'Locales',
      'Référendum'
    ];

    const regionOptions = [
      'Afrique du Nord',
      'Afrique de l\'Ouest',
      'Afrique Centrale',
      'Afrique de l\'Est',
      'Afrique Australe'
    ];

    const statusOptions = [
      'À venir',
      'En cours',
      'Terminée',
      'Contestée'
    ];

    interface ElectionFilterProps {
      onFilterChange: (filters: {
        types: string[];
        regions: string[];
        status: string[];
        yearRange: [number, number];
      }) => void;
    }

    const ElectionFilter: React.FC<ElectionFilterProps> = ({ onFilterChange }) => {
      const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
      const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
      const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
      const [yearRange, setYearRange] = useState<[number, number]>([
        2024, 
        new Date().getFullYear() + 2
      ]);

      const updateFilters = () => {
        onFilterChange({
          types: selectedTypes,
          regions: selectedRegions,
          status: selectedStatus,
          yearRange
        });
      };

      return (
        <div className="bg-white shadow-md rounded-lg p-6 sticky top-6">
          <div className="flex items-center mb-6">
            <FaFilter className="mr-2 text-africa-secondary" />
            <h2 className="text-xl font-bold text-africa-primary">
              Filtres Électoraux
            </h2>
          </div>

          {/* Election Type Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaVoteYea className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">
                Type d'Élection
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {electionTypeOptions.map(type => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-africa-accent mr-2"
                    checked={selectedTypes.includes(type)}
                    onChange={() => {
                      setSelectedTypes(prev => 
                        prev.includes(type) 
                          ? prev.filter(t => t !== type)
                          : [...prev, type]
                      );
                    }}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaGlobeAfrica className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">
                Régions
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {regionOptions.map(region => (
                <label key={region} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-africa-accent mr-2"
                    checked={selectedRegions.includes(region)}
                    onChange={() => {
                      setSelectedRegions(prev => 
                        prev.includes(region) 
                          ? prev.filter(r => r !== region)
                          : [...prev, region]
                      );
                    }}
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaVoteYea className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">
                Statut
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {statusOptions.map(status => (
                <label key={status} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-africa-accent mr-2"
                    checked={selectedStatus.includes(status)}
                    onChange={() => {
                      setSelectedStatus(prev => 
                        prev.includes(status) 
                          ? prev.filter(s => s !== status)
                          : [...prev, status]
                      );
                    }}
                  />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Year Range Filter */}
          <div>
            <div className="flex items-center mb-3">
              <FaCalendarAlt className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">
                Période
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="2024"
                max={new Date().getFullYear() + 5}
                value={yearRange[0]}
                onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                className="w-24 border rounded px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                min="2024"
                max={new Date().getFullYear() + 5}
                value={yearRange[1]}
                onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                className="w-24 border rounded px-2 py-1"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex space-x-2">
            <button
              onClick={updateFilters}
              className="flex-grow bg-africa-secondary text-white py-2 rounded hover:bg-opacity-90"
            >
              Appliquer les Filtres
            </button>
            <button
              onClick={() => {
                setSelectedTypes([]);
                setSelectedRegions([]);
                setSelectedStatus([]);
                setYearRange([2024, new Date().getFullYear() + 2]);
                onFilterChange({
                  types: [],
                  regions: [],
                  status: [],
                  yearRange: [2024, new Date().getFullYear() + 2]
                });
              }}
              className="flex-grow bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      );
    };

    export default ElectionFilter;
