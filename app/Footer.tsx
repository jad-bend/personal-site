export default function Footer() {
  return (
    <footer className="  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img src="/logo.png" height="50px" width="50px"></img>
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/jadbendarkawi/"
                className="mr-4 hover:underline md:mr-6"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jad-bend"
                className="mr-4 hover:underline md:mr-6 "
              >
                github
              </a>
            </li>
            <li>
              <a href="mailto:jadb@princeton.edu" className="hover:underline">
                email
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://jadbendarkawi.com/" className="hover:underline">
            jad bendarkawi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
