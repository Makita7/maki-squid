/**
 * Builds image URLs. Using BASE_URL means the site still works if you
 * deploy it to a sub-folder (see `base` in vite.config.ts).
 */
const base = import.meta.env.BASE_URL

export const workImage = (file: string) => `${base}images/work/${file}`
export const brandImage = (file: string) => `${base}images/brand/${file}`
