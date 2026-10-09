import { toValue, watchEffect, type MaybeRefOrGetter } from 'vue'

const SITE = 'Maki Squid'

/** Keeps the browser tab title in sync with the page. */
export function usePageTitle(title: MaybeRefOrGetter<string | undefined>) {
  watchEffect(() => {
    const t = toValue(title)
    document.title = t ? `${t} · ${SITE}` : SITE
  })
}
