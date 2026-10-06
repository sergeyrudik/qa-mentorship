# QA mentorship — Sergei Rudik

Static mentorship landing page for https://mentor.rudik.dev.

- Russian: `/`
- English: `/en/`

Language: the switch in the header saves `localStorage.lang` and a `lang` cookie on `.rudik.dev`, so the choice carries over to https://qa.rudik.dev.

Plain HTML, CSS and JavaScript. No dependencies or build step. The form prepares a draft in the visitor's email application; there is no server-side submission or storage. Without JavaScript, use the direct email or LinkedIn links.

Local preview: `python3 -m http.server 4175`.

GitHub Pages: `main`, root directory. DNS: CNAME `mentor` → `sergeyrudik.github.io`.
