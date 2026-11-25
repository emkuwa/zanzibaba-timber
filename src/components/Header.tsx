'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, Menu, X, ChevronDown } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Header() {
  const { locale, setLocale, t } = useBilingual()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { href: '/', label: t('navigation.home') },
  ]

  const productLinks = [
    { href: '/products', label: 'All Products' },
    { href: '/american-hardwood', label: 'American Hardwood' },
    { href: '/timber-sizes', label: t('navigation.timberSizes') },
    { href: '/hardwood', label: 'Hardwood' },
    { href: '/treated-wood-poles', label: t('navigation.treatedWoodPoles') },
    { href: '/marine-board', label: 'Marine Board' },
    { href: '/plywood', label: 'Plywood' },
    { href: '/prices', label: t('navigation.prices') },
  ]

  const ser¶»§q«^