import { useState } from 'react';
import WelcomeCard from './WelcomeCard';
import LoginCard from './SignInForm';
import RegisterCard from './SignUpForm';

export default function AuthSwitcher() {
  const [mode, setMode] = useState('welcome');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (newMode) => {
    if (mode === newMode) return;

    setIsAnimating(true);
    setTimeout(() => {
      setMode(newMode);
      setIsAnimating(false);
    }, 300); // Thời gian animation
  };

  return (
    <div className="bg-white/85 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
        }`}
        style={{ transform: 'translateX(0)' }}
      >
 
        {mode === 'welcome' && (
          <div
            className={`${
              isAnimating ? 'animate-slide-out-left' : 'animate-slide-in-right'
            }`}
          >
            <WelcomeCard
              onLogin={() => handleSwitch('login')}
              onRegister={() => handleSwitch('register')}
            />
          </div>
        )}

        {mode === 'login' && (
          <div
            className={`${
              isAnimating ? 'animate-slide-out-right' : 'animate-slide-in-left'
            }`}
          >
            <LoginCard
              onBack={() => handleSwitch('welcome')}
              onSwitchToRegister={() => handleSwitch('register')}
            />
          </div>
        )}

        {mode === 'register' && (
          <div
            className={`${
              isAnimating ? 'animate-slide-out-right' : 'animate-slide-in-left'
            }`}
          >
            <RegisterCard
              onBack={() => handleSwitch('welcome')}
              onSwitchToLogin={() => handleSwitch('login')}
            />
          </div>
        )}
      </div>
    </div>
  );
}