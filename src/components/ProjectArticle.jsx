import ProjectImg from '../assets/project-img1.png';

export default function ProjectArticle() {
  return (
    <div className="mt flex flex-col gap-8 border-t-2 py-10 lg:py-16">
      <h3 className="text-3xl font-semibold lg:text-5xl">
        Título del Artículo
      </h3>
      <p className="text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin
        faucibus aliquet sollicitudin egestas. Egestas lacus et curabitur amet,
        et habitant laoreet metus. Condimentum amet in amet, leo placerat.
        Vulputate congue duis gravida arcu ut eu sit lacus.
      </p>
      <img src={ProjectImg} alt="" />
      <img src={ProjectImg} alt="" />
    </div>
  );
}
