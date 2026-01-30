import { useEffect, useState } from 'react';

interface SeasonalEffectsProps {
  disabled?: boolean;
}

export default function SeasonalEffects({ disabled = false }: SeasonalEffectsProps) {
  const [season, setSeason] = useState<'winter' | 'monsoon' | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme and only show effects in dark mode
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (disabled || !isDark) {
      setSeason(null);
      return;
    }

    const month = new Date().getMonth(); // 0-11
    
    // Winter: December (11), January (0), February (1)
    if (month === 11 || month === 0 || month === 1) {
      setSeason('winter');
    }
    // Monsoon: June (5), July (6), August (7), September (8)
    else if (month >= 5 && month <= 8) {
      setSeason('monsoon');
    } else {
      setSeason(null);
    }
  }, [disabled]);

  useEffect(() => {
    if (!season) {
      setParticles([]);
      return;
    }

    const particleCount = season === 'winter' ? 50 : 100;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: season === 'winter' ? 10 + Math.random() * 5 : 1 + Math.random() * 2,
    }));
    
    setParticles(newParticles);
  }, [season]);

  if (!season || disabled || !isDark) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
      {season === 'winter' &&
        particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-snowfall"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              top: '-10px',
            }}
          />
        ))}
      
      {season === 'monsoon' &&
        particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-0.5 h-8 bg-blue-400 opacity-30 animate-rainfall"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              top: '-40px',
            }}
          />
        ))}
    </div>
  );
}
