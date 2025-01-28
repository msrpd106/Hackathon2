import React, { useState } from 'react';
import { Search, Clock, User, Eye } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
  views: number;
  readTime: number;
  publishedDate: string;
  excerpt: string;
}

export function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const categories = [
    'ทั้งหมด',
    'เทคโนโลยี',
    'ไลฟ์สไตล์',
    'สุขภาพ',
    'ธุรกิจ',
    'การศึกษา',
    'ท่องเที่ยว'
  ];

  const articles: Article[] = [
    // เทคโนโลยี
    {
      id: 1,
      title: 'AI กับการเปลี่ยนแปลงโลกในอนาคต',
      author: 'ดร.ปัญญา นวัตกรรม',
      cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      category: 'เทคโนโลยี',
      views: 15420,
      readTime: 8,
      publishedDate: '2024-03-15',
      excerpt: 'ปัญญาประดิษฐ์กำลังเปลี่ยนแปลงวิถีชีวิตของเราอย่างไร และเราควรเตรียมพร้อมรับมืออย่างไร'
    },
    {
      id: 2,
      title: '5G เทคโนโลยีที่จะพลิกโฉมการสื่อสาร',
      author: 'วิศวกร ก้าวหน้า',
      cover: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
      category: 'เทคโนโลยี',
      views: 12350,
      readTime: 6,
      publishedDate: '2024-03-14',
      excerpt: 'เจาะลึกเทคโนโลยี 5G และผลกระทบต่อการใช้ชีวิตในยุคดิจิทัล'
    },
    {
      id: 3,
      title: 'Blockchain และอนาคตของการเงินดิจิทัล',
      author: 'นายธนาคาร ดิจิทัล',
      cover: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
      category: 'เทคโนโลยี',
      views: 11200,
      readTime: 7,
      publishedDate: '2024-03-13',
      excerpt: 'ทำความเข้าใจเทคโนโลยี Blockchain และผลกระทบต่อระบบการเงินในอนาคต'
    },

    // ไลฟ์สไตล์
    {
      id: 4,
      title: 'เคล็ดลับการใช้ชีวิตให้มีความสุขในยุคดิจิทัล',
      author: 'สุข สดใส',
      cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      category: 'ไลฟ์สไตล์',
      views: 18900,
      readTime: 5,
      publishedDate: '2024-03-13',
      excerpt: 'วิธีการสร้างสมดุลระหว่างโลกออนไลน์และออฟไลน์เพื่อชีวิตที่มีความสุข'
    },
    {
      id: 5,
      title: 'แต่งบ้านอย่างไรให้น่าอยู่และประหยัดพลังงาน',
      author: 'บ้าน สบาย',
      cover: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      category: 'ไลฟ์สไตล์',
      views: 14500,
      readTime: 6,
      publishedDate: '2024-03-12',
      excerpt: 'ไอเดียการจัดบ้านที่ทั้งสวยงามและเป็นมิตรกับสิ่งแวดล้อม'
    },

    // สุขภาพ
    {
      id: 6,
      title: 'อาหารเพื่อสุขภาพที่คุณควรทาน',
      author: 'หมอ สุขภาพดี',
      cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      category: 'สุขภาพ',
      views: 21500,
      readTime: 7,
      publishedDate: '2024-03-12',
      excerpt: 'แนะนำอาหารที่มีประโยชน์และวิธีการเลือกทานอาหารให้เหมาะกับร่างกาย'
    },
    {
      id: 7,
      title: 'การออกกำลังกายที่เหมาะสมกับวัยทำงาน',
      author: 'เทรนเนอร์ แข็งแรง',
      cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      category: 'สุขภาพ',
      views: 19800,
      readTime: 8,
      publishedDate: '2024-03-11',
      excerpt: 'วิธีการออกกำลังกายที่เหมาะสมสำหรับคนทำงานออฟฟิศ'
    },

    // ธุรกิจ
    {
      id: 8,
      title: 'เริ่มต้นธุรกิจออนไลน์อย่างไรให้ประสบความสำเร็จ',
      author: 'นักธุรกิจ รุ่งเรือง',
      cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'ธุรกิจ',
      views: 25600,
      readTime: 10,
      publishedDate: '2024-03-11',
      excerpt: 'คู่มือฉบับสมบูรณ์สำหรับผู้ที่ต้องการเริ่มต้นธุรกิจออนไลน์'
    },
    {
      id: 9,
      title: 'กลยุทธ์การตลาดดิจิทัลปี 2024',
      author: 'มาร์เก็ตติ้ง โปร',
      cover: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
      category: 'ธุรกิจ',
      views: 22400,
      readTime: 9,
      publishedDate: '2024-03-10',
      excerpt: 'เทรนด์การตลาดดิจิทัลที่ผู้ประกอบการควรรู้ในปี 2024'
    },

    // การศึกษา
    {
      id: 10,
      title: 'เทรนด์การศึกษาในยุค 2024',
      author: 'อาจารย์ วิชาการ',
      cover: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      category: 'การศึกษา',
      views: 16800,
      readTime: 6,
      publishedDate: '2024-03-10',
      excerpt: 'การเปลี่ยนแปลงในวงการการศึกษาและแนวโน้มที่น่าจับตามอง'
    },
    {
      id: 11,
      title: 'การเรียนรู้ตลอดชีวิตในยุคดิจิทัล',
      author: 'ดร.เรียนรู้ ตลอดเวลา',
      cover: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e',
      category: 'การศึกษา',
      views: 15300,
      readTime: 7,
      publishedDate: '2024-03-09',
      excerpt: 'ทำไมการเรียนรู้ตลอดชีวิตจึงสำคัญ และเราจะเริ่มต้นอย่างไร'
    },

    // ท่องเที่ยว
    {
      id: 12,
      title: '10 ที่เที่ยวธรรมชาติที่ต้องไปในปี 2024',
      author: 'นักเดินทาง ผจญภัย',
      cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      category: 'ท่องเที่ยว',
      views: 28900,
      readTime: 8,
      publishedDate: '2024-03-08',
      excerpt: 'แนะนำสถานที่ท่องเที่ยวทางธรรมชาติที่สวยงามและน่าไปเยือน'
    },
    {
      id: 13,
      title: 'เที่ยวแบบ Slow Travel ทำไมถึงมาแรง',
      author: 'ชิล ท่องเที่ยว',
      cover: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
      category: 'ท่องเที่ยว',
      views: 24600,
      readTime: 7,
      publishedDate: '2024-03-07',
      excerpt: 'ทำความรู้จักกับการท่องเที่ยวแบบ Slow Travel และทำไมถึงเป็นที่นิยม'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || article.category === selectedCategory;
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
              placeholder="ค้นหาบทความ..."
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
              ({filteredArticles.length} บทความ)
            </span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} นาที
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