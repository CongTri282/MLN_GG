
import React from 'react';
import background from '../../assets/background.webp'; // Đường dẫn đến hình nền chung
const HomePage: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <section className="relative py-20 px-4 min-h-screen flex flex-col justify-center">
        {/* Dual Background - Economy vs Environment */}
        <div className="absolute inset-0 flex">
          <div className="w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-300/10 via-indigo-400/10 to-purple-500/10"></div>
            <div className="absolute inset-0 ">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${background})`,
                  filter: 'brightness(0.7) contrast(1.2)'
                }}
              ></div>
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-3/5 mx-auto bg-white/70 backdrop-blur-3xl rounded-3xl p-10 shadow-lg ">
          <div className="text-center mb-16">
            <h1 className="text-[44px]! md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
              Quy luật Mâu thuẫn: Nền tảng của sự thay đổi và phát triển
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Mâu thuẫn là yếu tố cơ bản giúp chúng ta nhìn nhận sự phát triển của mọi thứ trong cuộc sống và xã hội.
              Từ những đối kháng nhỏ nhất, chúng ta tìm thấy cơ hội lớn nhất.
            </p>

            <div className="bg-white/70 rounded-xl p-6 border-l-4 border-indigo-500 w-max mx-auto">
              <blockquote className="text-2xl! md:text-xl italic text-indigo-800 mb-3">
                "Sự đối lập không phải là cái gì phải giải quyết ngay lập tức, mà là phần cần thiết để chúng ta phát triển."
              </blockquote>
              <cite className="text-sm text-gray-600 font-semibold">— Hegel</cite>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;