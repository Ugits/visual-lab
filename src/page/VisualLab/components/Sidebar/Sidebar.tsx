import { useRef, useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { LABS } from "../../../../config/labs";
import "./Sidebar.css";

interface SidebarProps {
  unboxed: boolean;
  onSelectLab: (lab: string) => void;
}

export const Sidebar = ({ unboxed, onSelectLab }: SidebarProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 1);
    }
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      checkScroll();
      list.addEventListener("scroll", checkScroll);

      const resizeObserver = new ResizeObserver(() => checkScroll());
      resizeObserver.observe(list);

      window.addEventListener("resize", checkScroll);

      return () => {
        list.removeEventListener("scroll", checkScroll);
        resizeObserver.disconnect();
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkScroll, 500);
    return () => clearTimeout(timer);
  }, [unboxed]);

  const handleScroll = (direction: "up" | "down") => {
    if (listRef.current) {
      const scrollAmount = 150;
      listRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={`sidebar-cover ${unboxed ? "unboxed" : ""}`}>
        <div className="sidebar-cover-1">
          <div className="sidebar-cover-1-border"></div>
        </div>
        <div className="sidebar-cover-2">
          <div className="sidebar-cover-2-border"></div>
        </div>
      </div>
      <div className="sidebar">
        <div className="title-header">
          <h2>Visual Labs</h2>
        </div>

        {canScrollUp && (
          <button
            className="scroll-button up"
            onClick={() => handleScroll("up")}
            aria-label="Scroll up"
          >
            <ChevronUp size={24} className="scroll-icon" />
          </button>
        )}

        <div className="labs-list" ref={listRef}>
          {LABS.map((lab) => (
            <div
              key={lab.id}
              className="labs-list-item"
              onClick={() => {
                onSelectLab(lab.id);
                console.log(`${lab.id} selected`);
              }}
            >
              {lab.thumbnail}
            </div>
          ))}
        </div>

        {canScrollDown && (
          <button
            className="scroll-button down"
            onClick={() => handleScroll("down")}
            aria-label="Scroll down"
          >
            <ChevronDown size={24} className="scroll-icon" />
          </button>
        )}
      </div>
    </>
  );
};
