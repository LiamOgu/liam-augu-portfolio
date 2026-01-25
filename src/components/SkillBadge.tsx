import { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all">
      {/* Icon - Place pour SVG */}
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        {skill.icon ? (
          // Si c'est un emoji temporaire
          typeof skill.icon === "string" && skill.icon.length < 5 ? (
            <span className="text-2xl">{skill.icon}</span>
          ) : (
            // Place pour votre SVG
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: skill.icon }}
            />
          )
        ) : (
          // Fallback si pas d'icône
          <div className="w-full h-full bg-gray-100 rounded" />
        )}
      </div>

      {/* Nom de la compétence */}
      <span className="text-sm font-medium text-gray-900">{skill.name}</span>
    </div>
  );
}
