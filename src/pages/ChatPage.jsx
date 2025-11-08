"use client";

import React, { useState, useEffect } from "react";
import Button from "../components/ui/ChatInput";
import RobotLogo from "../assets/imgs/botLogo.gif";
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
  Lightbulb,
  ArrowLeftFromLine,
} from "lucide-react";
import AvatarBubble from "../components/ui/AvatarBubble";
import ChatBox from "../pages/ChatBox";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const recentChats = [
    {
      id: "1",
      title: "Mức phạt vượt đèn đỏ",
      time: "Hôm nay",
    },
    {
      id: "2",
      title: "Giấy tờ cần mang khi lái xe",
      icon: <FileText className="w-4 h-4" />,
      time: "Hôm nay",
    },
    {
      id: "3",
      title: "Biển báo giao thông cơ bản",
      time: "Hôm qua",
    },
    {
      id: "4",
      title: "Quy định tốc độ tối đa",
      time: "Hôm qua",
    },
    {
      id: "5",
      title: "Xử lý tai nạn giao thông",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
    {
      id: "6",
      title: "Đỗ xe đúng quy định",
      time: "Hôm qua",
    },
  ];

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Tư vấn luật",
      description: "Hỗ trợ giải đáp mọi thắc mắc về luật giao thông Việt Nam",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Ôn thi GPLX",
      description: "Luyện tập 450 câu hỏi sát hạch lái xe chính thức",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Nhận diện biển báo",
      description: "Tải ảnh lên để AI phân tích và giải thích biển báo",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tra cứu nhanh",
      description: "Tìm kiếm mức phạt, quy định theo từ khóa",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Mẹo lái xe an toàn",
      description: "Gợi ý tình huống thực tế và cách xử lý đúng luật",
      color: "from-yellow-400 to-amber-400",
    },
  ];

  const sidebarItems = [
    {
      icon: <Plus className="w-5 h-5" />,
      label: "Tạo đoạn chat mới",
    },
    { icon: <Compass className="w-5 h-5" />, label: "Khám phá" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Thư viện luật" },
    { icon: <Plug className="w-5 h-5" />, label: "Tiện ích" },
  ];
  return (
    <>
      <div className="h-full">
        <div className="flex h-full gap-3 px-4 py-4">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "w-80" : "w-0 lg:w-20"
            } transition-all duration-300 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col rounded-4xl overflow-y-scroll ${
              isLoaded ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-15 h-15 rounded-full relative overflow-hidden flex-none">
                    <img
                      className="w-full h-full absolute bg-cover"
                      src={RobotLogo}
                      alt="no img"
                    />
                  </div>
                  {sidebarOpen && (
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">
                        TrafficBot
                      </h1>
                      <div className="flex items-center gap-2"></div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  {sidebarOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
              {sidebarItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full cursor-pointer flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                    item.active
                      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-white"
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 text-left font-medium">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="bg-linear-to-r from-pink-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
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
              <div className="flex-1 flex flex-col border-t border-b border-gray-200 min-h-0">
                <div className="p-4 shrink-0 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Cuộc trò chuyện gần đây
                  </h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer">
                    Xem tất cả
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 border-l-4 border-amber-500">
                  {recentChats.map((chat) => (
                    <button
                      key={chat.id}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all text-left cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {chat.title}
                        </p>
                        <p className="text-xs text-gray-500">{chat.time}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* User Info */}
            {sidebarOpen && (
              <div className="px-6 py-4 border-b border-gray-200 mt-auto shrink-0">
                <div className="flex items-center gap-3">
                  <AvatarBubble />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">User</p>
                    <p className="text-xs text-gray-500">user@email.com</p>
                  </div>
                  <div className="flex w-10 h-10 items-center justify-center rounded-xl cursor-pointer hover:bg-white transition-all duration-700">
                    <ArrowLeftFromLine />
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* Main Content */}
          <main
            className={`flex-1 flex flex-col main-chat rounded-4xl items-center justify-center bg-white/5 backdrop-blur-xl px-4 py-4 ${
              isLoaded ? "animate-slide-right" : "opacity-0"
            }`}
          >
            {/* Header */}
            <header className="px-8 py-4 mt-auto">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                      Chào mừng đến với TrafficBot
                    </h1>
                    <p className="text-xl text-gray-600">
                      Trợ lý AI chuyên về luật giao thông Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Features Grid */}
            <div className="p-8 overflow-y-auto mt-auto chat-area">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {features.map((feature, idx) => (
                    <button
                      key={idx}
                      className={`flex flex-col items-start bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1 ${
                        isLoaded ? "animate-slide-down" : "opacity-0"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 bg-linear-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-start">
                        {feature.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200">
                    <div className="text-center mb-4">
                      <p className="text-gray-700 font-medium">
                        TrafficBot có thể giúp gì cho bạn hôm nay?
                      </p>
                    </div>
                    <Button />

                    <div className="flex items-center justify-between text-sm">
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
