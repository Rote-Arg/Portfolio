import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

/**
  Footer component
  Component responsible for displaying the website's social media links
  in the footer.
**/
export default function Footer() { 
  return (
    <>
      <footer>
        <a href="https://github.com/Rote-Arg" target="_blank" title="GitHub profile">
          <VscGithub />
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-tenorio/" target="_blank" title="LinkedIn profile">
          <AiOutlineLinkedin />
        </a>
        <a href="mailto:rodrigo.raul.tenorio@gmail.com" title="Email" target="_blank">
          <MdOutlineEmail />
        </a>
      </footer>
    </>
  );
}

