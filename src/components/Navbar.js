export default function Navbar() {
  return (
    <div className="hidden bg-neutral-800 text-neutral-50 h-14 xl:flex lg:flex items-center fixed top-0 z-50 w-full border-b border-neutral-300">
      <div className="w-full flex flex-row justify-center items-center pr-12 pl-12">
        <div className="flex w-full justify-start items-center">
          <p className="h-7 w-7">giselle.dev</p>
        </div>
        <div className="flex w-full justify-end items-center gap-8">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#soft-skills">Contact</a>
        </div>
      </div>
    </div>
  );
}
