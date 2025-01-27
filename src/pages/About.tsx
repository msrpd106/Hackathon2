import React from 'react';
import { Headphones, Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  const teamMembers = [
    {
      name: 'สมชาย ใจดี',
      role: 'ผู้ก่อตั้งและซีอีโอ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
    {
      name: 'สมหญิง รักดี',
      role: 'ผู้อำนวยการฝ่ายเนื้อหา',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
    {
      name: 'วิชัย เก่งกาจ',
      role: 'หัวหน้าฝ่ายเทคโนโลยี',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">เกี่ยวกับเรา</h1>
            <p className="text-xl max-w-3xl mx-auto">
              AudioPrime คือผู้นำด้านการให้บริการเนื้อหาระดับพรีเมียมในรูปแบบเสียง 
              เรามุ่งมั่นที่จะนำเสนอประสบการณ์การฟังที่ดีที่สุดให้กับผู้ใช้งานของเรา
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">พันธกิจของเรา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราเชื่อว่าการเรียนรู้และความบันเทิงควรเข้าถึงได้ทุกที่ทุกเวลา 
            เราจึงมุ่งมั่นพัฒนาแพลตฟอร์มที่จะทำให้เนื้อหาคุณภาพสามารถเข้าถึงได้ในรูปแบบเสียง
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ทีมของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ติดต่อเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">อีเมล</h3>
              <p className="text-gray-600">contact@audioprime.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">โทรศัพท์</h3>
              <p className="text-gray-600">02-123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">ที่อยู่</h3>
              <p className="text-gray-600">123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}