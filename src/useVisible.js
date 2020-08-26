import { useEffect, useState, useCallback } from "react";

function useVisible(el) {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    if (el.current) {
      setVisible(
        document.documentElement.scrollTop / el.current.offsetTop >= 1
      );
    }
  }, [el]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {}, [el]);

  return visible;
}

export default useVisible;
