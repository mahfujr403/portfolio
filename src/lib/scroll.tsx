import { useRef, useState } from "react";

const TechScroll = ({ technologies }: { technologies: string[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (technologies.length <= 3) return;
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || technologies.length <= 3) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className={`flex gap-2 pb-1 ${
          technologies.length <= 3
            ? 'justify-around'
            : 'overflow-x-scroll cursor-grab active:cursor-grabbing'
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className={`px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/80 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 whitespace-nowrap select-none ${
              technologies.length <= 3 ? '' : 'flex-shrink-0'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      {technologies.length > 3 && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card to-transparent pointer-events-none"></div>
      )}
    </div>
  );
};

export { TechScroll };