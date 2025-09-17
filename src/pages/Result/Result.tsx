import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { GameState } from '../../types/game';
import './Result.css';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const [gameResult, setGameResult] = useState<GameState | null>(null);
  const [resultType, setResultType] = useState<'economy' | 'environment' | 'balanced' | 'pure-economy' | 'pure-environment'>('balanced');

  useEffect(() => {
    // Get game result from localStorage
    const savedResult = localStorage.getItem('gameResult');
    if (savedResult) {
      const result: GameState = JSON.parse(savedResult);
      setGameResult(result);
      
      // Determine result type based on choices
      const { economy, environment } = result.totalScore;
      const choices = result.choices;
      
      // Check for pure choices (all economy or all environment)
      const economyChoices = ["coal_power_plant", "approve_industrial_zone", "expand_highways"];
      const environmentChoices = ["solar_wind_farm", "eco_friendly_development", "public_transport_system"];
      
      const isAllEconomy = choices.every(choice => economyChoices.includes(choice));
      const isAllEnvironment = choices.every(choice => environmentChoices.includes(choice));
      
      if (isAllEconomy) {
        setResultType('pure-economy');
      } else if (isAllEnvironment) {
        setResultType('pure-environment');
      } else if (economy > environment + 20) {
        setResultType('economy');
      } else if (environment > economy + 20) {
        setResultType('environment');
      } else {
        setResultType('balanced');
      }
    } else {
      // No game result found, redirect to home
      navigate('/');
    }
  }, [navigate]);

  const handlePlayAgain = () => {
    localStorage.removeItem('gameResult');
    navigate('/');
  };

  const handleBackToHome = () => {
    localStorage.removeItem('gameResult');
    navigate('/');
  };

  const getResultMessage = () => {
    if (!gameResult) return null;
    
    // const { economy, environment } = gameResult.totalScore;
    
    switch (resultType) {
      case 'pure-economy':
        return {
          title: "Nhà Tư Bản Thuần Túy",
          description: `Bạn đã chọn tất cả các lựa chọn thiên về kinh tế! Bạn thể hiện tư duy tập trung hoàn toàn vào tăng trưởng, 
            lợi nhuận và phát triển kinh tế mà không quan tâm đến tác động môi trường.`,
          icon: "💸",
          color: "pure-economy",
          philosophy: `Đây là biểu hiện của mâu thuẫn tuyệt đối - khi chỉ tập trung vào một mặt của sự vật mà bỏ qua hoàn toàn mặt đối lập. 
            Theo quy luật mâu thuẫn, sự phát triển một chiều này sẽ dẫn đến khủng hoảng và buộc phải tìm kiếm sự cân bằng.`
        };
      case 'pure-environment':
        return {
          title: "Nhà Sinh Thái Cực Đoan",
          description: `Bạn đã chọn tất cả các lựa chọn thiên về môi trường! Bạn thể hiện cam kết tuyệt đối với việc bảo vệ thiên nhiên 
            và sẵn sàng hy sinh mọi cơ hội kinh tế để giữ gìn môi trường.`,
          icon: "🌍",
          color: "pure-environment",
          philosophy: `Đây cũng là biểu hiện của mâu thuẫn tuyệt đối nhưng theo hướng ngược lại. Mặc dù động cơ tốt đẹp, 
            nhưng việc bỏ qua hoàn toàn nhu cầu phát triển kinh tế cũng có thể dẫn đến những hệ quả không mong muốn.`
        };
      case 'economy':
        return {
          title: "Nhà Phát triển Kinh tế",
          description: `Bạn đã thể hiện xu hướng ưu tiên phát triển kinh tế trong các quyết định. 
            Điều này có thể mang lại thịnh vượng ngắn hạn nhưng cần cân nhắc tác động môi trường lâu dài.`,
          icon: "💰",
          color: "economy",
          philosophy: `Theo quy luật mâu thuẫn, sự phát triển kinh tế và bảo vệ môi trường tồn tại như hai mặt đối lập 
            nhưng thống nhất. Việc thiên về một bên quá mức sẽ tạo ra mâu thuẫn cần được giải quyết để đạt được sự hài hòa.`
        };
      case 'environment':
        return {
          title: "Nhà Bảo vệ Môi trường",
          description: `Bạn đã thể hiện cam kết mạnh mẽ với việc bảo vệ môi trường. 
            Điều này đảm bảo sự bền vững lâu dài nhưng có thể cần cân bằng với nhu cầu phát triển kinh tế.`,
          icon: "🌱",
          color: "environment",
          philosophy: `Quy luật mâu thuẫn cho thấy rằng môi trường và kinh tế không phải là hai thực thể hoàn toàn tách biệt. 
            Sự bảo vệ môi trường cũng có thể tạo ra cơ hội kinh tế mới thông qua các mô hình phát triển bền vững.`
        };
      case 'balanced':
        return {
          title: "Nhà Cân bằng Bền vững",
          description: `Bạn đã thể hiện khả năng cân bằng giữa phát triển kinh tế và bảo vệ môi trường. 
            Đây là cách tiếp cận toàn diện, tìm kiếm sự hài hòa giữa các lực đối lập.`,
          icon: "⚖️",
          color: "balanced",
          philosophy: `Bạn đã thực hành đúng tinh thần của quy luật mâu thuẫn - nhận ra rằng các đối lập có thể tồn tại 
            và phát triển trong thống nhất. Sự cân bằng này là chìa khóa cho phát triển bền vững.`
        };
      default:
        return {
          title: "Người chơi",
          description: "Cảm ơn bạn đã tham gia trò chơi!",
          icon: "🎮",
          color: "balanced",
          philosophy: ""
        };
    }
  };

  if (!gameResult) {
    return (
      <div className="result-loading">
        <div className="loading-spinner"></div>
        <p>Đang tải kết quả...</p>
      </div>
    );
  }

  const resultMessage = getResultMessage();
  const { economy, environment } = gameResult.totalScore;

  if (!resultMessage) {
    return (
      <div className="result-loading">
        <div className="loading-spinner"></div>
        <p>Đang tải kết quả...</p>
      </div>
    );
  }

  return (
    <div className={`result-container ${resultMessage.color}`}>
      {/* Result Header */}
      <header className="result-header">
        <div className="result-icon">
          {resultMessage.icon}
        </div>
        <h1 className="result-title">{resultMessage.title}</h1>
        <p className="result-subtitle">Kết quả cuối trò chơi</p>
      </header>

      {/* Score Summary */}
      <section className="score-summary">
        <h2>Tổng điểm của bạn</h2>
        <div className="final-scores">
          <div className="final-score economy">
            <div className="score-icon">💰</div>
            <div className="score-details">
              <span className="score-label">Kinh tế</span>
              <span className="score-value">{economy}</span>
            </div>
          </div>
          <div className="score-divider">VS</div>
          <div className="final-score environment">
            <div className="score-icon">🌱</div>
            <div className="score-details">
              <span className="score-label">Môi trường</span>
              <span className="score-value">{environment}</span>
            </div>
          </div>
        </div>
        
        {/* Score Visualization */}
        <div className="score-visualization">
          <div className="score-bar">
            <div 
              className="economy-bar"
              style={{ 
                width: `${Math.abs(economy) / (Math.abs(economy) + Math.abs(environment)) * 100 || 50}%`
              }}
            >
              <span>Kinh tế</span>
            </div>
            <div 
              className="environment-bar"
              style={{ 
                width: `${Math.abs(environment) / (Math.abs(economy) + Math.abs(environment)) * 100 || 50}%`
              }}
            >
              <span>Môi trường</span>
            </div>
          </div>
        </div>
      </section>

      {/* Result Analysis */}
      <section className="result-analysis">
        <h2>Phân tích kết quả</h2>
        <div className="analysis-content">
          <p className="result-description">{resultMessage.description}</p>
          
          <div className="philosophy-section">
            <h3>Triết lý Quy luật Mâu thuẫn</h3>
            <p className="philosophy-text">{resultMessage.philosophy}</p>
          </div>
        </div>
      </section>

      {/* Choice History */}
      <section className="choice-history">
        <h2>Lịch sử lựa chọn</h2>
        <div className="choices-made">
          <p>Bạn đã hoàn thành <strong>{gameResult.choices.length}</strong> tình huống</p>
          <div className="choice-stats">
            <div className="stat-item">
              <span className="stat-label">Tổng quyết định:</span>
              <span className="stat-value">{gameResult.choices.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="result-actions">
        <button className="play-again-btn" onClick={handlePlayAgain}>
          🔄 Chơi lại
        </button>
        <button className="home-btn" onClick={handleBackToHome}>
          🏠 Về trang chủ
        </button>
      </div>

      {/* Footer */}
      <footer className="result-footer">
        <p>Cảm ơn bạn đã khám phá quy luật mâu thuẫn thông qua trò chơi!</p>
        <p>Dự án môn Triết học - MLN111</p>
      </footer>
    </div>
  );
};

export default Result;