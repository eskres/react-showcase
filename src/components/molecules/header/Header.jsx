import Icon from '../../atoms/Icons/Icon';
import Heading from '../../atoms/headings/Heading';
import Paragraph from '../../atoms/paragraph/Paragraph';

export default function Header() {
  return (
  <>
    <header className="container mt-4">
      <div className='row row-cols-auto d-flex align-items-center justify-content-center justify-content-md-start gx-1'>
        <Icon icon={"react"}/>
        <Heading heading={1} className={"col my-0"}>
          Einar's React Showcase
        </Heading>
        <article className='my-4'>
          <Paragraph>
            A fully responsive, mobile friendly Single-Page App (SPA) for me to showcase small projects that I have built with React, JavaScript, Bootstrap, JSX, HTML and CSS.
          </Paragraph>
          <Paragraph>
            The app currently consists of a calculator, pomodoro timer and a to-do list. I will be focussing on adding other features and mini-projects that can help me practice and improve my skills with React, particularly the full range of React hooks.
          </Paragraph>
        </article>
        </div>
    </header>
  </> 
  )
}