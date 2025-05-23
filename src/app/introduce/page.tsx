/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Award,
  Users,
  Trophy,
  Star,
  CheckCircle,
  Waves,
  Shield,
  ThermometerSun,
  Medal,
} from 'lucide-react';

const SwimmingClubAbout = () => {
  const highlights = [
    'Hơn 10.000 học viên đã tốt nghiệp trong 8 mùa hè liên tiếp',
    'Hơn 15.000 học viên hoàn thành chương trình đầu biết bơi và xử lý tình huống an toàn',
    'Đào tạo học sinh đạt giải cấp Quận, Thành phố và Toàn quốc',
    'Được nhiều phụ huynh tin tưởng và lựa chọn trong suốt 8 năm hoạt động',
    'Là một trong những CLB đầu tiên tổ chức trải nghiệm bơi sông - hồ - biển và kỹ năng sống',
  ];

  return (
    <div className="min-h-screen ">
      {/* 1. Thông tin về Chủ nhiệm CLB */}
      <section className="py-16 bg-transparent bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thông Tin Về Chủ Nhiệm CLB
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              {/* Hình ảnh Chủ nhiệm */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
                <div className="text-center">
                  <div className="w-56 h-56 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                    <img
                      src="/images/trainners/hlv.jpg"
                      alt="HLV"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thầy Quyền</h3>
                  <p className="text-blue-100 text-lg font-medium">
                    Chủ Nhiệm CLB
                  </p>
                  <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                    <Medal className="w-5 h-5 mr-2" />
                    <span className="text-sm">Cựu VĐV Đội tuyển Quốc gia</span>
                  </div>
                </div>
              </div>

              {/* Thông tin chi tiết */}
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Thành tích thi đấu
                      </h4>
                      <p className="text-gray-700">
                        Cựu vận động viên đội tuyển Quốc gia, sở hữu nhiều huy
                        chương các loại trong sự nghiệp thi đấu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Bằng cấp chuyên môn
                      </h4>
                      <p className="text-gray-700">
                        Có bằng kiện tướng bơi lội cấp Quốc gia, Quốc tế và
                        chứng chỉ trọng tài quốc tế do Liên đoàn, Tổng cục TDTT
                        cấp.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Kinh nghiệm xây dựng CLB
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Với nhiều năm kinh nghiệm đã xây dựng và phát triển CLB
                        Bơi Lặn Thủ Đô tại Hà Nội:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">
                            Đào tạo hơn 1.200 học sinh mỗi năm trên toàn địa bàn
                            Hà Nội
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">
                            Nhiều học viên đạt huy chương cấp Quận, Thành phố và
                            Toàn quốc
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Waves className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Chương trình đặc biệt
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Tiên phong tổ chức các buổi bơi ngoại khóa tại sông, hồ,
                        biển giúp học sinh:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Nâng cao kỹ năng phòng tránh đuối nước
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Tự tin khi bơi ngoài trời
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Giới thiệu CLB */}
      <div className="min-h-screen bbg-transparent bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center ">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Đôi nét về CLB Bơi Lặn Thủ Đô
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            {/* Content Section */}
            <div className="space-y-8 p-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Môi trường học tập
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {' '}
                    chuyên nghiệp
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  <strong>CLB Bơi Lặn Thủ Đô</strong> là một môi trường học tập
                  và rèn luyện chuyên nghiệp dành cho trẻ em và thanh thiếu niên
                  yêu thích bộ môn bơi lội.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Với định hướng{' '}
                  <strong className="text-blue-600">
                    &quot;Tâm - Trí - Thể - Lực&quot;
                  </strong>
                  , CLB không chỉ dạy bơi an toàn mà còn chú trọng phát triển
                  thể lực, tinh thần kỷ luật và sự tự tin cho mỗi học viên.
                </p>
              </div>

              {/* Facilities Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cơ sở vật chất hàng đầu
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hoạt động tại chuỗi bể bơi hàng đầu Hà Nội, đảm bảo an toàn
                  sức khỏe của học viên với:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 ">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Hệ thống bể bơi bốn mùa
                      </div>
                      <div className="text-sm text-gray-500">
                        Hoạt động quanh năm
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50  rounded-2xl shadow-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Chất lượng đạt chuẩn
                      </div>
                      <div className="text-sm text-gray-500">
                        Theo tiêu chuẩn Bộ Y Tế
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                    <ThermometerSun className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Nhiệt độ ổn định
                      </div>
                      <div className="text-sm text-gray-500">
                        30-31°C mùa đông
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Tiện ích chuyên nghiệp
                      </div>
                      <div className="text-sm text-gray-500">
                        Đầy đủ trang thiết bị
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coaching Team Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Đội ngũ huấn luyện viên chuyên nghiệp
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  CLB có đội ngũ huấn luyện viên có chuyên môn cao, giàu kinh
                  nghiệm là vận động viên bơi, các cử nhân sư phạm thể dục thể
                  thao luôn đồng hành sát sao cùng từng học viên.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Vận động viên chuyên nghiệp
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Cử nhân sư phạm TDTT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Card Section */}
            <div className="relative rounded-md overflow-hidden shadow-lg ml-8 mr-8">
              <img
                src="/images/banner/P1377347.jpg"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* 3. Điểm nổi bật */}
      <section className="py-16 bg-transparent bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Điểm Nổi Bật
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight số liệu */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <p className="text-gray-600">Học viên tốt nghiệp</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">
                15,000+
              </div>
              <p className="text-gray-600">Học viên an toàn</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                1,200+
              </div>
              <p className="text-gray-600">Học sinh/năm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwimmingClubAbout;
