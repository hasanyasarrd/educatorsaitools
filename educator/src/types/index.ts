export interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  logo: string;
  price: 'free' | 'paid' | 'limited';
  rating: number;
  voteCount?: number;
  votes?: {
    up: number;
    down: number;
  };
  category: string;
  shortVideo?: string;
  longVideo?: string;
  gptPrompt?: string;
  website?: string;
}

export interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp?: Date;
}

export interface Conversation {
  id: number;
  toolId?: number;
  messages: Message[];
}

export type PriceFilter = 'all' | 'free' | 'paid' | 'limited';
export type CategoryFilter =
    | 'all'
    | 'research'
    | 'presentation'
    | 'assessment'
    | 'writing'
    | 'video';
