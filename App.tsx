
import React, { useState, useRef } from 'react';

const FootballIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.93c-1.94-.49-3.6-1.63-4.68-3.14l1.62-1.62c.79 1.01 1.9
    2.03 3.06 2.47V18.93zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0
    8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.07-6.32c-1.01-.79-2.03-1.9-2.47-3.06H15.22l1.62 1.62c.51 1.08.65 2.42.37 3.68l-1.14-.24zm.25
    5.18c-1.12.92-2.45 1.55-3.92 1.7V15.5c.98-.32 1.87-1.04 2.45-1.95l1.47 1.47zM8.93 7.32c1.01.79 2.03 1.9 2.47 3.06H9.78L8.16 8.76c-.51-1.08-.65-2.42-.37-3.68l1.14.24zM8.16
    15.24c-1.12-.92-2.45-1.55-3.92-1.7V11.5c-.98.32-1.87 1.04-2.45 1.95l-1.47-1.47c1.08-1.5 2.74-2.65 4.68-3.14v2.06c-1.13.44-2.15 1.46-2.94
    2.47l1.46 1.46z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </svg>
);

const App: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCircleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <style>
          {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          `}
        </style>

        <div className="relative z-10 w-full max-w-md bg-gray-800/50 backdrop-blur-xl border border-gray-600/50 rounded-2xl shadow-2xl shadow-black/50 text-center p-8 transform transition-all duration-500 hover:scale-105">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                aria-hidden="true"
            />
            <div className="flex justify-center mb-6">
                <div
                    className="p-4 bg-green-500/10 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={handleCircleClick}
                    title="تغيير الصورة"
                    aria-label="Upload profile image"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCircleClick()}
                >
                  {imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt="Profile" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <FootballIcon className="w-16 h-16 text-green-400" />
                  )}
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300 mb-3">
                محتوى كروي استثنائي
            </h1>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                تابعوا قناتنا على انستقرام واستمتعوا بأفضل التحليلات، الأهداف، واللحظات الكروية الرائعة.
            </p>

            <div className="bg-gray-900/60 rounded-lg p-4 mb-8">
                <p className="text-gray-400 text-sm">حسابنا على انستقرام</p>
                <p className="text-xl font-bold text-white tracking-widest">
                    @abdallah.score.football
                </p>
            </div>

            <a 
                href="https://www.instagram.com/abdallah.score.football"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-800/40 hover:shadow-2xl hover:shadow-green-500/40"
            >
                <InstagramIcon className="w-6 h-6 ml-3 transform transition-transform duration-300 group-hover:rotate-[-15deg]"/>
                تابعنا الآن
            </a>
        </div>
    </div>
  );
};

export default App;
