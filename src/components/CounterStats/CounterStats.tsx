import React, { useState, useEffect, type ReactNode } from 'react';
import './CounterStats.css';

interface CounterStatsProps {
  finalNumber: number;
  label: string;
  symbol?: string;
  duration?: number;
  icon?: ReactNode;
}

const CounterStats: React.FC<CounterStatsProps> = ({ finalNumber, label, symbol, icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = finalNumber / 2;
    const end = finalNumber;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(Math.ceil(end));
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [finalNumber, duration]);

  return (
    <div className="counter-stats-card">
      <div className='counter-icon'>
        {icon}
      </div>
      <div className="counter-stats-number">
        {count}
        {symbol}
      </div>
      <div className="counter-stats-label">{label}</div>
    </div>
  );
};

export default CounterStats;
