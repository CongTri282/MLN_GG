import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Header */}
        <header className="home-header">
          <h1 className="game-title">Quy Luật Mâu Thuẫn</h1>
          <h2 className="game-subtitle">Môi Trường vs Kinh Tế</h2>
        </header>

        {/* Game Introduction */}
        <section className="game-intro">
          <h3>Về Trò Chơi</h3>
          <p>
            Khám phá quy luật mâu thuẫn trong triết học thông qua những tình huống thực tế 
            giữa phát triển kinh tế và bảo vệ môi trường. Mỗi quyết định của bạn sẽ dẫn đến 
            những hệ quả khác nhau và tạo nên câu chuyện riêng.
          </p>
        </section>

        {/* How to Play */}
        <section className="how-to-play">
          <h3>Cách Chơi</h3>
          <div className="instructions">
            <div className="instruction-item">
              <span className="step-number">1</span>
              <p>Đọc tình huống được đưa ra</p>
            </div>
            <div className="instruction-item">
              <span className="step-number">2</span>
              <p>Chọn giữa hai lựa chọn: Phát triển kinh tế hoặc Bảo vệ môi trường</p>
            </div>
            <div className="instruction-item">
              <span className="step-number">3</span>
              <p>Chứng kiến hệ quả của quyết định và chuyển sang tình huống tiếp theo</p>
            </div>
            <div className="instruction-item">
              <span className="step-number">4</span>
              <p>Sau các lượt chơi, nhận kết quả tổng thể về xu hướng của bạn</p>
            </div>
          </div>
        </section>

        {/* Start Game Button */}
        <div className="start-game-section">
          <button 
            className="start-game-btn"
            onClick={handleStartGame}
          >
            Bắt Đầu Trò Chơi
          </button>
        </div>

        {/* Footer */}
        <footer className="home-footer">
          <p>Dự án môn Triết học - Khám phá quy luật mâu thuẫn</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
