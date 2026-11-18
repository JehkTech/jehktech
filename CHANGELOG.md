# Change log

| Date | Change | Impact | Verification |
|---|---|---|---|
| 2026-11-18 | Rebuilt the landing page around a graphite/cyan JehKTech system with a native WebGL ink hero, orbital showcase, work cards, fallbacks and enriched metadata. | The earlier three-section app becomes an accessible responsive portfolio while retaining verified identity, roles and contact details. | Build and lint recorded after implementation. |

## Decisions

- JehKTech uses cyan/blue light, an orbital signal object and Geist typography to retain its distinct technical identity.
- The hero is one small native WebGL canvas, capped below DPR 2 and paused on hidden tabs. CSS remains visible when WebGL or motion is unavailable.
- There is no fabricated case-study destination or contact-submit success. Those needs are marked `TODO(Jeh)` in the audit.
