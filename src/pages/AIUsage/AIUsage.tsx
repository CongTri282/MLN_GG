import React from 'react';
import SEO from '../../components/SEO/SEO';

const AIUsage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sử Dụng AI Trong Phát Triển Game Quy Luật Mâu Thuẫn",
    "description": "Tìm hiểu cách AI được sử dụng trong quá trình phát triển game giáo dục về quy luật mâu thuẫn, bao gồm các công cụ AI và phương pháp ứng dụng.",
    "author": {
      "@type": "Organization",
      "name": "MLN Education Platform"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MLN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mln-game.com/logo.png"
      }
    },
    "datePublished": "2025-09-22",
    "dateModified": "2025-09-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mln-game.com/ai-usage"
    },
    "articleSection": "AI Technology",
    "keywords": ["AI trong giáo dục", "Claude Sonnet", "phát triển game", "công nghệ AI", "trí tuệ nhân tạo"]
  };

  const aiToolsUsed = [
    {
      name: "Claude Sonnet 4",
      description: "AI assistant được sử dụng để phát triển toàn bộ dự án game 'Quy Luật Mâu Thuẫn'",
      icon: "🤖",
      category: "Development Assistant",
      usage: [
        "Thiết kế kiến trúc ứng dụng React + TypeScript",
        "Tạo nội dung game scenarios và storylines",
        "Viết code components và logic game",
        "Thiết kế UI/UX với Tailwind CSS"
      ]
    },
    {
      name: "Cursor AI",
      description: "AI-powered code editor hỗ trợ trong quá trình coding và debugging",
      icon: "⚡",
      category: "Code Editor",
      usage: [
        "Code completion và suggestions",
        "Refactoring và optimization",
        "Debug và fix lỗi syntax",
        "Generate boilerplate code"
      ]
    }
  ];

  const projectDetails = {
    name: "Quy Luật Mâu Thuẫn - Môi Trường vs Kinh Tế",
    description: "Một game tương tác dạy về triết học thông qua việc đưa ra các quyết định cân bằng giữa phát triển kinh tế và bảo vệ môi trường",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    features: [
      "10 scenarios thực tế về mâu thuẫn môi trường-kinh tế",
      "Hệ thống scoring và tracking choices",
      "Responsive design cho mọi thiết bị",
      "Game state management với localStorage"
    ]
  };

  const academicIntegrity = {
    principles: [
      {
        title: "Transparency",
        description: "Công khai minh bạch về việc sử dụng AI trong quá trình phát triển",
        source: "IEEE Standards for AI Ethics (2023)"
      },
      {
        title: "Human Oversight",
        description: "Duy trì sự giám sát của con người trong mọi quyết định quan trọng",
        source: "UNESCO Recommendation on AI Ethics (2021)"
      },
      {
        title: "Educational Purpose",
        description: "AI được sử dụng để enhance learning, không thay thế critical thinking",
        source: "MIT AI Ethics Guidelines (2022)"
      }
    ],
    sources: [
      {
        title: "IEEE Standards for AI Ethics",
        url: "https://standards.ieee.org/ieee/2859/10451/",
        description: "Tiêu chuẩn quốc tế về đạo đức AI trong phát triển phần mềm"
      },
      {
        title: "UNESCO Recommendation on AI Ethics",
        url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics",
        description: "Khuyến nghị của UNESCO về đạo đức AI trong giáo dục"
      },
      {
        title: "MIT AI Ethics Guidelines",
        url: "https://www.media.mit.edu/ai-ethics/",
        description: "Hướng dẫn đạo đức AI của MIT cho nghiên cứu và giáo dục"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">AI Usage trong Dự Án</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Minh bạch về việc sử dụng AI trong phát triển dự án "Quy Luật Mâu Thuẫn"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">🤖 AI Tools</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📚 Academic Integrity</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🔍 Transparency</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tổng Quan Dự Án</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{projectDetails.name}</h3>
                <p className="text-gray-600 mb-6">{projectDetails.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {projectDetails.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectDetails.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Mục tiêu giáo dục:</h4>
                  <p className="text-sm text-gray-600">
                    Giúp người học hiểu về quy luật mâu thuẫn trong triết học thông qua
                    việc trải nghiệm các tình huống thực tế và đưa ra quyết định có trách nhiệm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools Used Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">AI Tools Đã Sử Dụng</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiToolsUsed.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{tool.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{tool.name}</h3>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Cách sử dụng trong dự án:</h4>
                  <ul className="space-y-2">
                    {tool.usage.map((use, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-indigo-500 mr-2 mt-1">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Integrity Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-400">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📚 Cam Kết Liêm Chính Học Thuật</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {academicIntegrity.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{principle.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{principle.description}</p>
                  <div className="text-xs text-gray-500 italic">
                    Nguồn: {principle.source}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tài Liệu Tham Khảo</h3>
              <div className="space-y-3">
                {academicIntegrity.sources.map((source, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-gray-700">{source.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{source.description}</p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      {source.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-400">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Quy Trình Phát Triển</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Giai đoạn 1: Thiết kế & Lập kế hoạch</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Sử dụng Claude để brainstorm ý tưởng game concept
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Thiết kế game mechanics và scoring system
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Tạo wireframes và user flow
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Giai đoạn 2: Phát triển & Testing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Sử dụng Cursor AI để code React components
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Generate content cho game scenarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    Debug và optimize performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Kết Luận</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Dự án này minh chứng cho việc sử dụng AI một cách có trách nhiệm trong giáo dục.
            AI đã được sử dụng như một công cụ hỗ trợ để tạo ra nội dung giáo dục có ý nghĩa,
            đồng thời duy trì tính liêm chính học thuật và sự giám sát của con người.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">🎯 Educational Purpose</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🤝 Human-AI Collaboration</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">📖 Academic Integrity</span>
          </div>
        </section>
      </div>

      <SEO
        title="Sử Dụng AI Trong Phát Triển Game Giáo Dục | MLN - Quy Luật Mâu Thuẫn"
        description="Tìm hiểu cách AI được sử dụng trong quá trình phát triển game giáo dục về quy luật mâu thuẫn, bao gồm các công cụ AI và phương pháp ứng dụng có trách nhiệm."
        keywords="AI trong giáo dục, Claude Sonnet, phát triển game, công nghệ AI, trí tuệ nhân tạo, AI có trách nhiệm, giáo dục số"
        ogUrl="https://mln-game.com/ai-usage"
        canonical="https://mln-game.com/ai-usage"
        type="article"
        structuredData={structuredData}
      />
    </div>
  );
};

export default AIUsage;