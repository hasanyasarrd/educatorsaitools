import { create } from 'zustand';
import { Tool, Message, Conversation, PriceFilter, CategoryFilter } from '../types';
import { mockTools } from '../data/tools';

interface AppState {
  tools: Tool[];
  filteredTools: Tool[];
  selectedTool: Tool | null;
  searchTerm: string;
  priceFilter: PriceFilter;
  categoryFilter: CategoryFilter;
  mainConversation: Conversation;
  toolConversations: Record<number, Conversation>;
  
  setSearchTerm: (term: string) => void;
  setPriceFilter: (filter: PriceFilter) => void;
  setCategoryFilter: (filter: CategoryFilter) => void;
  setSelectedTool: (tool: Tool | null) => void;
  addMainMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  addToolMessage: (toolId: number, message: Omit<Message, 'id' | 'timestamp'>) => void;
  voteOnTool: (toolId: number, voteType: 'up' | 'down') => void;
  filterTools: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  tools: mockTools,
  filteredTools: mockTools,
  selectedTool: null,
  searchTerm: '',
  priceFilter: 'all',
  categoryFilter: 'all',
  mainConversation: {
    id: 'main',
    messages: [{
      id: '1',
      type: 'bot',
      text: 'Merhaba! Size hangi yapay zeka aracını önerebilirim? Eğitim ihtiyaçlarınızı paylaşın ve size en uygun araçları bulayım. 🤖',
      timestamp: new Date()
    }]
  },
  toolConversations: {},

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterTools();
  },

  setPriceFilter: (filter) => {
    set({ priceFilter: filter });
    get().filterTools();
  },

  setCategoryFilter: (filter) => {
    set({ categoryFilter: filter });
    get().filterTools();
  },

  setSelectedTool: (tool) => {
    set({ selectedTool: tool });
    if (tool && !get().toolConversations[tool.id]) {
      set(state => ({
        toolConversations: {
          ...state.toolConversations,
          [tool.id]: {
            id: `tool-${tool.id}`,
            toolId: tool.id,
            messages: [{
              id: `${tool.id}-1`,
              type: 'bot',
              text: `Merhaba! Ben ${tool.name} konusunda size yardımcı olacak AI asistanınızım. Bu araç hakkında sorularınızı sorabilirsiniz. 🎯`,
              timestamp: new Date()
            }]
          }
        }
      }));
    }
  },

  addMainMessage: (message) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...message
    };
    
    set(state => ({
      mainConversation: {
        ...state.mainConversation,
        messages: [...state.mainConversation.messages, newMessage]
      }
    }));
  },

  addToolMessage: (toolId, message) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...message
    };

    set(state => ({
      toolConversations: {
        ...state.toolConversations,
        [toolId]: {
          ...state.toolConversations[toolId],
          messages: [...(state.toolConversations[toolId]?.messages || []), newMessage]
        }
      }
    }));
  },

  voteOnTool: (toolId, voteType) => {
    set(state => ({
      tools: state.tools.map(tool => 
        tool.id === toolId 
          ? { ...tool, votes: { ...tool.votes, [voteType]: tool.votes[voteType] + 1 }}
          : tool
      )
    }));
    get().filterTools();
  },

  filterTools: () => {
    const { tools, searchTerm, priceFilter, categoryFilter } = get();
    
    let filtered = tools;
    
    if (priceFilter !== 'all') {
      filtered = filtered.filter(tool => tool.price === priceFilter);
    }
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(tool => tool.category === categoryFilter);
    }
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(search) ||
        tool.description.toLowerCase().includes(search)
      );
    }
    
    set({ filteredTools: filtered });
  }
}));
