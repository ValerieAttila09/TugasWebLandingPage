import React from 'react'

const WindowHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed left-21 right-5 top-17 z-20 overflow-hidden border border-red-500">
      <div className="w-full h-full relative p-6 ">
        {children}
      </div>
    </div>
  )
}

export default WindowHidden