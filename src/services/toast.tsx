// services/toastService.js
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainerComponent = () => {
  return <ToastContainer autoClose={3000} />;
};

interface ToastService {
    success: (message: string, options?: ToastOptions) => void;
    error: (message: string, options?: ToastOptions) => void;
    warning: (message: string, options?: ToastOptions) => void;
    info: (message: string, options?: ToastOptions) => void;
  }
  
  const toastService: ToastService = {
    success: (message, options) => {
      toast.success(message, options);
    },
    error: (message, options) => {
      toast.error(message, options);
    },
    warning: (message, options) => {
      toast.warning(message, options);
    },
    info: (message, options) => {
      toast.info(message, options);
    },
  };

export { toastService, ToastContainerComponent };
