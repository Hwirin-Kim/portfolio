import ScrollReveal from "@/components/animations/ScrollReveal";
import SkillLevelGuide from "@/components/skills/SkillLevelGuide";
import SkillCategorySection from "@/components/skills/SkillCategorySection";
import ToolsGrid from "@/components/skills/ToolsGrid";
import CTASection from "@/components/common/CTASection";
import { skillCategories, tools } from "@/lib/data/skills";

export default function SkillsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Skills
              </h1>
              <p className="text-xl text-white/70">
                각 스킬을 클릭하면 상세 역량을 확인할 수 있습니다
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Level Guide */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SkillLevelGuide />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategorySection
                key={category.category}
                category={category}
                index={categoryIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Tools</h2>
                <p className="text-white/60">일상적으로 사용하는 도구들</p>
              </div>

              <ToolsGrid tools={tools} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="함께 일하고 싶으신가요?"
        description="새로운 프로젝트에 대해 이야기해봐요"
        buttonText="Contact Me"
        buttonHref="/contact"
      />
    </main>
  );
}
