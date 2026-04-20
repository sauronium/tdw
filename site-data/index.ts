// ─────────────────────────────────────────────────────────────
//  SITE-DATA › ROOT BARREL EXPORT
//  Top-level entry point for all site data and design tokens.
//
//  Usage examples:
//    import { colors, fontSizes, layout }  from "@/site-data"
//    import { heroData }                   from "@/site-data"
//    import { differentCards }             from "@/site-data"
//    import { workHeroHeading }            from "@/site-data"
//
//  Or import directly from a sub-path for better tree-shaking:
//    import { colors } from "@/site-data/tokens"
//    import { expertCards } from "@/site-data/about"
// ─────────────────────────────────────────────────────────────

// Design tokens (colors, fontSizes, layout, etc.)
export * from "./tokens";

// Page-specific section data
export * from "./homepage";
export * from "./about";
export * from "./work";

// Shared component data (header, footer)
export * from "./shared";
