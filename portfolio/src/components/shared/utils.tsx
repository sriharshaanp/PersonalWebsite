export function isSafeHref(href: string) {
  if (href.startsWith("/")) return true;
  try {
    const u = new URL(href);
    return u.protocol === "https:";
  } catch {
    return false;
  }
}
