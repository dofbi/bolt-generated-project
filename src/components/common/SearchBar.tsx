import React, { useState } from 'react';
    import Icon from './Icon';

    interface SearchBarProps {
      placeholder?: string;
      onSearch: (query: string) => void;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ 
      placeholder = "Rechercher...",
      onSearch 
    }) => {
      const [query, setQuery] = useState('');

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
      };

      return (
        <form onSubmit={handleSubmit} className="relative mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
          />
          <Icon 
            name="search" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </form>
      );
    };

    export default SearchBar;
