import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { GLSLHills } from "@/components/ui/glsl-hills";

const logos = [
  { src: "https://storage.efferd.com/logo/nvidia-wordmark.svg", alt: "Nvidia Logo" },
  { src: "https://storage.efferd.com/logo/supabase-wordmark.svg", alt: "Supabase Logo" },
  { src: "https://storage.efferd.com/logo/openai-wordmark.svg", alt: "OpenAI Logo" },
  { src: "https://storage.efferd.com/logo/turso-wordmark.svg", alt: "Turso Logo" },
  { src: "https://storage.efferd.com/logo/vercel-wordmark.svg", alt: "Vercel Logo" },
  { src: "https://storage.efferd.com/logo/github-wordmark.svg", alt: "GitHub Logo" },
  { src: "https://storage.efferd.com/logo/claude-wordmark.svg", alt: "Claude AI Logo" },
  { src: "https://storage.efferd.com/logo/clerk-wordmark.svg", alt: "Clerk Logo" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Subtle grid pattern behind everything */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Warm amber radial glow from top */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, hsla(40, 80%, 50%, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* GLSL Hills Background */}
      <div className="pointer-events-none absolute inset-0 z-1">
        <GLSLHills />
      </div>

      {/* Top Shades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36">
        <div className="absolute inset-0 bg-linear-to-b from-background to-transparent" />
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36">
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* main content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center gap-8 px-4 pt-24 pb-8 text-center sm:px-6 lg:px-8">

        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm backdrop-blur-sm">
          <RocketIcon className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">WhiteLoop Presents</span>
        </div>

        <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-foreground">Build a Magnetic Personal Brand</span>
          <br />
          <span className="text-foreground">That Brings </span>
          <span className="neon-text neon-glow">Visibility</span>
          <span className="text-foreground"> and Attracts </span>
          <span className="neon-text neon-glow">Clients</span>
          <span className="text-foreground"> for You</span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground/70 leading-relaxed">
          We turn your expertise into powerful content that builds authority, grows your audience, and brings inbound opportunities — while you stay focused on running your business
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" className="gap-2 rounded-full font-bold neon-box-glow">
            <PhoneCallIcon className="h-4 w-4" />
            Book Your Consulting Call
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Trusted by experts
        </p>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}

export default HeroSection;
