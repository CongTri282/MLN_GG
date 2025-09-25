
import React from 'react';
import background from '../../assets/background.webp'; // Đường dẫn đến hình nền chung
import SEO from '../../components/SEO/SEO';
const HomePage: React.FC = () => {
  // Structured data for HomePage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quy Luật Mâu Thuẫn - Nền Tảng Của Sự Thay Đổi Và Phát Triển",
    "description": "Tìm hiểu quy luật mâu thuẫn trong triết học biện chứng duy vật. Khám phá sự tương tác giữa các yếu tố đối lập trong tự nhiên, xã hội và tư duy con người thông qua trò chơi tương tác.",
    "url": "https://mln-game.com",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "MLN - Quy Luật Mâu Thuẫn",
      "description": "Nền tảng học tập triết học biện chứng duy vật thông qua trò chơi tương tác",
      "url": "https://mln-game.com",
      "educationalAlignment": {
        "@type": "AlignmentObject",
        "alignmentType": "teaches",
        "educationalFramework": "Triết học Biện chứng duy vật",
        "targetName": "Quy luật mâu thuẫn"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://mln-game.com"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO
        title="Quy Luật Mâu Thuẫn - Nền Tảng Của Sự Thay Đổi Và Phát Triển | Triết Học Biện Chứng"
        description="Tìm hiểu quy luật mâu thuẫn trong triết học biện chứng duy vật. Khám phá sự tương tác giữa các yếu tố đối lập trong tự nhiên, xã hội và tư duy con người thông qua trò chơi tương tác."
        keywords="quy luật mâu thuẫn, triết học biện chứng, duy vật biện chứng, mâu thuẫn xã hội, triết học Hegel, phát triển xã hội, tư duy biện chứng, môi trường và kinh tế, trò chơi giáo dục"
        ogUrl="https://mln-game.com"
        canonical="https://mln-game.com"
        structuredData={structuredData}
      />
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
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
                Quy luật Mâu thuẫn: Nền tảng của sự thay đổi và phát triển
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Mâu thuẫn là yếu tố cơ bản giúp chúng ta nhìn nhận sự phát triển của mọi thứ trong cuộc sống và xã hội.
                Từ những đối kháng nhỏ nhất, chúng ta tìm thấy cơ hội lớn nhất.
              </p>

              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border-l-4 border-indigo-500 mx-auto max-w-4xl overflow-hidden">
                <blockquote className="text-lg sm:text-base md:text-sm lg:text-base xl:text-lg italic text-indigo-800 mb-3 leading-relaxed md:whitespace-nowrap md:overflow-hidden md:text-ellipsis lg:whitespace-normal">
                  "Mâu thuẫn là nguồn gốc của mọi vận động và sức sống; chỉ có mâu thuẫn mới sinh ra cái mới."
                </blockquote>
                <cite className="text-xs sm:text-sm text-gray-600 font-semibold">Khoa học Logic - Hegel</cite>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;