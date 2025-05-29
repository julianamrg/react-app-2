import React, { useEffect, useState } from 'react';

const FadeTransition = ({ show, duration = 800, children }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setShouldRender(false);
  };

  return shouldRender ? (
    <div
      style={{
        animation: `${show ? 'fadeIn' : 'fadeOut'} ${duration}ms`,
        transition: `opacity ${duration}ms`
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>
    </div>
  ) : null;
};

export default FadeTransition;