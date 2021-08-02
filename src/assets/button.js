export const Navbutton = (props) => {
    return (
        <button
        type="button"
        className="bg-gradient-to-r from-black via-purple-900 to-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        {...props}
      >
      </button>
    );
  };