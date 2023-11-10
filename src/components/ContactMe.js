export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="flex flex-col justify-center items-center w-full mt-14 pb-14 bg-gradient-to-r from-[#9a42d8ff] to-[#d94848ff]"
    >
      <div className="mb-8 pt-12">
        <h1 className="w-full text-center text-neutral-50 text-2xl">Contact</h1>
        <hr className="w-32 h-0.5 mx-auto mt-2 bg-neutral-50 border-0 rounded-full"></hr>
      </div>
      <ul className="flex flex-row items-center justify-center gap-3">
        <li className="justify-center gap-2 flex flex-col items-center text-center text-neutral-50 p-4 rounded-md">
          <a href="https://github.com/GiselleMilano" target="_blank">
            <div className="border-2 border-neutral-50 rounded-full">
              <img
                src="/github-svgrepo-com.svg"
                alt="Medal svg"
                className="w-16 p-3"
              />
            </div>
            <p>GitHub</p>
          </a>
        </li>
        <li className="justify-center gap-2 flex flex-col items-center text-center text-neutral-50 p-4 rounded-md">
          <a
            href="https://www.linkedin.com/in/giselle-milano-88628616a/"
            target="_blank"
          >
            <div className="border-2 border-neutral-50 rounded-full">
              <img
                src="/linkedin-svgrepo-com.svg"
                alt="Medal svg"
                className="w-16 p-3"
              />
            </div>
            <p>LinkedIn</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
