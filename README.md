# aipalab-site

Marketing website for aipalab (AI Incubated Project Appraisal Lab), served at https://aipalab.in. The product lives at https://app.aipalab.in (repo `appraisal-portal`).

- Next.js 16, static export (`out/`), no server code.
- Styles use the aipalab design system tokens in `src/app/tokens.css`, generated from the Design System artifact's `tokens.json`. Change tokens there, then regenerate; do not hand-edit.
- `npm run dev` to work locally, `npm run build` to produce `out/`.
