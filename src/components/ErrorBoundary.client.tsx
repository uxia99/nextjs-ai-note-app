'use client'
// components/ErrorBoundary.client.tsx
import React, { useEffect } from 'react';

const ErrorBoundary: React.FC = () => {
  useEffect(() => {
    const handleError: OnErrorEventHandler = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
      // 에러 메시지를 화면에 출력하는 로직
      const errorContainer = document.createElement('div');
      errorContainer.style.color = 'red';
      errorContainer.style.position = 'fixed';
      errorContainer.style.background = 'white';
      errorContainer.style.top = '0px';
      errorContainer.style.left = '0px';
      errorContainer.style.width = '100%';
      errorContainer.style.zIndex = '1000';
      errorContainer.style.padding = '10px';
      errorContainer.style.boxShadow = '0px 4px 5px rgba(0,0,0,0.2)';
      errorContainer.innerHTML = `<strong>Error:</strong> ${event}<br>at ${source}:${lineno}:${colno}`;
      document.body.appendChild(errorContainer);

      // 에러를 콘솔에도 로그
      console.error('Captured Error:', event, source, lineno, colno, error);
      // 기본 이벤트 핸들러를 방지
      return false; // 여기서 true를 반환하면 기본 처리가 방지됩니다.
    };
    window.onerror = handleError;
    return () => {
      window.onerror = null;
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
};

export default ErrorBoundary;
