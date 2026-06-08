import projects from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({
  params,
}) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <main>
      <h1>{project.title}</h1>

      <p>{project.location}</p>

      <p>{project.category}</p>

      {/* Later full gallery */}
      {/* client images */}
      {/* floor plans */}
      {/* videos */}
      {/* vastu details */}
    </main>
  );
}