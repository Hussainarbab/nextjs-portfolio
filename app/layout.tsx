import "./globals.css";
import Navbar from "./components/Navbar";

function Footer() {
  return (
    <footer className="bg-white py-8 text-center">
      <div className="max-w-3xl mx-auto text-sm text-gray-600">
        © {new Date().getFullYear()} Hussain Abbas — Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}

export const metadata = {
  title: "Hussain Abbas | Frontend Developer",
  description: "Professional Portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
