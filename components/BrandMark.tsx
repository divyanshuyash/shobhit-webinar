import Image from "next/image";

export function BrandMark({ className = "" }: { className?: string }) {
  return <Image src="/images/brand/shobhit-singhal-logo.png" alt="Shobhit Singhal — The Transformer" width={2556} height={850} className={className} priority />;
}
