import { isMobile } from "./states.svelte";

function updateIsMobile() {
  isMobile = window.innerWidth <= 768; // 768px is a common mobile breakpoint
}
onMount(() => {
  updateIsMobile(); // Initial check
  window.addEventListener("resize", updateIsMobile);
  return () => window.removeEventListener("resize", updateIsMobile); // Cleanup on destroy
});
