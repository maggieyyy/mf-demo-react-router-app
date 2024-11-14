import React, { createContext, useContext, useState } from 'react';

// 定义 CoreUserService 类型（根据实际情况调整）
export interface CoreUserService {
  // 定义你需要的属性和方法
  [key: string]: any;
}

interface GlobalState {
  providerFromCore: CoreUserService | null;
  initialized: boolean;
}

interface GlobalContextType {
  state: GlobalState;
  setState: (state: Partial<GlobalState>) => void;
}

const initialState: GlobalState = {
  providerFromCore: null,
  initialized: false,
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{
  children: React.ReactNode;
  coreUserService?: CoreUserService;
}> = ({ children, coreUserService }) => {
  const [state, setStateInternal] = useState<GlobalState>(initialState);

  const setState = (newState: Partial<GlobalState>) => {
    setStateInternal(prev => ({ ...prev, ...newState }));
  };

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
