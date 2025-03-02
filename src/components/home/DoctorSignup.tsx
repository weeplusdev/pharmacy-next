import Link from 'next/link'

export function DoctorSignup() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">สำหรับแพทย์และเภสัชกร</h2>
          <p className="text-lg mb-8">
            เข้าร่วมเป็นส่วนหนึ่งของทีมผู้เชี่ยวชาญด้านสุขภาพกับเรา เพื่อให้คำปรึกษาและแนะนำการใช้ยาที่ถูกต้องแก่ผู้ป่วย
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/professional/register" 
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              สมัครเป็นผู้เชี่ยวชาญ
            </Link>
            <Link 
              href="/professional/info" 
              className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
            >
              ข้อมูลเพิ่มเติม
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
 