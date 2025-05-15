'use client';
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Users,
  Droplet,
} from 'lucide-react';

const Schedule = () => {
  const [activeLocation, setActiveLocation] = useState('hoavien');

  const locations = [
    {
      id: 'hoavien',
      name: 'Cơ sở: Học viện An Ninh',
      address: '58 Đường 19/5, P. Văn Quán',
      phone: '096.815.6663',
      period: 'Từ Tháng 5 đến hết Tháng 9',
      schedule: [
        { day: 'Thứ hai', time: '16h30 - 19h15' },
        { day: 'Thứ ba', time: '16h30 - 19h15' },
        { day: 'Thứ tư', time: '16h30 - 19h15' },
        { day: 'Thứ năm', time: '16h30 - 19h15' },
        { day: 'Thứ sáu', time: '16h30 - 19h15' },
        { day: 'Thứ bảy', time: '7h00 - 9h00' },
        { day: 'Chủ nhật', time: 'Ngoại khóa' },
      ],
    },
    {
      id: 'hoangquocviet',
      name: 'Cơ sở: Hoàng Quốc Việt',
      address: '234 Hoàng Quốc Việt',
      phone: '098.656.1139',
      period: 'Từ Tháng 5 đến hết Tháng 9',
      schedule: [
        { day: 'Thứ hai', time: '16h30 - 19h15' },
        { day: 'Thứ ba', time: '16h30 - 19h15' },
        { day: 'Thứ tư', time: '16h30 - 19h15' },
        { day: 'Thứ năm', time: '16h30 - 19h15' },
        { day: 'Thứ sáu', time: '16h30 - 19h15' },
        { day: 'Thứ bảy', time: '16h00 - 18h00' },
        { day: 'Chủ nhật', time: 'Ngoại khóa' },
      ],
    },
    {
      id: 'nguyentuan',
      name: 'Cơ sở: Nguyễn Tuân - Vũ Trọng Phụng - Mạc Thái Tổ',
      address: '109 Nguyễn Tuân - 83 Vũ Trọng Phụng - 33 Mạc Thái Tổ',
      phone: '0854.679.19 - 098.669.9490',
      period: 'Tháng 6 và Tháng 7',
      schedule: [
        {
          day: 'Thứ hai',
          shifts: [
            { name: 'Ca 1', time: '6h00 - 7h30' },
            { name: 'Ca 2', time: '7h30 - 9h00' },
          ],
        },
        {
          day: 'Thứ ba',
          shifts: [
            { name: 'Ca 1', time: '6h00 - 7h30' },
            { name: 'Ca 2', time: '7h30 - 9h00' },
          ],
        },
        {
          day: 'Thứ tư',
          shifts: [
            { name: 'Ca 1', time: '6h00 - 7h30' },
            { name: 'Ca 2', time: '7h30 - 9h00' },
          ],
        },
        {
          day: 'Thứ năm',
          shifts: [
            { name: 'Ca 1', time: '6h00 - 7h30' },
            { name: 'Ca 2', time: '7h30 - 9h00' },
          ],
        },
        {
          day: 'Thứ sáu',
          shifts: [
            { name: 'Ca 1', time: '6h00 - 7h30' },
            { name: 'Ca 2', time: '7h30 - 9h00' },
          ],
        },
        { day: 'Thứ 7 - Chủ nhật', time: 'Ngoại khóa' },
      ],
    },
  ];

  const benefits = [
    'Học bơi với HLV chuyên nghiệp có 25 năm kinh nghiệm',
    'Cơ sở vật chất hiện đại, tiêu chuẩn Bộ Y Tế',
    'Bể bơi bốn mùa, nhiệt độ lý tưởng (30-31°C)',
    'Đội ngũ y tế và cứu hộ thường trực đảm bảo an toàn',
  ];

  const activeLocationData = locations.find(
    (location) => location.id === activeLocation,
  );

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 md:px-8  relative overflow-hidden">
      {/* Background water wave effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-200 to-transparent"></div>
      </div>

      {/* Swimming animation */}
      {/* <div className="absolute top-0 left-0 w-full">
        <div className="relative">
          <div className="absolute top-0 right-0 transform -translate-y-1/2 opacity-80">
            <svg
              width="80"
              height="30"
              viewBox="0 0 80 30"
              className="animate-swim"
            >
              <path
                d="M10,15 Q20,5 30,15 T50,15 T70,15"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="10" cy="15" r="4" fill="white" />
              <path d="M16,12 L24,12 L20,18 L16,12" fill="white" />
            </svg>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <Droplet size={40} className="text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            THỜI KHOÁ BIỂU{' '}
            <span className="text-yellow-300">CLB BƠI THỦ ĐÔ</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hòa mình vào bơi lặn với các lớp học bơi chuyên nghiệp của chúng tôi
            tại nhiều cơ sở trên địa bàn Hà Nội
          </p>
        </div>

        {/* Benefits Section - Above Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-blue-300 border-opacity-30 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mt-1">
                  <CheckCircle size={18} className="text-yellow-300" />
                </div>
                <p className="ml-2 text-white text-sm">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === location.id
                  ? 'bg-white text-blue-700 shadow-lg'
                  : 'bg-blue-700 text-white bg-opacity-50 hover:bg-opacity-70'
              }`}
            >
              {location.name.split(':')[1]}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="bg-white bg-opacity-95 rounded-xl shadow-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-800">
                {activeLocationData ? activeLocationData.name : ''}
              </h3>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{activeLocationData?.address}</span>
              </div>
              <div className="flex items-center mt-1 text-gray-600">
                <Phone size={16} className="mr-1" />
                <span className="text-sm">{activeLocationData?.phone}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-blue-50 rounded-lg text-blue-800 flex items-center">
              <Calendar size={18} className="mr-2" />
              <span className="font-medium">{activeLocationData?.period}</span>
            </div>
          </div>

          {/* Schedule Grid */}
          {activeLocationData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeLocationData.schedule.map((item, index) => (
                <div
                  key={index}
                  className="border border-blue-100 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="font-bold text-blue-800 mb-2">{item.day}</div>
                  {item.time ? (
                    <div className="flex items-center text-gray-700">
                      <Clock size={14} className="mr-1" />
                      <span>{item.time}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {item.shifts?.map((shift, shiftIndex) => (
                        <div
                          key={shiftIndex}
                          className="flex items-center text-gray-700"
                        >
                          <Clock size={14} className="mr-1" />
                          <span>
                            {shift.name}: {shift.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 md:p-10 rounded-xl shadow-xl text-center">
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
      </div>
    </div>
  );
};

export default Schedule;
