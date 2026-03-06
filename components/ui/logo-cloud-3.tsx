import { InfiniteSlider } from "@/components/ui/infinit-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <InfiniteSlider gap={48} duration={30}>
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 120}
            height={logo.height || 30}
            className="h-6 w-auto opacity-50 grayscale invert"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
