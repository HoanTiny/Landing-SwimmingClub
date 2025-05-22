'use client';
import React, { useState, useEffect } from 'react';

const SwimmingProgramLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    {
      title: 'Giai đoạn 1 – Làm quen và củng cố kỹ thuật cơ bản',
      icon: '🏊‍♀️',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      skills: [
        'Làm quen với nước và môi trường dưới nước',
        'Học kỹ thuật thở đúng cách khi bơi',
        'Rèn luyện tư thế nổi cơ thể, giữ thăng bằng',
        'Thực hành 4 kiểu bơi: ếch – sải – ngửa – bướm',
        'Nắm vững kỹ thuật tay – chân của từng kiểu bơi',
        'Phối hợp nhịp nhàng giữa hô hấp và vận động',
      ],
    },
    {
      title: 'Giai đoạn 2 – Tăng cường sức bền và nâng cao kỹ năng',
      icon: '💪',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      skills: [
        'Tăng cường độ bài tập với cự ly dài hơn',
        'Rèn luyện thể lực và khả năng chịu đựng',
        'Kỹ thuật xuất phát (bật nhảy vào nước đúng kỹ thuật)',
        'Kỹ thuật quay vòng khi bơi liên tục',
        'Điều chỉnh tốc độ, duy trì nhịp bơi ổn định',
        'Duy trì kỹ thuật đúng khi vận động kéo dài',
      ],
    },
    {
      title: 'Giai đoạn 3 – Phối hợp nâng cao và mô phỏng thi đấu',
      icon: '🏆',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      skills: [
        'Luyện phối hợp toàn bộ kỹ năng trong bài tập liên hoàn',
        'Mô phỏng tình huống thi đấu: bơi tính giờ, tiếp sức',
        'Tham gia trải nghiệm bơi ngoài trời (sông, hồ, biển)',
        'Tăng khả năng thích nghi với môi trường tự nhiên',
        'Rèn phản xạ và ứng biến linh hoạt',
        'Nâng cao kỹ năng sinh tồn dưới nước',
      ],
    },
  ];

  const FloatingElement = ({
    children,
    delay = 0,
  }: {
    children: React.ReactNode;
    delay?: number;
  }) => (
    <div
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        >
          <div className="flex justify-center items-center gap-6 mb-8">
            <FloatingElement>
              <div className="text-8xl">🏊‍♂️</div>
            </FloatingElement>
            <FloatingElement delay={0.5}>
              <div className="text-7xl">🌊</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="text-8xl">🏊‍♀️</div>
            </FloatingElement>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
            CHƯƠNG TRÌNH HỌC BƠI
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Khám phá hành trình từ người mới bắt đầu đến vận động viên bơi lội
            chuyên nghiệp với 3 giai đoạn học tập bài bản
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 animate-pulse">
            ▶️ BẮT ĐẦU NGAY HÔM NAY
          </button>
        </div>

        {/* Main Program Cards */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`
                ${phase.bgColor} ${phase.borderColor}
                border-2 rounded-3xl shadow-2xl overflow-hidden
                transform transition-all duration-700 hover:scale-105 hover:shadow-3xl
                ${activePhase === index ? 'ring-4 ring-blue-400 ring-opacity-50 scale-102' : ''}
                ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-r ${phase.color} text-white shadow-xl flex-shrink-0`}
                  >
                    <div className="text-5xl">{phase.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                      {phase.title}
                    </h2>
                    <span
                      className={`inline-block px-6 py-2 bg-gradient-to-r ${phase.color} text-white font-bold rounded-full text-lg`}
                    >
                      Giai đoạn {index + 1}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white bg-opacity-80 p-5 rounded-xl border border-gray-200 hover:bg-opacity-100 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-green-500 text-2xl flex-shrink-0">
                          ✅
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {skill}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div
          className={`bg-white bg-opacity-90 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          style={{ transitionDelay: '1500ms' }}
        >
          <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-800 mb-12">
            Tại sao chọn chương trình của chúng tôi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl shadow-xl">
                ⏱️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Tiến độ bài bản
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chương trình được thiết kế từ cơ bản đến nâng cao, phù hợp với
                mọi trình độ
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-4xl shadow-xl">
                👥
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Học tập nhóm
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Môi trường học tập tích cực, động viên lẫn nhau cùng tiến bộ
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-4xl shadow-xl">
                🌊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Trải nghiệm thực tế
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cơ hội bơi ngoài trời tại sông, hồ, biển để nâng cao kỹ năng
                thực chiến
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center bg-main-gradient rounded-3xl p-12 md:p-16 text-white shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`}
          style={{ transitionDelay: '2000ms' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sẵn sàng bước vào thế giới bơi lội? 🏊‍♂️
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Tham gia ngay hôm nay để bắt đầu hành trình chinh phục mọi dòng
            nước!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110"
              href="https://forms.gle/AErv2dcfnJhaDaAs9"
              target="_blank"
            >
              🏊‍♀️ ĐĂNG KÝ NGAY
            </a>

            <a
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-110"
              href="https://www.facebook.com/profile.php?id=100043515746559"
              target="_blank"
            >
              💬 TƯ VẤN MIỄN PHÍ
            </a>
          </div>
        </div>

        {/* Swimming Pool Animation */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-32 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="animate-pulse absolute top-4 left-10 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
              <div
                className="animate-pulse absolute top-8 right-16 w-6 h-6 bg-white bg-opacity-40 rounded-full"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="animate-pulse absolute bottom-6 left-1/3 w-10 h-10 bg-white bg-opacity-25 rounded-full"
                style={{ animationDelay: '2s' }}
              ></div>
              <div
                className="animate-pulse absolute bottom-4 right-1/4 w-4 h-4 bg-white bg-opacity-35 rounded-full"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent to-transparent opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimmingProgramLanding;
