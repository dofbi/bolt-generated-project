import React, { useState } from 'react';
    import { 
      FaFilter, 
      FaGlobeAfrica, 
      FaClipboardList, 
      FaCalendarAlt,
      FaSortAlphaDown,
      FaSortNumericDown
    } from 'react-icons/fa';

    const expertiseOptions = [
      'Observation Électorale',
      'Transparence',
      'Formation Civique',
      'Monitoring Électoral',
      'Analyse Politique',
      'Éducation Civique'
    ];

    const regionOptions = [
      'Afrique du Nord',
      'Afrique de l\'Ouest',
      'Afrique Centrale',
      'Afrique de l\'Est',
      'Afrique Australe'
    ];

    const sortOptions = [
      { 
        label: 'Alphabétique', 
        value: 'alphabetic',
        icon: FaSortAlphaDown
      },
      { 
        label: 'Date de Création', 
        value: 'date',
        icon: FaSortNumericDown
      }
    ];

    interface CSOFilterProps {
      onFilterChange: (filters: {
        expertise: string[];
        regions: string[];
        yearRange: [number, number];
        sortBy: string;
      }) => void;
    }

    const CSOFilter: React.FC<CSOFilterProps> = ({ onFilterChange }) => {
      const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
      const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
      const [yearRange, setYearRange] = useState<[number, number]>([2010, new Date().getFullYear()]);
      const [sortBy, setSortBy] = useState('alphabetic');

      const updateFilters = () => {
        onFilterChange({
          expertise: selectedExpertise,
          regions: selectedRegions,
          yearRange,
          sortBy
        });
      };

      return (
        <div className="bg-white shadow-md rounded-lg p-6 sticky top-6">
          <div className="flex items-center mb-6">
            <FaFilter className="mr-2 text-africa-secondary" />
            <h2 className="text-xl font-bold text-africa-primary">Filtres OSC</h2>
          </div>

          {/* Expertise Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaClipboardList className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">Domaines d'Expertise</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {expertiseOptions.map(exp => (
                <label key={exp} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-africa-accent mr-2"
                    checked={selectedExpertise.includes(exp)}
                    onChange={() => {
                      setSelectedExpertise(prev => 
                        prev.includes(exp) 
                          ? prev.filter(e => e !== exp)
                          : [...prev, exp]
                      );
                    }}
                  />
                  <span>{exp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaGlobeAfrica className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">Régions</h3>
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

          {/* Year Range Filter */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaCalendarAlt className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">Période d'Intervention</h3>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="2000"
                max={new Date().getFullYear()}
                value={yearRange[0]}
                onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                className="w-24 border rounded px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                min="2000"
                max={new Date().getFullYear()}
                value={yearRange[1]}
                onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                className="w-24 border rounded px-2 py-1"
              />
            </div>
          </div>

          {/* Sorting */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaSortAlphaDown className="mr-2 text-africa-accent" />
              <h3 className="font-semibold text-africa-primary">Trier Par</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {sortOptions.map(option => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-africa-accent mr-2"
                    checked={sortBy === option.value}
                    onChange={() => setSortBy(option.value)}
                  />
                  <option.icon className="mr-2" />
                  <span>{option.label}</span>
                </label>
              ))}
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
                setSelectedExpertise([]);
                setSelectedRegions([]);
                setYearRange([2010, new Date().getFullYear()]);
                setSortBy('alphabetic');
                onFilterChange({
                  expertise: [],
                  regions: [],
                  yearRange: [2010, new Date().getFullYear()],
                  sortBy: 'alphabetic'
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

    export default CSOFilter;
