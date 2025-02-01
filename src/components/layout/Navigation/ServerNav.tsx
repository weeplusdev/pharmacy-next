import { MAIN_MENU } from '@/comstants/layout'

export function ServerNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {MAIN_MENU.map((item) => (
        <a 
          key={item.href} 
          href={item.href}
          className="hover:text-emerald-100"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}