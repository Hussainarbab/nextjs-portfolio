'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`شکریہ ${form.name}! آپ کا پیغام موصول ہوگیا۔`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-lg mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">رابطہ کریں</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="p-3 border rounded-lg" name="name" placeholder="نام" value={form.name} onChange={handleChange} required />
        <input className="p-3 border rounded-lg" name="email" placeholder="ای میل" value={form.email} onChange={handleChange} required />
        <textarea className="p-3 border rounded-lg" name="message" placeholder="پیغام لکھیں..." rows="4" value={form.message} onChange={handleChange} required />
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" type="submit">ارسال کریں</button>
      </form>
    </section>
  );
}
