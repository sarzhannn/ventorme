# HERO: аудит и применение Skills

Дата: 2026-10-12. Новое вложение 6a605e31-f16d-4a01-843c-b77165153408 прочитано полностью.
Все 23 явно указанных SKILL.md обнаружены и прочитаны. Ниже применение отделено от проверки применимости.
Никаких пакетов, шрифтов или иных активов в фазе reinvention не скачивали. Никакие сторонние скрипты из Skills не запускали; использовали существующий установленный Playwright CLI и собственные тесты проекта.

## Применены по назначению

| Skill и точный путь | Практическое влияние |
|---|---|
| frontend-design: `C:/Users/Admin/.agents/skills/frontend-design/SKILL.md` | Авторская типографическая композиция, две шрифтовые роли, отличие от отвергнутой версии. |
| impeccable: `C:/Users/Admin/.agents/skills/impeccable/SKILL.md` | Code-led redesign в заданном направлении; bounded visual review; независимый finish reviewer и документирование системы. Скрипты запрещены пользователем и не запускались в этой фазе. |
| web-design-guidelines: `C:/Users/Admin/.agents/skills/web-design-guidelines/SKILL.md` | Семантика, focus, safe areas, переносы, touch targets, reduced motion, отсутствие скрытого контента. |
| ai-ui-ux-motion-engine: `C:/Users/Admin/.agents/skills/ai-ui-ux-motion-engine/SKILL.md` | Семистрочный direction contract, ограниченный HERO scope, browser evidence и проверка поведения. |
| 60fps-animation: `C:/Users/Admin/.agents/skills/60fps-animation/SKILL.md` | Профилирование CDP; устранение покадровых SVG Layout/Paint; анимация внешних HTML-слоёв transform/opacity. |
| accessible-animation: `C:/Users/Admin/.agents/skills/accessible-animation/SKILL.md` | Локализованная пауза/возобновление, live prefers-reduced-motion, видимое статическое состояние. |
| animation-principles: `C:/Users/Admin/.agents/skills/animation-principles/SKILL.md` | Раздельные primary/support/ambient слои, короткий stagger, ease-out и мягкий overshoot. |
| kinetic-typography: `C:/Users/Admin/.agents/skills/kinetic-typography/SKILL.md` | Поэтапные строки, полный aria-label и aria-hidden фрагменты, проверка кадров 0/200/800ms. |
| motion-background: `C:/Users/Admin/.agents/skills/motion-background/SKILL.md` | Два градиентных слоя, медленные бесшовные циклы; pause вне экрана и скрытой вкладки. Пример background-position заменён compositor-transform ради производительности. |
| svg-animation: `C:/Users/Admin/.agents/skills/svg-animation/SKILL.md` | Собственная геометрия с viewBox, разные амплитуды, статические SVG внутри анимируемых HTML-слоёв. |
| playwright: `C:/Users/Admin/.agents/skills/playwright/SKILL.md` | Реальный Chromium через уже установленный CLI; screenshots, 3 языка, размеры, действия и runtime trace. |
| ui-ux-pro-max: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/ui-ux-pro-max/SKILL.md` | Mobile-first, раннее действие, 44px+ controls, читабельность и сохранение пользовательских сценариев. |
| banner-design: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/banner-design/SKILL.md` | Принципы editorial HERO: сильный фокус, контраст, безопасные поля, ясный CTA. Не создавались отдельные рекламные баннеры. |
| brand: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/brand/SKILL.md` | Сохранение Ventorme, заданного голоса, обязательных текстов и правдивых ограничений. |
| design: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/design/SKILL.md` | Согласование композиции, бренд-ролей, токенов и геометрического языка; без дополнительных логотипов/CIP. |
| design-system: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/design-system/SKILL.md` | Primitive → semantic → component CSS tokens; документирование реальных вариантов и состояний. |
| motion: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/motion/SKILL.md` | Самодостаточные best-practices для CSS/vanilla; transform, прерываемые действия, отсутствие лишней библиотеки. Motion/Motion+ MCP не использовался, MotionScore не заявляется. |
| ui-styling: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/ui-styling/SKILL.md` | Mobile-first, семантические controls, визуальная иерархия и токены. Tailwind/shadcn/React не добавлялись — сохранён стек. |

## Прочитаны, но не применялись как отдельный workflow

| Skill и точный путь | Причина |
|---|---|
| slides: `C:/Users/Admin/Desktop/Hackathon/.agents/skills/slides/SKILL.md` | Презентация не входит в HERO-only scope. |
| after-effects: `C:/Users/Admin/.agents/skills/after-effects/SKILL.md` | Не нужен видеорендер, AE-проект, выражения или экспорт. |
| glassmorphism: `C:/Users/Admin/.agents/skills/glassmorphism/SKILL.md` | Новый бриф исключает постоянное стекло; построены непрозрачные контрастные поверхности. |
| logo-animation: `C:/Users/Admin/.agents/skills/logo-animation/SKILL.md` | Новый логотип, заставка или отдельный brand reveal не требуются. |
| artifact-template-analytics-dashboard: `C:/Users/Admin/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-analytics-dashboard/SKILL.md` | Это шаблон электронной таблицы; таблица не входит в задачу сайта. |

## Отсутствующие агрегаты
Отдельных SKILL.md с именами web-animation-skills, motion-design-skills, kinetic-typography-skills в проверенных установленных каталогах нет.
Есть репозиторий C:/Users/Admin/Desktop/Hackathon/motion-design-skills и установленные профильные skills animation-principles, kinetic-typography, motion-background, accessible-animation, svg-animation, 60fps-animation; использованы они. Ничего не установлено.

## Шесть применённых принципов
1. Композиция имеет собственный визуальный образ, не меняя содержание продукта.
2. Два локальных шрифта с разными ролями; читаемость каждого языка проверяется отдельно.
3. На мобильном смысл, CTA и обход опроса идут раньше декоративной сцены.
4. В циклах двигаются подготовленные слои, а не свойства, вызывающие layout/paint.
5. Движение отключается и ставится на паузу; выбранная проблема видна в последующем состоянии.
6. Рабочие браузерные проверки и сохранённые снимки важнее деклараций о качестве.

Web Interface Guidelines проверены по актуальной [официальной инструкции](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
Это аудит реализации, не сертификация WCAG и не пользовательское исследование.
