type StockImage = {
  alt: string;
  url: string;
  tag: string;
};

const stockImages = {
  hero: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Founder Hero",
    url: "/images/founder-source/founder-cutout.png"
  },
  desk: {
    alt: "Shobhit Singhal portrait photo",
    tag: "Founder Desk",
    url: "/images/founder-source/founder-portrait.jpg"
  },
  speaking: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Founder Webinar",
    url: "/images/founder-source/founder-cutout.png"
  },
  workshop: {
    alt: "Premium consulting workshop with a mentor presenting to an audience",
    tag: "Workshop Visual",
    url: "/images/stock/workshop-community.png"
  },
  strategy: {
    alt: "Gold chess king, notebook, and strategy desk for consulting systems",
    tag: "Strategy Visual",
    url: "/images/stock/strategy-still-life.png"
  },
  founder: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Founder Visual",
    url: "/images/founder-source/founder-cutout.png"
  },
  webinar: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Webinar Visual",
    url: "/images/founder-source/founder-cutout.png"
  },
  proof: {
    alt: "Premium consulting workshop with a mentor presenting to an audience",
    tag: "Proof Visual",
    url: "/images/stock/workshop-community.png"
  },
  community: {
    alt: "Premium consulting workshop with a mentor presenting to an audience",
    tag: "Community Visual",
    url: "/images/stock/workshop-community.png"
  },
  writing: {
    alt: "Shobhit Singhal portrait photo",
    tag: "Article Visual",
    url: "/images/founder-source/founder-portrait.jpg"
  },
  systems: {
    alt: "Gold chess king, notebook, and strategy desk for consulting systems",
    tag: "System Visual",
    url: "/images/stock/strategy-still-life.png"
  },
  content: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Content Visual",
    url: "/images/founder-source/founder-cutout.png"
  },
  contact: {
    alt: "Shobhit Singhal founder portrait",
    tag: "Connect Visual",
    url: "/images/founder-source/founder-cutout.png"
  }
} satisfies Record<string, StockImage>;

export function getStockImage(label: string, assetPath = ""): StockImage {
  const text = `${label} ${assetPath}`.toLowerCase();

  if (text.includes("desk") || text.includes("writing") || text.includes("free content") || text.includes("article")) return stockImages.desk;
  if (text.includes("case") || text.includes("map")) return stockImages.systems;
  if (text.includes("founder") || text.includes("portrait") || text.includes("contact") || text.includes("about") || text.includes("transformation stories")) {
    return stockImages.hero;
  }
  if (text.includes("strategy") || text.includes("framework") || text.includes("roadmap") || text.includes("chess") || text.includes("mission")) {
    return stockImages.strategy;
  }
  if (text.includes("stage") || text.includes("speaking") || text.includes("event") || text.includes("workshop") || text.includes("community") || text.includes("gallery")) {
    return stockImages.workshop;
  }
  if (text.includes("video") || text.includes("webinar") || text.includes("reel") || text.includes("youtube") || text.includes("session")) {
    return stockImages.webinar;
  }
  if (text.includes("testimonial") || text.includes("feedback") || text.includes("proof") || text.includes("payment") || text.includes("screenshot")) {
    return stockImages.proof;
  }
  if (text.includes("blog")) return stockImages.strategy;
  if (text.includes("contact") || text.includes("support")) return stockImages.contact;

  return stockImages.content;
}
