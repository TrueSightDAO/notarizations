# Notarizations — Syndicate Agreements & PDFs

Syndicate agreement Markdown files and PDF outputs. See `agentic_ai_context/SYNDICATE_AGREEMENTS.md` for drafting guidance.

## PDF generation (with logo)

**Always use the TrueSight DAO logo as the header** when generating PDFs.

- **Logo:** `../.github/assets/20221219 - Gary logo white background squarish.jpeg`  
  Fallback: `../.github/assets/20240612_truesight_dao_logo.png`
- **Script:** `scripts/generate_syndicate_pdf.mjs`

```bash
npm install   # once
npm run generate-pdf       # AGL14 + AGL15
npm run generate-pdf:agl14
npm run generate-pdf:agl15
node scripts/generate_syndicate_pdf.mjs <filename.md>  # any .md
```

Output PDFs are written next to the source `.md` files.
