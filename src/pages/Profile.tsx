import React from 'react';
import { Settings, Bell, BookOpen, Clock, Heart } from 'lucide-react';

export function Profile() {
  const user = {
    name: 'สมชาย ใจดี',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    email: 'somchai@example.com',
    memberSince: '2023-01-15',
    favorites: 24,
    listening: 156,
    following: 89,
    followers: 134
  };

  const recentlyPlayed = [
    {
      id: 1,
      title: 'เงาจันทร์',
      author: 'แสงดาว',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
      progress: 75
    },
    {
      id: 2,
      title: 'ราชันย์มังกร',
      author: 'มังกรทอง',
      cover: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699',
      progress: 45
    },
    {
      id: 3,
      title: 'รักในม่านหมอก',
      author: 'หมอกฝัน',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      progress: 90
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">
                  สมาชิกตั้งแต่: {new Date(user.memberSince).toLocaleDateString('th-TH')}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{user.favorites}</div>
              <div className="text-sm text-gray-600">รายการโปรด</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{user.listening}</div>
              <div className="text-sm text-gray-600">กำลังฟัง</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{user.following}</div>
              <div className="text-sm text-gray-600">กำลังติดตาม</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{user.followers}</div>
              <div className="text-sm text-gray-600">ผู้ติดตาม</div>
            </div>
          </div>
        </div>

        {/* Recently Played */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            ฟังล่าสุด
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyPlayed.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.author}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded">
                      <div
                        className="h-full bg-blue-600 rounded"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorites */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="h-5 w-5 mr-2" />
            รายการโปรด
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add favorite items here */}
          </div>
        </div>
      </div>
    </div>
  );
}