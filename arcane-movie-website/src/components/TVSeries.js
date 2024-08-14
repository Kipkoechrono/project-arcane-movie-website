import React, { useState, useEffect } from 'react';
import SeriesCard from './SeriesCard';

function TVSeries() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Fetch series data from an API or use mock data
    // For now, let's use mock data
    const mockSeries = [
      { id: 1, title: "Stranger Things", image: "url-to-image", totalTickets: 100, availableTickets: 100 },
      { id: 2, title: "The Witcher", image: "url-to-image", totalTickets: 80, availableTickets: 80 },
      // Add more series here
    ];
    setSeries(mockSeries);
  }, []);

  const handleBuyTicket = (id) => {
    setSeries(series.map(s => 
      s.id === id && s.availableTickets > 0 
        ? {...s, availableTickets: s.availableTickets - 1} 
        : s
    ));
  };

  return (
    <div className="tv-series">
      <h1>TV Series</h1>
      <div className="series-list">
        {series.map(s => (
          <SeriesCard 
            key={s.id} 
            series={s} 
            onBuyTicket={() => handleBuyTicket(s.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TVSeries;