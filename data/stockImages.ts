type StockImage = {
  alt: string;
  url: string;
  tag: string;
};

const imageUrl = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const stockImages = {
  founder: {
    alt: "Business strategist working with a consulting team",
    tag: "Founder Visual",
    url: imageUrl("photo-1551836022-d5d88e9218df")
  },
  webinar: {
    alt: "Strategy workshop with a presenter and audience",
    tag: "Webinar Visual",
    url: imageUrl("photo-1517245386807-bb43f82c33c4")
  },
  proof: {
    alt: "Consulting presentation and client discussion",
    tag: "Proof Visual",
    url: imageUrl("photo-1552664730-d307ca884978")
  },
  community: {
    alt: "Professional community collaborating around a table",
    tag: "Community Visual",
    url: imageUrl("photo-1521737604893-d14cc237f11d")
  },
  writing: {
    alt: "Notebook and laptop for business writing",
    tag: "Article Visual",
    url: imageUrl("photo-1499750310107-5fef28a66643")
  },
  systems: {
    alt: "Business dashboard with analytics and strategy data",
    tag: "System Visual",
    url: imageUrl("photo-1460925895917-afdab827c52f")
  },
  content: {
    alt: "Video production setup for online learning content",
    tag: "Content Visual",
    url: imageUrl("photo-1492724441997-5dc865305da7")
  },
  contact: {
    alt: "Team collaborating on digital strategy",
    tag: "Connect Visual",
    url: imageUrl("photo-1519389950473-47ba0277781c")
  }
} satisfies Record<string, StockImage>;

export function getStockImage(label: string, assetPath = ""): StockImage {
  const text = `${label} ${assetPath}`.toLowerCase();

  if (text.includes("blog") || text.includes("writing") || text.includes("article")) return stockImages.writing;
  if (text.includes("video") || text.includes("webinar") || text.includes("reel") || text.includes("youtube") || text.includes("session")) {
    return stockImages.webinar;
  }
  if (text.includes("testimonial") || text.includes("feedback") || text.includes("proof") || text.includes("payment") || text.includes("screenshot")) {
    return stockImages.proof;
  }
  if (text.includes("community") || text.includes("gallery") || text.includes("stage") || text.includes("speaking") || text.includes("event")) {
    return stockImages.community;
  }
  if (text.includes("framework") || text.includes("case") || text.includes("roadmap") || text.includes("map")) return stockImages.systems;
  if (text.includes("contact") || text.includes("support")) return stockImages.contact;
  if (text.includes("founder") || text.includes("portrait") || text.includes("about")) return stockImages.founder;

  return stockImages.content;
}
