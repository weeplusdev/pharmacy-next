import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export function HeaderTop() {
    return (
      <div className="bg-white text-gray-600 py-2 border-b">
        <div className="container mx-auto px-4  py-4">
          <div className="flex justify-between items-center">
           
            <div className="flex items-center space-x-6">
              <a href="mailto:info@koratpharma.com" className="flex items-center space-x-2">
                <span className="text-blue-500"><MailIcon className="w-5 h-5" /></span>
                <span>info@koratpharma.com</span>
              </a>
              <a href="tel:099-999-9999" className="flex items-center space-x-2">
                <span className="text-blue-500"><PhoneIcon className="w-5 h-5" /></span>
                <span>099-999-9999</span>
              </a>
              <a href="/location" className="flex items-center space-x-2">
                <span className="text-blue-500"><MapPinIcon className="w-5 h-5" /></span>
                <span>เมืองนครราชสีมา</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }