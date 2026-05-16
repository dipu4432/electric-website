import { Helmet } from "react-helmet-async";

function SEO({ title, description, ogTitle, ogDescription, ogUrl, ogImage, canonical }) {
  const siteName = "Tiwari Nursing Home";
  const defaultDescription = "Orthopedic and Trauma Center in Bilaspur. Expert joint replacement, fracture treatment, and trauma surgery.";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:url" content={ogUrl || "https://tiwariorthocare.com"} />
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
