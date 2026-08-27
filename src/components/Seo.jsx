import { useEffect } from "react";

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title || "Cre8sphere | Technology & Innovation";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Cre8sphere LLP is a modern technology and innovation company.");
    }
  }, [title, description, path]);

  return null;
}
