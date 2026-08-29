import { NextResponse } from "next/server";

export const runtime = "nodejs";

const baseUrl = "https://timber.zanzibaba.com";

const timberProducts = [
  {
    name: "Treated Pine Timber",
    category: "Timber",
    description: "High-quality treated pine timber for construction. Available in various sizes for structural and finishing work.",
    url: `${baseUrl}/timber-sizes`,
  },
  {
    name: "Marine Board",
    category: "Marine Board",
    description: "Water-resistant marine-grade plywood for concrete formwork and wet areas. Premium quality for construction.",
    url: `${baseUrl}/marine-board`,
  },
  {
    name: "Construction Plywood",
    category: "Plywood",
    description: "Durable plywood for construction and general use. Various thicknesses available.",
    url: `${baseUrl}/plywood`,
  },
  {
    name: "Treated Poles (Mirunda)",
    category: "Poles",
    description: "Treated wood poles for fencing, construction, and roofing. Durable and termite-resistant.",
    url: `${baseUrl}/poles`,
  },
];

export async function GET() {
  return NextResponse.json(
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Zanzibaba Timber — Products",
      description: "Premium timber, marine board, plywood, and treated poles for construction in Zanzibar.",
      url: baseUrl,
      numberOfItems: timberProducts.length,
      itemListElement: timberProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          url: product.url,
          category: product.category,
          brand: {
            "@type": "Brand",
            name: "Zanzibaba Timber",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "TZS",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "LocalBusiness",
              name: "Zanzibaba Timber",
            },
          },
        },
      })),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Content-Type": "application/json",
      },
    }
  );
}
