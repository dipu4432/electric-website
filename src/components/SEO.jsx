import { Helmet } from "react-helmet-async";

function SEO({ title, description, ogTitle, ogDescription, ogUrl, ogImage, canonical }) {
  const siteName = "Electrical Brothers";
  const defaultDescription = "Electrical Brothers - Electrical Services in Bilaspur. Expert electrical installation, maintenance, and repair services.";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:url" content={ogUrl || "https://electric-website-pink.vercel.app/"} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default SEO;
