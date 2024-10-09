const Toast: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg transition-opacity duration-300">
      {message}
      <button onClick={onClose} className="ml-2 text-sm underline">
        Close
      </button>
    </div>
  );
};

export default Toast;
