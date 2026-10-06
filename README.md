# QA mentorship — Sergei Rudik

Static mentorship landing page for https://mentor.rudik.dev.

- Russian: `/`
- English: `/en/`

Language: the switch in the header saves `localStorage.lang` and a `lang` cookie on `.rudik.dev`, so the choice carries over to https://qa.rudik.dev.

Plain HTML, CSS and JavaScript. No dependencies or build step. The form prepares a draft in the visitor's email application; there is no server-side submission or storage. Without JavaScript, use the direct email or LinkedIn links.

Local preview: `python3 -m http.server 4175`.

GitHub Pages: `main`, root directory. DNS: CNAME `mentor` → `sergeyrudik.github.io`.

## Search and indexing

`robots.txt` allows crawling and advertises `sitemap.xml`. The sitemap lists both language URLs and their alternates. Keep the sitemap and reciprocal hreflang links in sync when adding pages. Every URL keeps its language, regardless of browser or saved preference; the shared language preference only controls a suggestion. Structured data describes the real person and services; no ratings or prices are invented.

Submit `https://mentor.rudik.dev/sitemap.xml` through your verified Google Search Console and Yandex Webmaster properties. Verification and submission must be completed in those accounts. No tracking scripts are added by this SEO change.
