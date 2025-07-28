import React from 'react'

const Button = ({ onClick, children, ...rest }) => {
  return (
    <div>
                <button onClick={onClick} className="animated-button relative flex items-center gap-1 px-9 py-4 border-4 border-transparent text-[16px] font-semibold text-primary rounded-full shadow-[0_0_0_2px_red] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group">
  <svg viewBox="0 0 24 24" className="arr-2 absolute left-[-25%] w-6 fill-primary z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
  
  <span className="text relative z-10 -translate-x-3 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
    {children}
  </span>

  <span className="circle absolute top-1/2 left-1/2 w-5 h-5 bg-primary opacity-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

  <svg viewBox="0 0 24 24" className="arr-1 absolute right-4 w-6 fill-primary z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
</button>
    </div>
  )
}

export default Button