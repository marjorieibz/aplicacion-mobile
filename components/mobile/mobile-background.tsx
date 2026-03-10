export function MobileBackground() {
  const postits = [
    { top: "15%", left: "10%", rotate: -15, size: 40 },
    { top: "25%", left: "75%", rotate: 20, size: 50 },
    { top: "40%", left: "5%", rotate: -8, size: 35 },
    { top: "45%", left: "85%", rotate: 15, size: 45 },
    { top: "55%", left: "20%", rotate: -20, size: 55 },
    { top: "60%", left: "70%", rotate: 10, size: 40 },
    { top: "70%", left: "45%", rotate: -12, size: 50 },
    { top: "75%", left: "10%", rotate: 25, size: 35 },
    { top: "80%", left: "80%", rotate: -5, size: 45 },
    { top: "35%", left: "50%", rotate: 8, size: 38 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {postits.map((postit, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            top: postit.top,
            left: postit.left,
            transform: `rotate(${postit.rotate}deg)`,
            width: postit.size,
            height: postit.size,
          }}
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <rect
              x="2"
              y="2"
              width="36"
              height="36"
              rx="2"
              fill="#FFE066"
              stroke="#E5C84C"
              strokeWidth="1"
            />
            <path
              d="M28 2 L38 2 L38 12 Z"
              fill="#F5F0E1"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
