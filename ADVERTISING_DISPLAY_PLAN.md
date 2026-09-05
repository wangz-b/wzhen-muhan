# Advertising Display Plan

This site uses the station Adsterra layout standard for CollectLetters.

## Revenue-Priority Standard

- First post-intro slot: `NativeBanner_1` through `AdsterraArticleTop` / `AdsterraToolAd`.
- Middle content slot: `300x250_1` through `AdsterraArticleMid` / `AdsterraToolBottom`.
- Bottom support slot: responsive leaderboard (`728x90` desktop or `320x50` mobile), used as support/fallback inventory.
- If Native is unavailable, the first slot may fall back to leaderboard instead of going blank.

## Route Families

| pageFamily | routes | visibleSlots | maxVisibleSlots |
|---|---|---|---|
| home | / | top_native_priority, mid_300x250, bottom_responsive_support | 3 |
| commercial_hub | /codes, /tier-list, /trello, /updates | top_native_priority, mid_300x250, bottom_responsive_support | 3 |
| guide_wiki_index | /guides, /wiki | top_native_priority, mid_300x250, bottom_responsive_support | 3 |
| guide_wiki_topic | /guides/*, /wiki/* | top_native_priority, mid_300x250, bottom_responsive_support | 3 |
| planned_long_tail | pageGenerationPlan publishable routes | top_native_priority, mid_300x250, bottom_responsive_support | 3 |
| interactive_tool | /calculator, /squad-planner, /resource-calculator | tool_native_priority, tool_bottom_300x250 | 2 |
| clean_trust | /about, /contact, /disclosure, /privacy, /sources, /terms | none | 0 |

## Global Gates

- Popunder: disabled by default, delayed 30000 ms, requires at least 2 session pageviews, and is suppressed on cleanRoutes.
- SocialBar: disabled by default, requires a real script URL, and is suppressed on cleanRoutes.
- 160x600 rail: disabled by default, wide desktop only, and is suppressed on cleanRoutes.

## Clean Routes

/about, /contact, /disclosure, /privacy, /sources, /terms

## Core Units

728x90_1, 320x50_1, 300x250_1, NativeBanner_1, Popunder_1

## Measurement

Track ad_slot_viewed, ad_script_loaded, ad_script_error, ad_empty_after_5s, then compare Adsterra revenue, impressions, CTR, CPM, and revenue per 1,000 pageviews by placement, country, device, and page family.
