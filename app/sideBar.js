'use client'

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CNavGroup,
  CNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import {
  cilSpeedometer,
  cilCart,
  cilPeople,
  cilSettings,
  cilChart,
  cilBell,
  cilNotes,
  cilUser,
  cilEnvelopeClosed,
  cilStar,
  cilFolder,
  cilPuzzle,
  cilChevronRight,
} from '@coreui/icons'

export const SidebarExample = () => {
  const [active, setActive] = useState('Dashboard')

  const menuItems = [
    {
      title: 'Dashboard',
      icon: cilSpeedometer,
      badge: 'NEW',
    },
    {
      title: 'Products',
      icon: cilCart,
    },
    {
      title: 'Customers',
      icon: cilPeople,
    },
    // {
    //   title: 'Analytics',
    //   icon: cilChart,
    // },
    {
      title: 'Notifications',
      icon: cilBell,
      badge: '5',
    },
    // {
    //   title: 'Messages',
    //   icon: cilEnvelopeClosed,
    // },
    {
      title: 'Favorites',
      icon: cilStar,
    },
    // {
    //   title: 'Files',
    //   icon: cilFolder,
    // },
    // {
    //   title: 'Profile',
    //   icon: cilUser,
    // },
    // {
    //   title: 'Settings',
    //   icon: cilSettings,
    // },
  ]

  return (
    <CSidebar
      unfoldable
      className="border-0 vh-100 shadow-lg"
      style={{
        background:
          'linear-gradient(180deg, #0f172a 0%, #111827 50%, #1e293b 100%)',
        width: '280px',
      }}
    >
      <CSidebarHeader
        className="border-bottom border-secondary px-4"
        style={{
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <CSidebarBrand
          className="d-flex align-items-center gap-3 text-white fw-bold fs-4 button-underline"
          href="#"
        >

          <div className="button-underline">
            <div className="fw-bold">AdminPro</div>
          </div>
        </CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav className="p-3 pt-4">

        {menuItems.map((item, index) => (
          <CNavItem
            key={index}
            href="#"
            onClick={() => setActive(item.title)}
            className={`mb-2 rounded-4 transition-all ${
              active === item.title ? 'active-menu' : ''
            }`}
            style={{
              background:
                active === item.title
                  ? 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)'
                  : 'transparent',
              transition: '0.3s ease',
            }}
          >
            <div
              className="d-flex align-items-center justify-content-between px-3"
              style={{
                color:
                  active === item.title ? '#fff' : '#cbd5e1',
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <CIcon
                  icon={item.icon}
                  size="lg"
                />

                <span className="fw-medium">
                  {item.title}
                </span>
              </div>

              <div className="d-flex align-items-center gap-2">
                {item.badge && (
                  <CBadge
                    color={
                      item.badge === 'NEW'
                        ? 'success'
                        : 'danger'
                    }
                    shape="rounded-pill"
                  >
                    {item.badge}
                  </CBadge>
                )}

                <CIcon
                  icon={cilChevronRight}
                  size="sm"
                />
              </div>
            </div>
          </CNavItem>
        ))}

      </CSidebarNav>

    </CSidebar>
  )
}