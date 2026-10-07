# QA mentorship — Sergei Rudik

Static mentorship landing page for https://mentor.rudik.dev.

- Russian: `/`
- English: `/en/`

Language: the switch in the header saves `localStorage.lang` and a `lang` cookie on `.rudik.dev`, so the choice carries over to https://qa.rudik.dev.

Plain HTML, CSS and a small JavaScript enhancement. No build step. The native form submits to FormSubmit, which forwards requests to `rudikqa@gmail.com`; direct email and LinkedIn links remain available. The FormSubmit endpoint was activated by the recipient on 2026-10-07. The service may show a spam challenge on submission.

Local preview: `python3 -m http.server 4175`.

GitHub Pages: `main`, root directory. DNS: CNAME `mentor` → `sergeyrudik.github.io`.

## Search and indexing

`robots.txt` allows crawling and advertises `sitemap.xml`. The sitemap lists both language URLs and their alternates. Keep the sitemap and reciprocal hreflang links in sync when adding pages. Every URL keeps its language, regardless of browser or saved preference; the shared language preference only controls a suggestion. Structured data describes the real person and services; no ratings or prices are invented.

The sitemap has been submitted through the verified Google Search Console and Yandex Webmaster properties. GA4 uses the shared `G-B4XR81HWTY` stream; `assets/analytics.js` records fixed contact actions and the thank-you page records `generate_lead` after form submission. Form text and email addresses are never sent to GA4. Use the built-in `Host name` dimension to distinguish QA, Mentor and portfolio traffic.
