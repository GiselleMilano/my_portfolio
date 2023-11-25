import Image from "next/image";

export default function Greeting() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex flex-col xl:flex-row-reverse lg:flex-row-reverse items-center justify-center xl:gap-12 lg:gap-12 gap-8 bg-gradient-to-r from-[#9a42d8ff] to-[#d94848ff] w-full pl-12 pr-12 pt-16 xl:pb-0 lg:pb-0 pb-16">
        <div className="flex justify-center items-center">
          <Image
            src="/photo.png"
            width={200}
            height={200}
            className="xl:w-48 xl:h-48 lg:h-48 lg:w-48 w-32 h-32 rounded-full bg-neutral-800 -rotate-12"
            alt="My Photo"
          />
        </div>
        <div className="h-full text-2xl xl:text-left lg:text-left text-center text-neutral-50">
          <p className="flex gap-2">
            Hi! My name&apos;s Giselle.
            <Image
              src="/my_emoji_white.svg"
              width={100}
              height={100}
              alt="emoji"
              className="w-6 h-6 inline ml-1"
            />
          </p>
          <p>Welcome to my web portfolio!</p>
        </div>
      </div>
      <Image
        src="/wave.svg"
        width={200}
        height={200}
        alt="Wave svg"
        className="w-full"
      />
    </section>
  );
}
