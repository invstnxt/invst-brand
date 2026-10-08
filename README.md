# INVST Brand

The INVST brand tokens and rules, published so any tool, document session or
partner can read them without access to the private INVST OS repository.

**Source of truth: INVST Brand Standards 2026 v8.** Ruling (Scott Jarred,
2026-10-01): v8 governs. Where the public website's CSS differs from these
values, the website is the one that is off.

| File | What it is |
|---|---|
| `BRAND.md` | The eight non-negotiables, written to paste into any session |
| `tokens/tailwind.brand.ts` | Tailwind theme extension (colors + Montserrat) |
| `tokens/invst.css` | The same tokens as CSS custom properties |
| `tokens/colors.ts` | Full palette as data: name, HEX, RGB, closest PMS, role |
| `assets/` | The INVST wordmark (dark wordmark + green V) for light surfaces |

## The rules in one breath

Montserrat only, Bold (700/800) for headings. Primary green `#A9CF38`
(hover `#8FB32A`, tint `#F4F8E8`). Neutrals `#000000` / `#5A5A5A` /
`#D3D3D3` / `#FFFFFF`. Secondary palette is functional only: red `#D21404`
errors, amber `#FFBF00` pending, blue `#4B9CD3` info, yellow `#FEE50F`
warnings. `#08FF08` is Racing sub-brand only and `#002C5F` is Colts sub-brand
only; neither appears in standard INVST materials. "INVST" is always all
caps. Tagline: "Making Money Work For You". No superlatives in copy.

## Fetch it from anywhere

```
https://raw.githubusercontent.com/invstnxt-org/invst-brand/main/BRAND.md
https://raw.githubusercontent.com/invstnxt-org/invst-brand/main/tokens/invst.css
https://raw.githubusercontent.com/invstnxt-org/invst-brand/main/tokens/tailwind.brand.ts
```

## How this stays current

These files are mirrors of the same files inside the private INVST OS
repository, where a PR gate keeps the three token sources agreeing. Edit
them THERE, then run `scripts/sync-brand-public.sh` to push the mirror.
Do not edit this repository directly; the next sync overwrites it.

The full v8 standards document stays private while it is in compliance
review. When the reviewed edition lands, every file here is re-synced in
one commit.

## Use

Copyright INVST. The wordmark and these standards are provided for reference
and for use by INVST, its divisions and authorized partners in INVST
materials. They are not licensed for any other use.
