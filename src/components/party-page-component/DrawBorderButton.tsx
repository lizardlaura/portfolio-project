import { useRef, useEffect, useState, ReactNode } from "react";

interface DrawBorderButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export default function DrawBorderButton({ children = "Hover Me", onClick }: DrawBorderButtonProps) {
 const rectRef = useRef<SVGRectElement>(null);
  const [perimeter, setPerimeter] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (rectRef.current) {
      setPerimeter(rectRef.current.getTotalLength());
    }
    setHovered(false)
  }, []);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="chosen-font"
      style={{
        position: "relative",
        padding: "14px 36px",
        fontSize: "20px",
        
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: "transparent",
        border: "none",
        cursor: "pointer",

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <rect
          ref={rectRef}
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="30"
          ry="30"
          fill="none"
          
          strokeWidth="1"
          className="border-button-rect"
          style={{
            strokeDasharray: perimeter,
            strokeDashoffset: hovered ? 0 : perimeter,
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>

      {children}
    </button>
  );
}