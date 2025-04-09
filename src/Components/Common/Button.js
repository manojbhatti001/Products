import ButtonLoader from './ButtonLoader';

const Button = ({ isLoading, children, ...props }) => {
  return (
    <button 
      {...props}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      {isLoading ? <ButtonLoader /> : children}
    </button>
  );
};