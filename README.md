# Astro Cloudinary OG Demo

A small demo that shows how to use Astro and Cloudinary to create dynamic Open Graph images from one reusable template.

## What this demo shows

This project uses:

- **Astro** for content and page generation
- **Cloudinary** for dynamic image generation
- **Tailwind CSS** for styling
- **shadcn/ui** for UI setup and design tokens

Each post uses its own title and description to build a Cloudinary URL that generates a branded social preview image.

## Features

- Dynamic Open Graph image generation
- Reusable Cloudinary image template
- Astro content collection for blog posts
- Responsive home page preview cards
- Post detail pages
- Open Graph and Twitter meta tags
- Share buttons for X, Facebook, and LinkedIn

## Project structure

```text
src/
  components/
    ui/
  data/
    blog/
      first-post.md
      second-post.md
  lib/
    generateOgImage.ts
  pages/
    index.astro
    posts/
      [slug].astro
  styles/
    global.css
  content.config.ts
````

## Getting started

### 1. Clone the project

```bash
git clone <your-repo-url>
cd astro-cloudinary-og-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your environment variables

Create a `.env` file in the project root:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
PUBLIC_CLOUDINARY_OG_TEMPLATE=your_template_public_id
```

Example:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=demo-article-projects
PUBLIC_CLOUDINARY_OG_TEMPLATE=astro-cloudinary-og-demo/og-template
```

## Cloudinary setup

Upload a base Open Graph template image to Cloudinary.

Recommended:

* Size: `1200 x 630`
* Light background
* Keep most of the layout blank
* Leave space for dynamic title and description overlays

Example public ID:

```txt
astro-cloudinary-og-demo/og-template
```

## Run the project

```bash
npm run dev
```

Then open:

```txt
http://localhost:4321
```

## How it works

### Content

Blog posts live in:

```txt
src/data/blog/
```

Each post includes frontmatter like:

```md
---
title: "Build Dynamic OG Images with Astro and Cloudinary"
description: "Use Astro page data and Cloudinary overlays to generate branded social preview images."
pubDate: 2026-03-19
draft: false
readTime: "4 min read"
tags: ["astro", "cloudinary", "open-graph"]
---
```

### Content config

The blog collection is defined in:

```txt
src/content.config.ts
```

### OG image generation

The helper lives in:

```txt
src/lib/generateOgImage.ts
```

It builds a Cloudinary image URL using:

* the base template image
* the post title
* the post description

Cloudinary then applies the text overlays and returns the final social image.

### Pages

* `src/pages/index.astro` shows all demo posts and generated previews
* `src/pages/posts/[slug].astro` renders each post page and adds OG meta tags

## Share flow

Each post page includes:

* `og:title`
* `og:description`
* `og:image`
* `twitter:card`
* `twitter:title`
* `twitter:description`
* `twitter:image`

This makes each post page share-ready for social platforms.

## Example use case

You write a new post in Astro.

That post provides:

* title
* description
* metadata

The app sends that data into a Cloudinary transformation URL.

Cloudinary returns a finished Open Graph image based on the shared template.

That image is then used in the page metadata.

## Scripts

### Start dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Next ideas

You can extend this demo by adding:

* author name
* category label
* featured image inside the OG card
* multiple OG templates
* dark mode OG template
* production site URL in Astro config
* deployed share testing

## Notes

For local development, post URLs use:

```txt
http://localhost:4321
```

Before deploying, update your site URL so social metadata points to the live domain.

## License

MIT

