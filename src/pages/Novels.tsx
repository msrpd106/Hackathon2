import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, Star, BookOpen } from 'lucide-react';

interface Novel {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  chapters: number;
  lastUpdated: string;
}

export function Novels() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const categories = [
    'ทั้งหมด',
    'นิยายรัก',
    'แฟนตาซี',
    'สืบสวน',
    'ไซไฟ',
    'แอคชั่น',
    'ดราม่า'
  ];

  const novels: Novel[] = [
    // นิยายรัก
    {
      id: 1,
      title: 'รักในวันฝนพรำ',
      author: 'ฝนพราว',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      rating: 4.5,
      category: 'นิยายรัก',
      chapters: 45,
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      title: 'หัวใจใกล้กัน',
      author: 'พิมพ์มาดา',
      cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954',
      rating: 4.2,
      category: 'นิยายรัก',
      chapters: 38,
      lastUpdated: '2024-03-14'
    },
    
    // แฟนตาซี
    {
      id: 3,
      title: 'ผู้พิทักษ์แห่งแสง',
      author: 'แสงดาว',
      cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      rating: 4.8,
      category: 'แฟนตาซี',
      chapters: 52,
      lastUpdated: '2024-03-13'
    },
    {
      id: 4,
      title: 'มนตราแห่งราตรี',
      author: 'จันทร์กระจ่าง',
      cover: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3',
      rating: 4.6,
      category: 'แฟนตาซี',
      chapters: 45,
      lastUpdated: '2024-03-12'
    },
    
    // สืบสวน
    {
      id: 5,
      title: 'คดีลับบ้านร้าง',
      author: 'นักสืบน้อย',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      rating: 4.7,
      category: 'สืบสวน',
      chapters: 30,
      lastUpdated: '2024-03-11'
    },
    {
      id: 6,
      title: 'ปริศนาเงามรณะ',
      author: 'พิศวง',
      cover: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb',
      rating: 4.5,
      category: 'สืบสวน',
      chapters: 25,
      lastUpdated: '2024-03-10'
    },
    
    // ไซไฟ
    {
      id: 7,
      title: 'โลกอีก 100 ปี',
      author: 'อนาคต',
      cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      rating: 4.4,
      category: 'ไซไฟ',
      chapters: 40,
      lastUpdated: '2024-03-09'
    },
    {
      id: 8,
      title: 'ดาวเคราะห์ที่หายไป',
      author: 'กาแล็กซี่',
      cover: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
      rating: 4.3,
      category: 'ไซไฟ',
      chapters: 35,
      lastUpdated: '2024-03-08'
    },
    
    // แอคชั่น
    {
      id: 9,
      title: 'นักสู้ผู้พิชิต',
      author: 'เดชา',
      cover: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
      rating: 4.6,
      category: 'แอคชั่น',
      chapters: 48,
      lastUpdated: '2024-03-07'
    },
    {
      id: 10,
      title: 'ศึกเดือด',
      author: 'ดาบแดง',
      cover: 'https://images.unsplash.com/photo-1579156618441-0f9f420e2b2c',
      rating: 4.5,
      category: 'แอคชั่น',
      chapters: 42,
      lastUpdated: '2024-03-06'
    },
    
    // ดราม่า
    {
      id: 11,
      title: 'วันที่ฝนไม่ตก',
      author: 'น้ำตา',
      cover: 'https://images.unsplash.com/photo-1501644898242-cfea317d7faf',
      rating: 4.7,
      category: 'ดราม่า',
      chapters: 35,
      lastUpdated: '2024-03-05'
    },
    {
      id: 12,
      title: 'ความทรงจำที่หายไป',
      author: 'หัวใจสีเทา',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
      rating: 4.4,
      category: 'ดราม่า',
      chapters: 30,
      lastUpdated: '2024-03-04'
    }
  ];

  const filteredNovels = novels.filter(novel => {
    const matchesSearch = novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         novel.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || novel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="ค้นหานิยาย..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Category Title and Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory}
            <span className="ml-2 text-lg font-normal text-gray-500">
              ({filteredNovels.length} เรื่อง)
            </span>
          </h2>
        </div>

        {/* Novels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNovels.map((novel) => (
            <div key={novel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src={novel.cover}
                  alt={novel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {novel.rating}
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {novel.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{novel.title}</h3>
                <p className="text-gray-600 text-sm mb-2">โดย {novel.author}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {novel.chapters} ตอน
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(novel.lastUpdated).toLocaleDateString('th-TH')}
                  </span>
                </div>
                <Link to={`/novels/${novel.id}`}>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    อ่านเลย
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}