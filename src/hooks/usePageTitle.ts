import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `Ivy+ | ${title}` : "Ivy+ Consulting";

    // Cleanup function to restore previous title
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default usePageTitle;
