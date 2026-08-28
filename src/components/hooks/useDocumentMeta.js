import { useEffect } from 'react';

// Sets the document title and meta description for whichever page mounts
// this hook, restoring the site-wide defaults on unmount so navigating
// away doesn't leave a stale title on the next page while it loads.
const DEFAULT_TITLE = 'Afonso Pereira — Frontend Developer';
const DEFAULT_DESCRIPTION =
  "Afonso Pereira — Frontend Developer at Vodafone (Vue.js & React) with a background in graphic design, UI/UX, and cross-functional project delivery.";

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Afonso Pereira` : DEFAULT_TITLE;
    document.title = fullTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute('content');
    meta.setAttribute('content', description || DEFAULT_DESCRIPTION);

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute('content', previousDescription || DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
