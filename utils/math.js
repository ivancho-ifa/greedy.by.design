export function clamp(n, range) {
   return Math.min(Math.max(n, range.min), range.max)
}
