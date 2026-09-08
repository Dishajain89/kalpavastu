import projects from "@/data/projects";
import projectDetails from "@/data/projectDetails";
import TemplateOne from "@/components/PortfolioPage/templates/TemplateOne/TemplateOne";
import TemplateTwo from "@/components/PortfolioPage/templates/TemplateTwo/TemplateTwo";
import TemplateThree from "@/components/PortfolioPage/templates/TemplateThree/TemplateThree";

export default async function ProjectPage({ params }) {
  // Dono cases handle karega (Promise or Plain Object)
  const resolvedParams = params instanceof Promise ? await params : params;
  const currentSlug = resolvedParams?.slug;

  console.log("Current Slug from URL:", currentSlug);

  // Data match
  const project = projects.find((item) => item.slug === currentSlug);
  const details = projectDetails[currentSlug];

  console.log("Found Project:", !!project, "Found Details:", !!details);

  // Agar project ya details match na ho to raw debug UI dikhaye
  if (!project || !details) {
    return (
      <div style={{ padding: "50px", color: "#fff", background: "#111", minHeight: "100vh" }}>
        <h2>Debug Info:</h2>
        <p>URL Slug: <strong>{String(currentSlug)}</strong></p>
        <p>Projects file matched: <strong>{project ? "YES" : "NO"}</strong></p>
        <p>ProjectDetails file matched: <strong>{details ? "YES" : "NO"}</strong></p>
        <p>Available slugs in details: {Object.keys(projectDetails).join(", ")}</p>
      </div>
    );
  }

  const projectData = {
    ...project,
    ...details,
  };

  switch (details.template) {
    case "templateOne":
      return <TemplateOne project={projectData} />;
    case "templateTwo":
      return <TemplateTwo project={projectData} />;
    case "templateThree":
      return <TemplateThree project={projectData} />;
    default:
      return <div style={{ color: "#fff", padding: "2rem" }}>Template not found</div>;
  }
}