import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Level from '../../components/Level/Level';
import type { GameState, Level as LevelType, Choice, ChoiceType } from '../../types/game';
import { sampleLevels, initialGameState } from '../../data/levels';
import './Game.css';

const Game: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLevelData, setCurrentLevelData] = useState<LevelType | null>(null);
  const [showConsequence, setShowConsequence] = useState(false);
  const [lastChoice, setLastChoice] = useState<Choice | null>(null);

  // Initialize game and set first level
  useEffect(() => {
    const firstLevel = sampleLevels.find(level => level.id === gameState.currentLevel);
    if (firstLevel) {
      setCurrentLevelData(firstLevel);
    }
  }, [gameState.currentLevel]);

  // Handle choice selection
  const handleChoiceSelected = (choice: Choice, _choiceType: ChoiceType) => {
    setIsLoading(true);
    setLastChoice(choice);

    // Update game state with new scores and choice
    const newGameState: GameState = {
      ...gameState,
      totalScore: {
        economy: gameState.totalScore.economy + choice.score.economy,
        environment: gameState.totalScore.environment + choice.score.environment
      },
      choices: [...gameState.choices, choice.id]
    };

    // Simulate processing time
    setTimeout(() => {
      setGameState(newGameState);
      setIsLoading(false);
      setShowConsequence(true);
    }, 1500);
  };

  // Continue to next level or finish game
  const handleContinue = () => {
    setShowConsequence(false);
    setLastChoice(null);

    // Check if this was the last level
    if (gameState.currentLevel >= sampleLevels.length) {
      // Game completed - navigate to results
      const finalGameState = { ...gameState, isGameComplete: true };
      // Store final state in localStorage for results page
      localStorage.setItem('gameResult', JSON.stringify(finalGameState));
      navigate('/result');
      return;
    }

    // Move to next level
    const nextLevel = gameState.currentLevel + 1;
    const nextLevelData = sampleLevels.find(level => level.id === nextLevel);
    
    if (nextLevelData) {
      setGameState(prev => ({ ...prev, currentLevel: nextLevel }));
      setCurrentLevelData(nextLevelData);
    }
  };

  // Go back to home
  const handleBackToHome = () => {
    navigate('/');
  };

  // Get result tendency for final display (for future use)
  // const getResultTendency = () => {
  //   const { economy, environment } = gameState.totalScore;
  //   const total = Math.abs(economy) + Math.abs(environment);
    
  //   if (total === 0) return 'balanced';
    
  //   const economyPercentage = Math.abs(economy) / total * 100;
  //   const environmentPercentage = Math.abs(environment) / total * 100;
    
  //   if (economyPercentage > environmentPercentage + 20) return 'economy';
  //   if (environmentPercentage > economyPercentage + 20) return 'environment';
  //   return 'balanced';
  // };

  if (!currentLevelData) {
    return (
      <div className="game-loading">
        <div className="loading-spinner"></div>
        <p>Đang tải trò chơi...</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      {/* Game Header */}
      <div className="game-header">
        <button className="back-btn" onClick={handleBackToHome}>
          ← Về trang chủ
        </button>
        <div className="progress-info">
          <span className="level-progress">
            Level {gameState.currentLevel} / {sampleLevels.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(gameState.currentLevel / sampleLevels.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Consequence Modal */}
      {showConsequence && lastChoice && (
        <div className="consequence-modal-overlay">
          <div className="consequence-modal">
            <div className="consequence-header">
              <h2>Kết quả của quyết định</h2>
            </div>
            <div className="consequence-content">
              <div className="choice-summary">
                <h3>Bạn đã chọn: {lastChoice.title}</h3>
              </div>
              <div className="consequence-text">
                <p>{lastChoice.consequence}</p>
              </div>
              <div className="score-changes">
                <div className="score-change economy">
                  <span className="label">Tác động kinh tế:</span>
                  <span className={`value ${lastChoice.score.economy >= 0 ? 'positive' : 'negative'}`}>
                    {lastChoice.score.economy >= 0 ? '+' : ''}{lastChoice.score.economy}
                  </span>
                </div>
                <div className="score-change environment">
                  <span className="label">Tác động môi trường:</span>
                  <span className={`value ${lastChoice.score.environment >= 0 ? 'positive' : 'negative'}`}>
                    {lastChoice.score.environment >= 0 ? '+' : ''}{lastChoice.score.environment}
                  </span>
                </div>
              </div>
              <div className="current-scores">
                <h4>Tổng điểm hiện tại:</h4>
                <div className="total-scores">
                  <div className="total-score economy">
                    <span>Kinh tế: {gameState.totalScore.economy}</span>
                  </div>
                  <div className="total-score environment">
                    <span>Môi trường: {gameState.totalScore.environment}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="consequence-footer">
              <button className="continue-btn" onClick={handleContinue}>
                {gameState.currentLevel >= sampleLevels.length ? 'Xem kết quả cuối' : 'Tiếp tục'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Game Content */}
      {!showConsequence && (
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Level
            level={currentLevelData}
            onChoiceSelected={handleChoiceSelected}
            gameState={gameState}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
