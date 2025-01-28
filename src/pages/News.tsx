import React, { useState } from 'react';
import { Search, Clock, User, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
}

export function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const categories = [
    'ทั้งหมด',
    'เทคโนโลยี',
    'บันเทิง',
    'กีฬา',
    'การเงิน',
    'การศึกษา',
    'สุขภาพ'
  ];

  const newsItems: NewsItem[] = [
    // เทคโนโลยี
    {
      id: 1,
      title: 'Apple เปิดตัว iPhone 15 Pro Max รุ่นใหม่',
      content: 'Apple ได้เปิดตัว iPhone 15 Pro Max พร้อมกล้องที่พัฒนาขึ้น และชิป A17 Pro ที่ทรงพลังที่สุด',
      author: 'เทคนิค นิวส์',
      category: 'เทคโนโลยี',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab',
      date: '2024-03-15',
      likes: 1520,
      comments: 234,
      shares: 456
    },
    {
      id: 2,
      title: 'Samsung เปิดตัวสมาร์ทโฟนพับได้รุ่นใหม่',
      content: 'Samsung ได้เปิดตัว Galaxy Z Fold 5 และ Z Flip 5 พร้อมดีไซน์ใหม่และฟีเจอร์ที่น่าสนใจ',
      author: 'มือถือ อัพเดท',
      category: 'เทคโนโลยี',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
      date: '2024-03-14',
      likes: 1200,
      comments: 180,
      shares: 320
    },

    // บันเทิง
    {
      id: 3,
      title: 'BTS ประกาศจัดคอนเสิร์ตใหญ่ในไทย',
      content: 'BTS เตรียมจัดคอนเสิร์ตใหญ่ในประเทศไทย พร้อมโชว์เพลงฮิตทั้งหมด',
      author: 'บันเทิง ทูเดย์',
      category: 'บันเทิง',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      date: '2024-03-13',
      likes: 2500,
      comments: 450,
      shares: 780
    },
    {
      id: 4,
      title: 'ภาพยนตร์ไทยคว้ารางวัลระดับโลก',
      content: 'ภาพยนตร์ไทยเรื่องล่าสุดได้รับรางวัลจากเทศกาลภาพยนตร์นานาชาติ',
      author: 'หนัง วิจารณ์',
      category: 'บันเทิง',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      date: '2024-03-12',
      likes: 1800,
      comments: 320,
      shares: 560
    },

    // กีฬา
    {
      id: 5,
      title: 'ทีมชาติไทยเข้ารอบฟุตบอลโลก',
      content: 'ทีมชาติไทยสร้างประวัติศาสตร์ผ่านเข้ารอบฟุตบอลโลก 2026',
      author: 'กีฬา อัพเดท',
      category: 'กีฬา',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
      date: '2024-03-11',
      likes: 3500,
      comments: 890,
      shares: 1200
    },
    {
      id: 6,
      title: 'นักเทนนิสไทยคว้าแชมป์ระดับ ATP',
      content: 'นักเทนนิสไทยสร้างชื่อคว้าแชมป์รายการ ATP Tour ครั้งแรก',
      author: 'เทนนิส นิวส์',
      category: 'กีฬา',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
      date: '2024-03-10',
      likes: 2200,
      comments: 450,
      shares: 680
    },

    // การเงิน
    {
      id: 7,
      title: 'เงินบาทแข็งค่าสูงสุดในรอบปี',
      content: 'ค่าเงินบาทแข็งค่าขึ้นสูงสุดในรอบปี ส่งผลดีต่อการนำเข้า',
      author: 'การเงิน วิเคราะห์',
      category: 'การเงิน',
      image: 'https://images.unsplash.com/photo-1621981386829-2b2df0613e4b',
      date: '2024-03-09',
      likes: 1100,
      comments: 230,
      shares: 450
    },
    {
      id: 8,
      title: 'ตลาดหุ้นไทยทำจุดสูงสุดใหม่',
      content: 'SET Index ทำจุดสูงสุดใหม่จากแรงซื้อนักลงทุนต่างชาติ',
      author: 'หุ้น วิเคราะห์',
      category: 'การเงิน',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      date: '2024-03-08',
      likes: 1400,
      comments: 280,
      shares: 520
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="ค้นหาข่าว..."
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('th-TH')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {item.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {item.comments}
                    </span>
                    <span className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1" />
                      {item.shares}
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  อ่านเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}