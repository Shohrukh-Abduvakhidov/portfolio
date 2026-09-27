import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export function useSectionNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((sectionId: string) => {
    // Determine hash part
    const hash = sectionId.startsWith("#") ? sectionId : `#${sectionId}`;

    if (pathname === "/") {
      // If we are already on the homepage, scroll smoothly
      const id = hash.substring(1);
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.pushState(null, "", "/");
        return;
      }
      
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL without a jump
        history.pushState(null, "", hash);
      }
    } else {
      // Navigate to homepage with hash
      if (sectionId === "#home" || sectionId === "home") {
        router.push("/");
      } else {
        router.push(`/${hash}`);
      }
    }
  }, [pathname, router]);

  // Handle hash scrolling on page load/navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && pathname === "/") {
        // Delay to ensure DOM is ready on initial load
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return { scrollToSection };
}
