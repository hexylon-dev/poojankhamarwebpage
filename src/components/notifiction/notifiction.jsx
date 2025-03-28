import 'react-toastify/dist/ReactToastify.css';
import NotificationCloseIcon from '../../assets/icons/notifiction-close-icon.jsx';
import SuccessIcon from '../../assets/icons/success-icon.jsx';
import ErrorIcon from '../../assets/icons/error-icon.jsx';
import InfoIcon from '../../assets/icons/info-icon.jsx';
import WarningIcon from '../../assets/icons/waring-icon.jsx';
import { Slide, toast, ToastContainer } from 'react-toastify';

export const NOTIFICATION_TYPE_SUCCESS = 'success';
export const NOTIFICATION_TYPE_ERROR = 'error';
export const NOTIFICATION_TYPE_INFO = 'info';
export const NOTIFICATION_TYPE_WARN = 'warn';

export function Notification({
  type,
  message,
  timeout = 1000,
}) {
  const toastOptions = {
    position: 'top-center',
    autoClose: timeout,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  };

  switch (type) {
    case NOTIFICATION_TYPE_SUCCESS:
      // @ts-ignore
      toast.success(message, { ...toastOptions, icon: <SuccessIcon /> });
      break;
    case NOTIFICATION_TYPE_ERROR:
      // @ts-ignore
      toast.error(message, { ...toastOptions, icon: <ErrorIcon /> });
      break;
    case NOTIFICATION_TYPE_INFO:
      // @ts-ignore
      toast.info(message, { ...toastOptions, icon: <InfoIcon /> });
      break;
    case NOTIFICATION_TYPE_WARN:
      // @ts-ignore
      toast.warn(message, { ...toastOptions, icon: <WarningIcon /> });
      break;
    default:
      // // @ts-ignore
      // toast('🦄 Wow so easy!', toastOptions);
      break;
  }
  return null;
}

function NotificationWrapper() {
  return (
    <ToastContainer
      role="alert"
      transition={Slide}
      closeButton={
        <button className={'Toastify__close-button'}>
          <NotificationCloseIcon />
        </button>
      }
    />
  );
}
export default NotificationWrapper;
