'use client'

import React from 'react'
import { FaBars } from 'react-icons/fa'

const SidebarToggleButton = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('separator-sidebar')
    if (sidebar) {
      sidebar.classList.toggle('-translate-x-full')
    }
  }

  return (
    <button
      onClick={toggleSidebar}
      type="button"
      className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-minion-yellow hover:text-dark-charcoal hover:bg-minion-yellow focus:ring-2 focus:ring-dark-charcoal focus:outline-none sm:hidden"
    >
      <span className="sr-only">Open sidebar</span>
      <FaBars className="size-6" aria-hidden="true" />
    </button>
  )
}

export default SidebarToggleButton
