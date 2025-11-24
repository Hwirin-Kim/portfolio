import ScrollReveal from "@/components/animations/ScrollReveal";
import SkillBar from "@/components/skills/SkillBar";
import ToolsGrid from "@/components/skills/ToolsGrid";
import { skillCategories, tools } from "@/lib/data/skills";

export default function SkillsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Skills & Expertise
              </h1>
              <p className="text-xl text-white/70">
                지속적인 학습을 통해 쌓아온 기술 스택과 전문성
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.category}>
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      {category.category}
                    </h2>
                    <p className="text-white/60 text-lg">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Tools & Software
                </h2>
                <p className="text-lg text-white/60">
                  일상적으로 사용하는 도구들
                </p>
              </div>

              <ToolsGrid tools={tools} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Years of Experience", value: "3+" },
                  { label: "Projects Completed", value: "20+" },
                  { label: "Technologies", value: "30+" },
                  { label: "Coffee Consumed", value: "∞" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              함께 일하고 싶으신가요?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              새로운 프로젝트에 대해 이야기해봐요
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

