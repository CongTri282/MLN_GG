import React, { useState } from 'react';
import type { LevelProps, Choice, ChoiceType } from '../../types/game';
import './Level.css';

const Level: React.FC<LevelProps> = ({ 
  level, 
  onChoiceSelected, 
  gameState, 
  isLoading = false 
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChoiceClick = (choice: Choice, choiceType: ChoiceType) => {
    if (isAnimating || isLoading) return;
    
    setSelectedChoice(choice.id);
    setIsAnimating(true);
    
    // Animation delay before calling parent callback
    setTimeout(() => {
      onChoiceSelected(choice, choiceType);
      setIsAnimating(false);
      setSelectedChoice(null);
    }, 1000);
  };

  const getScoreDisplay = () => {
    const { economy, environment } = gameState.totalScore;
    return {
      economy: economy > 0 ? `+${economy}` : `${economy}`,
      environment: environment > 0 ? `+${environment}` : `${environment}`
    };
  };

  const scoreDisplay = getScoreDisplay();

  return (
    <div 
      className="level-container"
      style={level.backgroundImage ? {
        backgroundImage: `url(${level.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {level.backgroundImage && <div className="level-background-overlay"></div>}
      {/* Level Header */}
      <header className="level-header">
        <div className="level-info">
          <h1 className="level-title">{level.title}</h1>
          <span className="level-number">Tình huống {level.id}</span>
        </div>
        
        {/* Score Display */}
        <div className="score-display">
          <div className="score-item economy">
            <span className="score-label">Kinh tế</span>
            <span className="score-value">{scoreDisplay.economy}</span>
          </div>
          <div className="score-separator">vs</div>
          <div className="score-item environment">
            <span className="score-label">Môi trường</span>
            <span className="score-value">{scoreDisplay.environment}</span>
          </div>
        </div>
      </header>

      {/* Situation Description */}
      <section className="situation-section">
        <div className="situation-content">
          <p className="situation-text">{level.situation}</p>
          {level.description && (
            <p className="situation-description">{level.description}</p>
          )}
        </div>
      </section>

      {/* Choice Instruction */}
      <div className="choice-instruction">
        <h2>Bạn sẽ chọn hướng nào?</h2>
        <p>Hãy cân nhắc kỹ lưỡng trước khi quyết định</p>
      </div>

      {/* Main Choices Container */}
      <div className={`choices-container ${isAnimating ? 'animating' : ''}`}>
        {/* Economy Choice (Left Side) */}
        <div 
          className={`choice-side economy-side ${selectedChoice === level.economyChoice.id ? 'selected' : ''}`}
          onClick={() => handleChoiceClick(level.economyChoice, 'economy')}
          style={level.economyChoice.backgroundImage ? {
            backgroundImage: `url(${level.economyChoice.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >
          <div className="choice-overlay"></div>
          <div className="choice-content">
            <div className="choice-icon">
              <span className="icon">💰</span>
            </div>
            <h3 className="choice-title">{level.economyChoice.title}</h3>
            <p className="choice-description">{level.economyChoice.description}</p>
            
            {/* Impact Preview */}
            <div className="impact-preview">
              <div className="impact-item positive">
                <span className="impact-label">Kinh tế:</span>
                <span className="impact-value">+{Math.abs(level.economyChoice.score.economy)}</span>
              </div>
              <div className="impact-item negative">
                <span className="impact-label">Môi trường:</span>
                <span className="impact-value">{level.economyChoice.score.environment}</span>
              </div>
            </div>

          </div>
        </div>

        {/* VS Divider */}
        <div className="vs-divider">
          <div className="vs-circle">
            <span>VS</span>
          </div>
        </div>

        {/* Environment Choice (Right Side) */}
        <div 
          className={`choice-side environment-side ${selectedChoice === level.environmentChoice.id ? 'selected' : ''}`}
          onClick={() => handleChoiceClick(level.environmentChoice, 'environment')}
          style={level.environmentChoice.backgroundImage ? {
            backgroundImage: `url(${level.environmentChoice.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >
          <div className="choice-overlay"></div>
          <div className="choice-content">
            <div className="choice-icon">
              <span className="icon">🌱</span>
            </div>
            <h3 className="choice-title">{level.environmentChoice.title}</h3>
            <p className="choice-description">{level.environmentChoice.description}</p>
            
            {/* Impact Preview */}
            <div className="impact-preview">
              <div className="impact-item positive">
                <span className="impact-label">Môi trường:</span>
                <span className="impact-value">+{Math.abs(level.environmentChoice.score.environment)}</span>
              </div>
              <div className="impact-item negative">
                <span className="impact-label">Kinh tế:</span>
                <span className="impact-value">{level.environmentChoice.score.economy}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Đang xử lý lựa chọn của bạn...</p>
        </div>
      )}
    </div>
  );
};

export default Level;
