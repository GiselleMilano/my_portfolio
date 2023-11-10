export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center w-full mt-14"
    >
      <div className="mb-16">
        <h1 className="w-full text-center text-neutral-50 text-2xl">Skills</h1>
        <hr className="w-32 h-0.5 mx-auto mt-2 bg-[#c3467b] border-0 rounded-full"></hr>
      </div>
      <ul className="grid xl:grid-cols-6 lg:grid-cols-6 grid-cols-2 pl-8 pr-8 xl:pr-0 lg:pr-0 xl:pl-0 lg:pl-0 items-center justify-center gap-3">
        <li className="skill-element-violet">Javascript</li>
        <li className="skill-element-pink">Typescript</li>
        <li className="skill-element-red">Node.js</li>
        <li className="skill-element-pink">Java</li>
        <li className="skill-element-red">React</li>
        <li className="skill-element-red">TailwindCSS</li>
        <li className="skill-element-violet">Python</li>
        <li className="skill-element-pink">Spring Boot</li>
        <li className="skill-element-red">PHP</li>
        <li className="skill-element-pink">Git</li>
        <li className="skill-element-violet">MySQL</li>
        <li className="skill-element-pink">PostgreSQL</li>
        <li className="skill-element-pink">Prisma</li>
        <li className="skill-element-red">Hibernate</li>
        <li className="skill-element-violet">HTML</li>
        <li className="skill-element-pink">CSS</li>
        <li className="skill-element-red">Bootstrap</li>
      </ul>
    </section>
  );
}
