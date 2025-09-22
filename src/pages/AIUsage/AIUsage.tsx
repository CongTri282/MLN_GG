import React from 'react';

const AIUsage: React.FC = () => {
  const aiToolsUsed = [
    {
      name: "Claude Sonnet 4",
      description: "AI assistant được sử dụng để phát triển toàn bộ dự án game 'Quy Luật Mâu Thuẫn'",
      icon: "🤖",
      category: "Development Assistant",
      definition: "Large Language Model (LLM) được phát triển bởi Anthropic, có khả năng hiểu và tạo ra nội dung văn bản phức tạp",
      definitionSource: "Anthropic. (2024). Claude 3.5 Sonnet. https://www.anthropic.com/claude",
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
      definition: "Intelligent code editor sử dụng AI để cung cấp code completion, refactoring và debugging assistance",
      definitionSource: "Cursor. (2024). AI Code Editor. https://cursor.sh/",
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
    techStack: [
      { name: "React 19", source: "https://react.dev/blog/2024/12/05/react-19" },
      { name: "TypeScript", source: "https://www.typescriptlang.org/docs/" },
      { name: "Vite", source: "https://vitejs.dev/guide/" },
      { name: "Tailwind CSS", source: "https://tailwindcss.com/docs" },
      { name: "React Router", source: "https://reactrouter.com/en/main" }
    ],
    features: [
      "10 scenarios thực tế về mâu thuẫn môi trường-kinh tế",
      "Hệ thống scoring và tracking choices",
      "Responsive design cho mọi thiết bị",
      "Game state management với localStorage"
    ],
    definitions: {
      "Quy Luật Mâu Thuẫn": {
        definition: "Quy luật thống nhất và đấu tranh của các mặt đối lập - một trong ba quy luật cơ bản của phép biện chứng duy vật và là quy luật quan trọng nhất, là hạt nhân của phép biện chứng. Quy luật này vạch ra nguồn gốc, động lực của sự vận động, phát triển",
        source: "Wikipedia - Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
        url: "https://vi.wikipedia.org/wiki/Quy_lu%E1%BA%ADt_th%E1%BB%91ng_nh%E1%BA%A5t_v%C3%A0_%C4%91%E1%BA%A5u_tranh_gi%E1%BB%AFa_c%C3%A1c_m%E1%BA%B7t_%C4%91%E1%BB%91i_l%E1%BA%ADp",
        quote: "Nguồn gốc của sự phát triển chính là mâu thuẫn và việc giải quyết mâu thuẫn nội tại trong bản thân mỗi sự vật, hiện tượng."
      },
    }
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
      },
      {
        title: "React Documentation",
        url: "https://react.dev/",
        description: "Tài liệu chính thức của React framework"
      },
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/",
        description: "Hướng dẫn sử dụng TypeScript programming language"
      },
      {
        title: "Wikipedia - Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
        url: "https://vi.wikipedia.org/wiki/Quy_lu%E1%BA%ADt_th%E1%BB%91ng_nh%E1%BA%A5t_v%C3%A0_%C4%91%E1%BA%A5u_tranh_gi%E1%BB%AFa_c%C3%A1c_m%E1%BA%B7t_%C4%91%E1%BB%91i_l%E1%BA%ADp",
        description: "Bài viết Wikipedia tiếng Việt về quy luật mâu thuẫn trong triết học Mác-Lênin"
      },
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
                <div className="space-y-2 mb-6">
                  {projectDetails.techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-indigo-50 rounded-lg p-3">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech.name}
                      </span>
                      <a 
                        href={tech.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-600 hover:text-indigo-800 underline"
                      >
                        Nguồn
                      </a>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Mục tiêu giáo dục:</h4>
                  <p className="text-sm text-gray-600">
                    Giúp người học hiểu về quy luật mâu thuẫn trong triết học thông qua 
                    việc trải nghiệm các tình huống thực tế và đưa ra quyết định có trách nhiệm.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Định nghĩa các thuật ngữ:</h4>
                  <div className="space-y-3">
                    {Object.entries(projectDetails.definitions).map(([term, info], idx) => (
                      <div key={idx} className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-700 text-sm">{term}</h5>
                        <p className="text-xs text-gray-600 mb-2">{info.definition}</p>
                        {info.quote && info.quote.trim() !== "" && (
                          <div className="bg-blue-50 rounded p-2 mb-2">
                            <p className="text-xs text-gray-700 italic">
                              <span className="font-semibold">Trích dẫn: </span>
                              "{info.quote}"
                            </p>
                          </div>
                        )}
                        <div className="text-xs text-gray-500">
                          <span className="italic">Nguồn: </span>
                          <a 
                            href={info.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {info.source}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
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
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">Định nghĩa:</h4>
                  <p className="text-sm text-gray-600 mb-2">{tool.definition}</p>
                  <div className="text-xs text-gray-500">
                    <span className="italic">Nguồn: </span>
                    <a 
                      href={tool.definitionSource} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 underline"
                    >
                      {tool.definitionSource}
                    </a>
                  </div>
                </div>
                
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
    </div>
  );
};

export default AIUsage;