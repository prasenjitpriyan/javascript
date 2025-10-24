const Button = ({ ref, onClick }) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className="px-6 py-2.5 rounded-lg font-medium bg-minion-yellow dark:bg-dark-charcoal text-dark-charcoal dark:text-minion-yellow shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-minion-yellow/80 dark:focus:ring-dark-charcoal/80 transition-all duration-200">
      Try again
    </button>
  );
};

export default Button;
