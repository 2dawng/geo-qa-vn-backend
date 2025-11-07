// src/components/auth/RegisterCard.jsx
import { useState } from 'react';
import { ArrowLeft, User, Mail, Lock } from 'lucide-react';

export default function RegisterCard({ onBack, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('Đăng ký:', formData);
  };

  return (
    <div className="space-y-5">
      {/* Nút quay lại */}
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Quay lại
      </button>

      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Tạo tài khoản mới
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-xl transform cursor-pointer transition-all duration-200"
        >
          ĐĂNG KÝ NGAY
        </button>
      </form>

      {/* Chuyển sang đăng nhập */}
      <p className="text-center mt-5 text-sm text-gray-600">
        Đã có tài khoản?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-green-600 font-semibold hover:underline cursor-pointer"
        >
          Đăng nhập
        </button>
      </p>
    </div>
  );
}