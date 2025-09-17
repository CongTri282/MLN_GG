// Game Types and Interfaces

export interface Choice {
  id: string;
  title: string;
  description: string;
  consequence: string;
  backgroundImage?: string;
  score: {
    economy: number;    // -100 to 100
    environment: number; // -100 to 100
  };
}

export interface Level {
  id: number;
  title: string;
  situation: string;
  description: string;
  economyChoice: Choice;
  environmentChoice: Choice;
  backgroundImage?: string;
}

export interface GameState {
  currentLevel: number;
  totalScore: {
    economy: number;
    environment: number;
  };
  choices: string[]; // Array of choice IDs made by player
  isGameComplete: boolean;
}

export type ChoiceType = 'economy' | 'environment';

export interface LevelProps {
  level: Level;
  onChoiceSelected: (choice: Choice, choiceType: ChoiceType) => void;
  gameState: GameState;
  isLoading?: boolean;
}