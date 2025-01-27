import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Headphones, Search, LogIn, ChevronRight, ChevronLeft } from 'lucide-react';
import { Chatbot } from './components/Chatbot';
import { Login } from './pages/Login';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667",
      title: "เรื่องราวแห่งความรัก",
      category: "นิยายรัก"
    },
    {
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      title: "ผจญภัยในดินแดนแห่งจินตนาการ",
      category: "แฟนตาซี"
    },
    {
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "ปริศนาห้องสมุด",
      category: "สืบสวน"
    },
    {
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
      title: "ความลับแห่งดวงดาว",
      category: "ไซไฟ"
    },
    {
      image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
      title: "เส้นทางนักรบ",
      category: "แอคชั่น"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-navy-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Unlocking The World For Everyone To Explore
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                "เปิดประตูสู่โลกกว้างให้ทุกคนได้สัมผัส"
              </p>
              <p className="text-gray-600 mb-6">
                Welcome to Premium Content Audio. Your daily dose of news, insights, and entertainment is just a click away.
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Novel Carousel Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">แนะนำสำหรับคุณ</h2>
          <div className="relative">
            {/* Carousel */}
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 20}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-[20%] h-full p-2">
                    <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="inline-block bg-blue-600 px-2 py-1 rounded-full text-xs mb-2">
                            {slide.category}
                          </span>
                          <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                          <button className="bg-white text-gray-900 px-4 py-1 rounded text-sm hover:bg-gray-100 transition-colors">
                            อ่านเพิ่มเติม
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
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
              <Link to="#" className="text-gray-300 hover:text-white">บทความ</Link>
              <Link to="#" className="text-gray-300 hover:text-white">สถานะ</Link>
              <Link to="#" className="text-gray-300 hover:text-white">นิยาย</Link>
              <Link to="#" className="text-gray-300 hover:text-white">ข่าว</Link>
              <Link to="#" className="text-gray-300 hover:text-white">เกี่ยวกับเรา</Link>
              <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Link to="/login">
                <LogIn className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;