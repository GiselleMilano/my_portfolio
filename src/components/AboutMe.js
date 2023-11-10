export default function AboutMe() {
  return (
    <section id="about" className="flex justify-center items-center w-full">
      <div className="xl:w-[44rem] lg:w-[44rem] flex flex-col justify-center items-center gap-4">
        <div className="mb-16">
          <h1 className="w-full text-center text-neutral-50 text-2xl">
            About Me
          </h1>
          <hr className="w-32 h-0.5 mx-auto mt-2 bg-[#c3467b] border-0 rounded-full"></hr>
        </div>
        <div className="xl:w-[44rem] lg:w-[44rem] sm:w-full md:w-full xl:bg-neutral-700 lg:bg-neutral-700 flex flex-row justify-center items-center xl:p-8 lg:p-8 xl:gap-8 lg:gap-8 xl:border-2 lg:border-2 lg:border-opacity-10 xl:border-opacity-10 xl:shadow-md lg:shadow-md xl:shadow-neutral-500/50 lg:shadow-neutral-500/50 xl:border-neutral-500 lg:border-neutral-500 xl:rounded-lg lg:rounded-lg">
          <div className="rounded-md bg-[#c3467b] xl:block lg:block hidden">
            <img src="/avatar.svg" alt="emoji" className="w-60 p-4" />
          </div>
          <div className="w-full flex flex-col justify-center items-center xl:justify-start xl:items-start lg:justify-start lg:items-start xl:pl-8 lg:pl-8 h-full xl:border-l-2 lg:border-l-2 xl:border-[#c3467b] lg:border-[#c3467b]">
            <p className="text-base text-[#c3467b] xl:block lg:block hidden">
              Fullstack Developer
            </p>
            <h2 className="text-xl mb-2 text-neutral-50 xl:block lg:block hidden">
              Giselle Milano
            </h2>
            <p className=" text-neutral-50 text-sm xl:text-left lg:text-left text-center pl-8 pr-8 lg:pl-0 xl:pr-0">
              I'm a 23 year old Uruguayan full-stack developer. I have been
              programming since approximately 2019, and I have spent these past
              years learning and practicing my skills in a self-taught and
              proactive manner. In my free time, I enjoy working on my personal
              projects, creating digital art, and playing video games, among
              other things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
