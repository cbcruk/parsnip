function Chip({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center h-[32px] p-2 rounded-lg border border-slate-600 hover:shadow-md text-sm font-medium cursor-pointer"
      {...props}
    >
      {children}
    </button>
  )
}

export default Chip
