
const Footer = () => {
  const date = new Date
  return (
    <div className="w-full p-10 flex items-center justify-center border-t-white/10 border-t-[1px] text-white/50">
      © Laura Saidi {date.getFullYear()}
    </div>
  )
}

export default Footer