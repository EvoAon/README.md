import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pupup</h1>
        <div className="space-x-4">
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-xl">เข้าสู่ระบบ</Link>
          <Link href="/register" className="bg-gray-100 px-4 py-2 rounded-xl">สมัครใช้งาน</Link>
        </div>
      </header>
      <main className="p-8 max-w-6xl mx-auto text-center py-20">
        <h2 className="text-4xl font-bold mb-4">แชร์ลิงก์เดียว ขายได้ทุกช่องทาง</h2>
        <p className="text-lg text-gray-600 mb-8">
          แพลตฟอร์มสำหรับ Creator และแม่ค้าออนไลน์ สร้างรายได้ด้วยลิงก์เดียว
        </p>
        <Link href="/register" className="bg-black text-white px-8 py-4 rounded-xl text-lg">
          เริ่มต้นใช้ฟรี
        </Link>
      </main>
      <footer className="p-6 text-center text-sm text-gray-500 border-t">
        © 2025 Pupup Co., Ltd.
      </footer>
    </div>
  )
}