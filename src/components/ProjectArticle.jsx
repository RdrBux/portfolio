export default function ProjectArticle({ title, content, children }) {
  return (
    <div className="mt flex flex-col gap-8 border-t-2 py-10 lg:py-16">
      <h3 className="text-3xl font-semibold lg:text-5xl">{title}</h3>
      <p className="text-stone-600">{content}</p>
      <div className="">{children}</div>
    </div>
  );
}
