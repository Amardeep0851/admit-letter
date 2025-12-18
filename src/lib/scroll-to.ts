export const customScrollTo = (id: string) => {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;
  console.log(element);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};