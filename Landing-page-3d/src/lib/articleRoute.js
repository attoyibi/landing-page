// The list of articles lives at a real address, /artikel/, so search engines can index it.
// Each article itself is a static page (public/artikel/<slug>/index.html) that the host serves directly.
export const isArticleList = pathname => pathname.split('/').filter(Boolean)[0] === 'artikel';

export const formatDate = iso =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
