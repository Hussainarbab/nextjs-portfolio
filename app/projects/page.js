import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "To-Do App",
    desc: "React & LocalStorage کے ساتھ سادہ To-Do ایپ۔",
  },
  {
    title: "Weather App",
    desc: "API ڈیٹا کے ساتھ جدید React Weather ایپ۔",
  },
  {
    title: "Portfolio Website",
    desc: "Next.js پر مبنی پروفیشنل پورٹ فولیو۔",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">میرے پروجیکٹس</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}
