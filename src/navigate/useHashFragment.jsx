import { useEffect } from "react";

export function useHashFragment(offset = 0, trigger = true) {
  
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace("#", ""));
      if (!elementToScroll) return;

      window.scrollTo({
        top: (elementToScroll.offsetTop - offset),
        behavior: "smooth"
      });
    };

    if (!trigger) return;

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return window.removeEventListener("hashchange", scrollToHashElement);
  }, [trigger]);
}

//Para poder crear esta función, se utilizó la siguiente referencia
//https://dev.to/alejomartinez8/how-to-load-a-hash-fragment-to-an-anchor-name-in-react-especially-in-first-loading-g3i
//