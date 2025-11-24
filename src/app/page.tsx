import HeroSection from "@/components/landing/HeroSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />

      {/* Preview Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Featured Work
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                  <div className="aspect-video bg-background rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-white/60 text-sm">
                    A brief description of this amazing project.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
