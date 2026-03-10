export function BackgroundPostits() {
  // Post-it decorations positioned around the screen
  const postits = [
    { top: "5%", left: "10%", rotate: "-15deg" },
    { top: "8%", right: "5%", rotate: "20deg" },
    { top: "15%", left: "3%", rotate: "10deg" },
    { top: "25%", right: "8%", rotate: "-10deg" },
    { top: "40%", left: "5%", rotate: "5deg" },
    { top: "45%", right: "3%", rotate: "-20deg" },
    { top: "60%", left: "8%", rotate: "-5deg" },
    { top: "65%", right: "10%", rotate: "15deg" },
    { top: "75%", left: "3%", rotate: "25deg" },
    { top: "80%", right: "5%", rotate: "-15deg" },
    { bottom: "10%", left: "10%", rotate: "10deg" },
    { bottom: "5%", right: "15%", rotate: "-10deg" },
  ]

  // Alarm clock icons scattered around
  const clocks = [
    { top: "12%", left: "20%", size: "60px" },
    { top: "5%", right: "25%", size: "50px" },
    { top: "30%", right: "15%", size: "70px" },
    { top: "50%", left: "15%", size: "55px" },
    { top: "55%", right: "20%", size: "65px" },
    { top: "70%", left: "25%", size: "45px" },
    { top: "75%", right: "25%", size: "60px" },
    { bottom: "15%", left: "18%", size: "50px" },
    { bottom: "20%", right: "12%", size: "55px" },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Yellow post-it shapes */}
      {postits.map((pos, i) => (
        <div
          key={`postit-${i}`}
          className="absolute w-16 h-16 bg-[#FFE066]/40"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            transform: `rotate(${pos.rotate})`,
          }}
        />
      ))}

      {/* Alarm clock decorations */}
      {clocks.map((pos, i) => (
        <div
          key={`clock-${i}`}
          className="absolute opacity-20"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            width: pos.size,
            height: pos.size,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Clock body */}
            <circle cx="50" cy="55" r="35" stroke="#F5B800" strokeWidth="4" fill="none" />
            {/* Clock face */}
            <circle cx="50" cy="55" r="30" fill="#FFE066" fillOpacity="0.3" />
            {/* Hour hand */}
            <line x1="50" y1="55" x2="50" y2="35" stroke="#F5B800" strokeWidth="3" strokeLinecap="round" />
            {/* Minute hand */}
            <line x1="50" y1="55" x2="65" y2="55" stroke="#F5B800" strokeWidth="2" strokeLinecap="round" />
            {/* Bells */}
            <circle cx="30" cy="25" r="10" stroke="#F5B800" strokeWidth="3" fill="none" />
            <circle cx="70" cy="25" r="10" stroke="#F5B800" strokeWidth="3" fill="none" />
            {/* Top connector */}
            <path d="M35 20 L50 10 L65 20" stroke="#F5B800" strokeWidth="3" fill="none" />
            {/* Legs */}
            <line x1="25" y1="85" x2="35" y2="75" stroke="#F5B800" strokeWidth="3" strokeLinecap="round" />
            <line x1="75" y1="85" x2="65" y2="75" stroke="#F5B800" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      ))}
    </div>
  )
}
