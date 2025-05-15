import { ArrowRight, Phone, Users } from 'lucide-react';
import React from 'react';

const TryRegister = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 md:p-10 shadow-xl text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4">
          Đăng Ký Học Thử Miễn Phí Ngay Hôm Nay!
        </h3>
        <p className="text-blue-100 mb-8">
          Cho con trải nghiệm ngay buổi học đầu tiên cùng đội ngũ HLV chuyên
          nghiệp tại CLB Bơi Thủ Đô
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfd6QDKqJPiWCN_rg1WE3GMbBIAvYTgYKJRIWAfia4s_SAY6Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mr-2">ĐĂNG KÝ HỌC THỬ NGAY</span>
            <ArrowRight size={20} />
          </a>

          <a
            href="tel:0368123456"
            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-800 font-medium py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1"
          >
            <Phone size={18} className="mr-2" />
            <span>Hotline: 0968 156 663</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Users size={18} className="text-blue-300 mr-2" />
          <span className="text-blue-100 text-sm">
            Đã có hơn 15,000 học viên đăng ký thành công
          </span>
        </div>
      </div>
    </div>
  );
};

export default TryRegister;
