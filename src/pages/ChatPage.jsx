'use client';

import React, { useState } from 'react';
import RobotLogo from '../assets/imgs/LogoRobot.jpg'
import { 
  Home, 
  Compass, 
  BookOpen, 
  Plug, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Paperclip, 
  Send,
  Crown,
  Sparkles,
  Search,
  Menu,
  X,
  FileText,
  GraduationCap,
  Image,
  Code,
  Lightbulb
} from 'lucide-react';

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const recentChats = [
    { id: '1', title: 'Mức phạt vượt đèn đỏ', icon: <div className="w-5 h-5 bg-red-100 rounded flex items-center justify-center">Traffic Light</div>, time: 'Hôm nay' },
    { id: '2', title: 'Giấy tờ cần mang khi lái xe', icon: <FileText className="w-4 h-4" />, time: 'Hôm nay' },
    { id: '3', title: 'Biển báo giao thông cơ bản', icon: <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">Warning</div>, time: 'Hôm qua' },
    { id: '4', title: 'Quy định tốc độ tối đa', icon: <div className="w-5 h-5 bg-yellow-100 rounded flex items-center justify-center">Car</div>, time: 'Hôm qua' },
    { id: '5', title: 'Xử lý tai nạn giao thông', icon: <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">Ambulance</div>, time: 'Hôm qua' },
    { id: '6', title: 'Đỗ xe đúng quy định', icon: <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">Parking</div>, time: 'Hôm qua' },
  ];

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Tư vấn luật',
      description: 'Hỗ trợ giải đáp mọi thắc mắc về luật giao thông Việt Nam',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Ôn thi GPLX',
      description: 'Luyện tập 450 câu hỏi sát hạch lái xe chính thức',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'Nhận diện biển báo',
      description: 'Tải ảnh lên để AI phân tích và giải thích biển báo',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Tra cứu nhanh',
      description: 'Tìm kiếm mức phạt, quy định theo từ khóa',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Mẹo lái xe an toàn',
      description: 'Gợi ý tình huống thực tế và cách xử lý đúng luật',
      color: 'from-yellow-400 to-amber-400'
    },
  ];

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Trang chủ', active: true },
    { icon: <Compass className="w-5 h-5" />, label: 'Khám phá' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Thư viện luật' },
    { icon: <Plug className="w-5 h-5" />, label: 'Tiện ích' },
    { icon: <Users className="w-5 h-5" />, label: 'Cộng đồng', badge: 'Mới' },
  ];

  const bottomItems = [
    { icon: <Settings className="w-5 h-5" />, label: 'Cài đặt' },
    { icon: <LogOut className="w-5 h-5" />, label: 'Đăng xuất' },
  ];

  return (
    <>
      <div className="px-4 py-4 h-full">
        <div className="flex h-full gap-3">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'w-80' : 'w-0 lg:w-20'} transition-all duration-300 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col rounded-4xl`}>

            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-15 h-15 rounded-full relative overflow-hidden flex-none">
                    <img className='w-full h-full absolute bg-cover' src={RobotLogo} alt="no img" />
                  </div>
                  {sidebarOpen && (
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">TrafficBot</h1>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded-full">Pro</span>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* User Info */}
            {sidebarOpen && (
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex-none w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold ">
                    NT
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">User</p>
                    <p className="text-xs text-gray-500">user@email.com</p>
                  </div>
                  <select className="text-xs bg-gray-100 rounded px-2 py-1">
                    <option>Personal</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {sidebarItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                    item.active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 text-left font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </nav>

            {/* Recent Chats */}
            {sidebarOpen && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">Cuộc trò chuyện gần đây</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700">Xem tất cả</button>
                </div>
                <div className="space-y-2">
                  {recentChats.map((chat) => (
                    <button
                      key={chat.id}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all text-left"
                    >

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{chat.title}</p>
                        <p className="text-xs text-gray-500">{chat.time}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2 justify-center">
                  <Plus className="w-4 h-4" />
                  Tạo cuộc trò chuyện mới
                </button>
              </div>
            )}

            {/* Bottom Navigation */}
            <nav className="border-t border-gray-200 p-4 space-y-1">
              {bottomItems.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all"
                >
                  {item.icon}
                  {sidebarOpen && <span className="flex-1 text-left font-medium">{item.label}</span>}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col chat-area rounded-4xl items-center justify-center bg-white/5 backdrop-blur-xl px-4 py-4">
            {/* Header */}
            <header className="px-8 py-4 mt-auto">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-15 h-15 rounded-full relative overflow-hidden flex-none">
                    <img className='w-full h-full absolute object-center' src={RobotLogo} alt="" />
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Chào mừng đến với Luật GT AI</h1>
                    <p className="text-sm text-gray-600">Trợ lý AI chuyên về luật giao thông Việt Nam</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Features Grid */}
            <div className="p-8 overflow-y-auto mt-auto">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {features.map((feature, idx) => (
                    <button
                      key={idx}
                      className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </button>
                  ))}
                </div>

                {/* Upgrade Banner */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 mb-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Crown className="w-8 h-8" />
                      <div>
                        <h3 className="text-sm font-semibold">Nâng cấp lên Pro để sử dụng không giới hạn</h3>
                        <p className="text-sm opacity-90">Mở khóa tất cả tính năng AI cao cấp</p>
                      </div>
                    </div>
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all">
                      Nâng cấp ngay
                    </button>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200">
                    <div className="text-center mb-4">
                      <p className="text-gray-700 font-medium">Luật GT AI có thể giúp gì cho bạn hôm nay?</p>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Hỏi về luật giao thông, mức phạt, biển báo..."
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          <Paperclip className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                            GPT
                          </div>
                          <span>GPT-4o</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span>11233/25000</span>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Gợi ý câu hỏi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}