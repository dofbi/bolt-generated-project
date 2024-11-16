import React from 'react';
    import { 
      FaGlobe as Globe, 
      FaBalanceScale as Balance, 
      FaUsers as Users, 
      FaChartLine as ChartLine,
      FaMapMarkerAlt as MapMarker,
      FaEnvelope as Envelope,
      FaPhone as Phone,
      FaSearch as Search
    } from 'react-icons/fa';

    type IconName = 
      | 'globe' 
      | 'balance' 
      | 'users' 
      | 'chart' 
      | 'map' 
      | 'email' 
      | 'phone'
      | 'search';

    interface IconProps {
      name: IconName;
      className?: string;
    }

    const iconMap = {
      globe: Globe,
      balance: Balance,
      users: Users,
      chart: ChartLine,
      map: MapMarker,
      email: Envelope,
      phone: Phone,
      search: Search
    };

    const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
      const IconComponent = iconMap[name];
      
      if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
      }

      return <IconComponent className={className} />;
    };

    export default Icon;
