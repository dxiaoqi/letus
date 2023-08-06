// @ts-ignore
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Toast.scss'; // Your SCSS file for styling the Toast component

interface ToastProps {
  content: React.ReactNode;
  time?: number;
  show?: any
}

const Toast: React.FC<ToastProps> = ({ content, time }) => {
  const [isShown, setIsShown] = useState(true);
  const toastRef = useRef<HTMLDivElement | null>(null);

  const closeToast = () => {
    setIsShown(false);
  };

  useEffect(() => {
    if (time && isShown) {
      const timer = setTimeout(() => {
        closeToast();
      }, time);

      return () => clearTimeout(timer);
    }
  }, [time, isShown]);

  useEffect(() => {
    if (isShown) {
      // Start the fadeIn animation after a short delay to avoid issues with initial rendering
      setTimeout(() => {
        toastRef.current?.classList.add('show-toast');
      }, 100);
    } else {
      // Add the fadeOut animation class and remove the component after animation
      toastRef.current?.classList.add('hide-toast');

      const animationDuration = 300; // Adjust this based on your CSS animation duration
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(toastRef.current!);
      }, animationDuration);
    }
  }, [isShown]);

  return (
    <div className={`toast${isShown ? ' show-toast' : ''}`} ref={toastRef}>
      <div className="toast-content">{content}</div>
      <button className="close-btn" onClick={closeToast}>
        Close
      </button>
    </div>
  );
};
// Function to show the Toast imperatively
(Toast as any).show = ({ content, time }: ToastProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeToast = () => {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  };

  // eslint-disable-next-line react/no-deprecated
  ReactDOM.render(<Toast content={content} time={time} />, div);

  return {
    close: closeToast,
  };
};

export default Toast;
