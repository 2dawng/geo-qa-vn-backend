// src/components/auth/WelcomeCard.jsx
import { DoorOpen, UserPlus, Phone } from 'lucide-react';

export default function WelcomeCard({ onLogin, onRegister }) {
  return (
    <>
      <div className="flex gap-4 mb-6">
        <button
          onClick={onLogin}
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          ĐĂNG NHẬP
        </button>
        <button
          onClick={onRegister}
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3.5 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          ĐĂNG KÝ
        </button>
      </div>

      <div className="relative text-center text-sm text-gray-500 my-6">
        <span className="bg-white/85 px-4">hoặc</span>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-10"></div>
      </div>

      <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-3.5 border border-gray-300 rounded-full font-medium hover:border-gray-400 hover:shadow-md transition-all mb-3">
        <div className="w-5 h-5 bg-cover" style={{ backgroundImage: "url('https://www.google.com/favicon.ico')" }}></div>
        Tiếp tục với Google
      </button>

      <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-3.5 border border-gray-300 rounded-full font-medium hover:border-gray-400 hover:shadow-md transition-all">
        <Phone className="w-5 h-5" />
        Tiếp tục với Số điện thoại
      </button>

      <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
        Bằng việc tiếp tục, bạn đồng ý với <a href='#' className='font-bold hover:underline transition-all hover:text-blue-700'>Chính sách bảo mật</a> của TrafficBot.
      </p>
    </>
  );
}