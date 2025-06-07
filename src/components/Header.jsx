import { BellIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const avatarUrl = "https://randomuser.me/api/portraits/women/68.jpg";

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Nunar</h1>
        <div className="flex items-center space-x-6">
          {["Dashboard", "Servicios", "Facturas"].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              {item}
            </a>
          ))}
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
            <BellIcon className="h-6 w-6" />
          </button>
          <img className="h-8 w-8 rounded-full" src={avatarUrl} alt="User avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
