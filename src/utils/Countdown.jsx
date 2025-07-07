import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

const Countdown = () => {
  const countDownDate = new Date("Oct 18, 2025 10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div className="CountdownContainer" data-aos="zoom-in">
        <div>
            <h4>{timeLeft.days}</h4>
            <h5 id="relojDias">Días</h5>
        </div>
        <span >:</span>
        <div>
            <h4>{timeLeft.hours}</h4>
            <h5>Horas</h5>
        </div>
        <span >:</span>
        <div>
            <h4>{timeLeft.minutes}</h4>
            <h5 id="relojMinutos">Minutos</h5>
        </div>
        <span >:</span>
        <div>
            <h4>{timeLeft.seconds}</h4>
            <h5 id="relojSegundos">Segundos</h5>
        </div>
    </div>
  );
};

export default Countdown;