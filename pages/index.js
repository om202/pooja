import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev2.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Pooja Kumari Sah</title>
        <meta name="description" content="Pooja Kumari Sah Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 mb-6">
        {" "}
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 relative overflow-hidden mb-2">
            <Image
              src={deved}
              layout="responsive"
              objectFit="cover"
              alt="pooja"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Pooja Kumari Sah
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer | CSIT Student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Computer Science and Information Technology student at New
              Summit College. I am a passionate developer and love to code.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
