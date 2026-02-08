"use client";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scroll-up" onClick={scrollToTop}>
      ↑ Top
    </button>
  );
}