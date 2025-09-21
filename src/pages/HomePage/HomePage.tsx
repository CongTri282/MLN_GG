
import React from 'react';
import environmentBg from '../../assets/environment-bg.jpg'; // Đường dẫn đến hình môi trường
import economyBg from '../../assets/economy-bg.jpg'; // Đường dẫn đến hình kinh tế

const HomePage: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <section className="relative py-20 px-4 min-h-screen flex flex-col justify-center">
        {/* Dual Background - Economy vs Environment */}
        <div className="absolute inset-0 flex">
          {/* Environment Side (Left) */}
          <div className="w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/15 via-emerald-400/10 to-teal-500/20"></div>
            {/* Environment Background Image */}
            <div className="absolute inset-0 opacity-60">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${environmentBg})`,
                  filter: 'brightness(0.7) contrast(1.2)'
                }}
              ></div>
            </div>
          </div>

          {/* Economy Side (Right) */}
          <div className="w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-300/15 via-indigo-400/10 to-purple-500/20"></div>
            {/* Economy Background Image */}
            <div className="absolute inset-0 opacity-60">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${economyBg})`,
                  filter: 'brightness(0.7) contrast(1.2)'
                }}
              ></div>
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Center Dividing Line with Balance Symbol */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-purple-300">
              <span className="text-2xl animate-spin-slow">⚖️</span>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/80 backdrop-blur-3xl rounded-3xl p-10 shadow-lg ">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
              Quy Luật Mâu Thuẫn
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Khám phá sự cân bằng giữa <span className="font-semibold text-green-600">Môi Trường</span> và
              <span className="font-semibold text-blue-600"> Kinh Tế</span> thông qua trải nghiệm tương tác
            </p>


            {/* Contradiction Visualization */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-green-500 hover:bg-white/90 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">🌍</span>
                  <h3 className="text-xl font-semibold text-green-700">Bảo Vệ Môi Trường</h3>
                </div>
                <p className="text-gray-600 text-sm">Bảo tồn thiên nhiên, giảm ô nhiễm, phát triển bền vững cho thế hệ tương lai</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-blue-500 hover:bg-white/90 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">💼</span>
                  <h3 className="text-xl font-semibold text-blue-700">Phát Triển Kinh Tế</h3>
                </div>
                <p className="text-gray-600 text-sm">Tăng trưởng, tạo việc làm, nâng cao mức sống và khả năng cạnh tranh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;