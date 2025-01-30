import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Search, User, Settings, CreditCard, LogOut } from 'lucide-react';

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Headphones className="h-8 w-8 text-white" />
              <span className="ml-2 text-white font-semibold text-lg">AudioPrime</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/articles" className="text-gray-300 hover:text-white">บทความ</Link>
            <Link to="/status" className="text-gray-300 hover:text-white">สถานะ</Link>
            <Link to="/novels" className="text-gray-300 hover:text-white">นิยาย</Link>
            <Link to="/news" className="text-gray-300 hover:text-white">ข่าว</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">เกี่ยวกับเรา</Link>
            <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-300 hover:text-white focus:outline-none"
              >
                <User className="h-5 w-5" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    ดูโปรไฟล์
                  </Link>
                  <Link
                    to="/payment"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    จ่ายเงิน
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    ตั้งค่า
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    ออกจากระบบ
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}