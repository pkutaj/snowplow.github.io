---
title: "Consent"
date: "2021-03-28"
sidebar_position: 4000
---

```mdx-code-block
import Block5966 from "@site/docs/reusable/javascript-tracker-release-badge-v3/_index.md"

<Block5966/>
```

| Tracker Distribution | Included |
| --- | --- |
| `sp.js` | ✅ |
| `sp.lite.js` | ❌ |

## Download

<table class="has-fixed-layout"><tbody><tr><td>Download from GitHub Releases (Recommended)</td><td><a href="https://github.com/snowplow/snowplow-javascript-tracker/releases" target="_blank" rel="noreferrer noopener">Github Releases (plugins.umd.zip)</a></td></tr><tr><td>Available on jsDelivr</td><td><a href="https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-consent@latest/dist/index.umd.min.js" target="_blank" rel="noreferrer noopener">jsDelivr</a> (latest)</td></tr><tr><td>Available on unpkg</td><td><a href="https://unpkg.com/@snowplow/browser-plugin-consent@latest/dist/index.umd.min.js" target="_blank" rel="noreferrer noopener">unpkg</a> (latest)</td></tr></tbody></table>

**Note:** The links to the CDNs above point to the current latest version. You should pin to a specific version when integrating this plugin on your website if you are using a third party CDN in production.

## Initialization

```
window.snowplow('addPlugin', 
  "https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-consent@latest/dist/index.umd.min.js",
  ["snowplowConsent", "ConsentPlugin"]
);
```

### Functions

<table class="has-fixed-layout"><tbody><tr><td><code>enableGdprContext</code></td><td><a href="/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#gdpr-context">Documentation</a></td></tr><tr><td><code>trackConsentGranted</code></td><td><a href="/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#trackConsentGranted">Documentation</a></td></tr><tr><td><code>trackConsentWithdrawn</code></td><td><a href="/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#trackConsentWithdrawn">Documentation</a></td></tr></tbody></table>

### Context

Adding this plugin will automatically capture the following context:

| Context | Example |
| --- | --- |
| [iglu:com.snowplowanalytics.snowplow/consent\_document/jsonschema/1-0-0](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0) | ![](images/Screenshot-2021-03-28-at-20.04.43.png) |
