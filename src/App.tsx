import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import TestLayout from './components/TestLayout';
import PageA from './components/PageA';
import PageB from './components/PageB';
import { useEffect } from 'react';
import { GlobalProvider, useGlobalContext } from './context/GlobalContext';


let coreUserService:unknown
let globalContextRef: { state: any; setState: (state: any) => void } | null = null;

export function AppContent() {
  const context = useGlobalContext();
  
  useEffect(()=>{
    globalContextRef = context;
    
    // 设置 initialized 为 true
    context.setState({
      initialized: true,
      providerFromCore:coreUserService // 假设 coreUserService 在全局 window 对象上
    });
    console.log('@@@@@@@render mf')
  },[])
  return (
      <BrowserRouter basename="/router1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<TestLayout />}>
            <Route path="A" element={<PageA />} />
            <Route path="B" element={<PageB />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export function App() {
  return (
    <GlobalProvider>
        <AppContent />
    </GlobalProvider>
  )
}

export function bootstrap (props:Record<string,unknown>) {
  coreUserService = props?.pluginProvider || undefined
  console.log('@@@@@@@bootstrap',coreUserService,props)
}
export async function beforeMount (props:unknown) {
  // coreUserService = {...coreUserService,redirectUrl:props.redirectUrl}
  console.log('@@@@@@@beforeMount',coreUserService,props)
  return Promise.resolve(true)
};
export async function mount (props:unknown) {
  console.log('@@@@@@@@@@mount',coreUserService,props)
  return Promise.resolve(true)

};
export function beforeUnmount (props:unknown) { 
  console.log('@@@@@@@@@@2beforeUnmount',coreUserService,props)
  return Promise.resolve(true)

}
export function unmount (props:unknown) { 
  console.log('@@@@@@@@@unmount',coreUserService,props)

}
