import { useEffect } from "react";

const SITE_NAME = "Cre8sphere Media";
const SITE_URL = "https://cre8sphere.in";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_KEYWORDS =
  "technology blog, AI innovation, electric vehicles, digital media, tech insights, gizmos, AI tools, Cre8sphere Media";

function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords = DEFAULT_KEYWORDS
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setCanonical(url);
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [description, image, keywords, path, title, type]);

  return null;
}

export default Seo;
