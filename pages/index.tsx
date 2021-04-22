import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="annie midthun">
    <div className="flex flex-col items-center justify-around">
      <h1 className="mb-10 text-2xl font-bold text-center">
        Hi, I'm Annie Midthun 👋
      </h1>
      <img className="p-5 bg-blue-200 rounded-full" src="/portrait.png" />
    </div>
    <div className="mb-8">
      <h1 className="mb-2 text-xl font-regular"> 👧🏼 about me </h1>
      <p className="ml-4 font-light">
        I am currently a junior at Middlebury College pursuing a double major in
        Economics and Computer Science. I really love dogs, soccer, hiking
        anywhere I can, and the west coast.
      </p>
    </div>
    <div className="mb-8">
      <h1 className="mb-2 text-xl font-regular">
        👩🏼‍💻 some things I have worked on
      </h1>
      <ul className="ml-4 font-light list-disc list-inside ">
        <li>
          <a href="https://www.cowen.com/">
            [Incoming] <span className="text-blue-400 underline">Cowen</span>
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 underline"
            href="https://www.middleburyconsultinggroup.com/"
          >
            Middlebury Consulting Group{" "}
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 underline"
            href="http://www.girlswhoinvest.org/"
          >
            Girls Who Invest
          </a>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h1 className="mb-2 text-xl font-regular">🔗 links</h1>
      <div className="flex">
        <div className="font-light text-blue-400 underline">
          <a href="https://www.linkedin.com/in/annie-midthun-51a485123/">
            LinkedIn
          </a>
        </div>
        <div className="ml-4 font-light underline">
          <a href="/Midthun_Anne-Resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
