import { ImagePlaceholder } from "./ImagePlaceholder";

export function PlaceholderGrid({
  items,
  type = "Screenshot"
}: {
  items: string[];
  type?: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <ImagePlaceholder
          key={item}
          label={item}
          assetPath={`/images/${type.toLowerCase()}/${index + 1}.jpg`}
          className="min-h-56"
        />
      ))}
    </div>
  );
}
