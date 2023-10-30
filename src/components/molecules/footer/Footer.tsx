import Icon from "../../atoms/Icons/Icon";
import Heading from "../../atoms/headings/Heading";
import Link from "../../atoms/link/Link";
import Paragraph from "../../atoms/paragraph/Paragraph";

export default function Footer(): React.JSX.Element {

  const className = "icon-link icon-link-hover mx-1";
  const style = {"--bs-icon-link-transform": "translate3d(" + 0 + ", " + -.125 +"rem," + 0 +")"} as React.CSSProperties;
  const role = "icon";

  return (
    <footer className="container mt-5 pt-5">
      <section id="contact" className="text-center mt-2">
        <Heading heading={3}>Contact</Heading>
        <div className="m-3 fs-3">
          <Link
            href={"https://github.com/eskres/react-showcase"}
            className={className}
            style={style}
            role={role}
            ariaLabel={"github"}
          >
            <Icon icon={"github"}/>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/einar-skreslett"}
            className={className}
            style={style}
            role={role}
            ariaLabel={"linkedin"}
          >
            <Icon icon={"linkedin"}/>
          </Link>
          <Link
            href={"mailto:einar.skreslett@gmail.com"}
            className={className}
            style={style}
            role={role}
            ariaLabel={"email"}
          >
            <Icon icon={"email"}/>
          </Link>

        </div>
      </section>
      <Paragraph className={"p-3"}>{`© ${new Date().getFullYear()} Einar Skreslett`}</Paragraph>
    </footer>
  )
}