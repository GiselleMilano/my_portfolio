export default function SoftSkillsGrid() {
  return (
    <section
      id="soft-skills"
      className="flex flex-col justify-center items-center w-full mt-14"
    >
      <div className="mb-16">
        <h1 className="w-full text-center text-neutral-50 text-2xl">
          Soft Skills
        </h1>
        <hr className="w-32 h-0.5 mx-auto mt-2 bg-[#c3467b] border-0 rounded-full"></hr>
      </div>
      <ul className="grid pl-8 pr-8 xl:pr-0 lg:pr-0 xl:pl-0 lg:pl-0 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 items-center justify-center gap-3">
        <li className="soft-skill-element-violet">
          <img
            src="/note-notepad-svgrepo-com.svg"
            alt="Medal svg"
            className="w-20"
          />
          <p>Organized</p>
        </li>
        <li className="soft-skill-element-pink">
          <img src="/medal-svgrepo-com.svg" alt="Medal svg" className="w-20" />
          <p>Responsible</p>
        </li>
        <li className="soft-skill-element-red">
          <img
            src="/handshake-deal-svgrepo-com.svg"
            alt="Medal svg"
            className="w-20"
          />
          <p>Teamwork</p>
        </li>
        <li className="soft-skill-element-pink">
          <img
            src="/computer-graph-svgrepo-com.svg"
            alt="Medal svg"
            className="w-20"
          />
          <p>Proactive</p>
        </li>
        <li className="soft-skill-element-red">
          <img
            src="/studying-exam-svgrepo-com.svg"
            alt="Medal svg"
            className="w-20"
          />
          <p>Autodidactic</p>
        </li>
        <li className="soft-skill-element-violet">
          <img
            src="/megaphone2-svgrepo-com.svg"
            alt="Medal svg"
            className="w-20"
          />
          <p>Good communication</p>
        </li>
      </ul>
    </section>
  );
}
