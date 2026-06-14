# Geological Disposal of Nuclear Waste — Interactive Review

A single-page React + Tailwind website that showcases the review paper
**"Geological Disposal Techniques for High-Level Nuclear Waste and their Impact
on Environment"** (Tejas L, Yashwanth R, Sindhu C, Trilokchandran B — RV College
of Engineering, Bangalore).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
```

> Windows note: if `npm install` fails with
> `ERR_INVALID_ARG_TYPE ... "file" argument must be of type string`, your shell
> has no `ComSpec` set. Run in cmd.exe / PowerShell, or set it first:
> `set ComSpec=C:\Windows\System32\cmd.exe`

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

The `dist/` folder is fully static — drop it on GitHub Pages, Netlify, Vercel,
or any static host.

## Sections

1. Hero — title, authors, key stats
2. Waste Types — interactive LLW / ILW / HLW / TRU explorer
3. **History timeline** (interactive) — 1950s → today
4. Environmental & biological impact + case studies
5. **Barrier explorer** (interactive) — nested EBS ring diagram
6. **Radiotoxicity slider** (interactive) — toxicity vs. time
7. Site selection criteria
8. Drawbacks & challenges
9. Emerging technologies (DBD, transmutation, Synroc, robotics)
10. Conclusion + full-paper PDF download

## Editing content

All text lives in `src/data.js` — edit there to change any content without
touching the components.
