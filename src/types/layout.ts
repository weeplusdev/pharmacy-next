export interface MenuItem {
    label: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
  }
  
  export interface ContactInfo {
    email: string
    phone: string
    location: string
  }