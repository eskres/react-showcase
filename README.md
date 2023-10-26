# Einar\'s React Showcase

![Einar\'s React Showcase](https://i.imgur.com/gEZzLJj.png)

A constantly evolving project that I have been working on sporadically since July 2023. This is a fully responsive, mobile friendly Single-Page App (SPA) for me to showcase small projects that I have built with React, JavaScript, Bootstrap, HTML and CSS.

The app currently consists of a calculator, pomodoro timer and a to-do list. I will be focussing on adding other features and mini-projects that can help me practice and improve my Front End skills, particularly the full range of React hooks. My most recent work has been to refactor the entire project to utilise the Atomic Design methodology.


**My React Showcase is deployed at https://react-showcase.skreslett.com**

You can try out the tools available in my React Showcase by visiting the link above. The site does not require the installation of any additional software.

---
| Table of Contents |
|-|
| [Technologies Used](#Technologies-Used) |
| [Planning](#Planning) |
| [Build Process](#Build-Process) |
| [Challenges](#Challenges) |
| [Wins](#Wins) |
| [Key Learnings](#Key-Learnings) |
| [Bugs](#Bugs) |
| [Future Improvements](#Future-Improvements) |

---
## Technologies Used

- React
- JavaScript
- Bootstrap
- HTML
- CSS

---
## Planning

I spent the first half of 2023 working on increasing my skillset as much as possible by learning TypeScript and Testing Methodologies such as Jest, Vitest and Cypress, however, I felt that I had lost sight of the fundamentals I had learnt at General Assembly and consequently my base level JavaScript and React skills had weakened. My intention with this project was to take things back to basics and strengthen those foundational skills.

The idea for this project started off as a to-do list app and quickly transformed into a vessel or showcase for small projects that emphasise my React skills. I consequently worked on this project in stages. First the to-do list then the pomodoro timer and finally the calculator. Most recently I refactored the whole project into Atoms, Molecules and Organisms as per the Atomic Design methodology.

---
## Build Process

### To-do list
I started the project with create-react-app for rapid setup. My main focus was implementing the to-do list\'s functionality, creating React components, managing state, and ensuring smooth user interactions for adding, editing, and deleting tasks. After thorough testing and ensuring functionality\'s reliability, I turned to Bootstrap to style the page. Leveraging Bootstrap\'s pre-designed components and responsive grid system, I customized the to-do list\'s appearance with appropriate colors, fonts, and styles. This not only improved the visual appeal but also enhanced usability and accessibility, resulting in a well-rounded and user-friendly application.
In a subsequent update, I introduced a crucial feature that enabled task persistence. Tasks were now stored in the browser\'s local storage, ensuring that users would not lose their to-do lists, even if they closed the application or refreshed the page. This enhancement significantly improved the user experience, making the to-do list more reliable and user-friendly.

### Pomodoro timer
The timer functionality was fairly simple allowing me to devote more attention to the aesthetics. My primary design objectives were centered around enhancing user experience. My focus was to make the timer not just functional but also visually engaging. I envisioned a progress bar that dynamically represented the passage of time as well as a countdown that would give the precise number of minutes and seconds left. To further improve usability I implemented colour coding on the progress bar to indicate whether the user is on a task, break or the timer had been paused. I later enhanced this project further by adding a configuration modal so that the user could define the amount of time they preferred for the task and break respectively.

### Calculator
I was unsure about how to approach the caclulator functionality so I started by styling the UI and then worked on the functionality by categorising the buttons and tackling them one by one. I experimented with storing numeric inputs in state as numbers and strings but I switched to arrays as I found them more reliable. I found the decimal.js package incredibly useful for the calculations and number formatting options, particularly for outputing exponents of 10.
With this project I agonised over getting the app to behave as closely to other calculator apps such on Windows, iOS, Android and Google.com. Achieving this required careful attention to detail and continuous refinement. In the end, I am satisfied with the result, confident in the app\'s ability to perform its calculations and mimic the behavior of other popular calculator applications.

### Atomic Design Refactor
I decided to refactor the entire project into reusable components using the atomic design methodology. I knew that for a project of this size it was overkill and I wouldn\'t see the benefits, even more so because I am using Bootstrap. Brad Frost\'s book Atomic Design offered a pivotal insight in Chapter 1 when he recounts Dave Rupert\'s take on design systems:

>Dave wonderfully articulated that it\'s not necessarily about using Bootstrap for every client, but rather creating \"tiny Bootstraps for every client.\"
>
>>    Responsive deliverables should look a lot like fully-functioning Twitter Bootstrap-style systems custom tailored for your clients\' needs. These living code samples are self-documenting style guides that extend to accommodate a client’s needs as well as the needs of the ever-evolving multi-device web.
>>
>>    Dave Rupert
>
>It\'s not just about using a design system, it\'s about creating your system.

This helped me to realise that it was not merely about implementing a design system but crafting a system unique to each project. However, despite this, I chose to continue with the refactor. My rationale was rooted in a desire to gain a comprehensive understanding of established industry practices, especially given my lack of professional experience on substantial projects. While it may have seemed unnecessary and impractical at the time, this endeavor served as an invaluable learning experience, providing insights into the world of web development and design systems.

### Highlights
#### Conditionally rendering a to-do inside a map
```
  toDos.map((value) => 
    <div className="row mx-0 mt-2 pt-2 border-top gx-2" key={value.id}>
      {
        value.edit ?
          // Conditionally render to-do item as a text area input if user selects edit
          <ToDoEdit
            key={value.id}
            value={value.text}
            onChange={(e) => {
                editToDo({...value, text: e.target.value});
                e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onFocus={(e) => {e.target.style.height = `${e.target.scrollHeight}px`}}
            autoFocus={true}
            onClick={() => value.text.length >= 2 ? editToDo({...value, edit: false}) : delToDo(value.id)}
          />
        :
          // Otherwise to-do item is a checkbox input
          <ToDoItem
            key={value.id}
            toDo={value}
            onChange={(e) => {editToDo({...value, done: e.target.checked})}}
            onClick={{
                edit: () => {editToDo({...value, edit: true})},
                delete: () => {delToDo(value.id)}
            }}
          />
      }
    </div>
  )
```
To-dos are stored in state as an array of objects with one of the object\'s values being a boolean with the key \"edit\". This value exists for the sole purpose of allowing me to use a ternary to conditionally render a to-do component as a list item with a checkbox or an editable textarea field depending on whether the value is set to true or false.

#### Pomodoro timer configuration stored in local storage
```
    useEffect(() => {
      // Store pomodoro config in local storage on state change
      localStorage.setItem("pomoConfig", JSON.stringify(config))
    }, [config])

    const [config, setConfig] = useState(() => {
      // Get any saved config from local storage
      const saved = JSON.parse(localStorage.getItem("pomConfig"));
      // Initialise state with saved config if they exist
      if (saved) {
        return saved
      }
      return {task: 25 * 60, break: 5 * 60}
    }
  );
```
When the app is rendered the useState hook checks for a pomodoro timer configuration in local storage and initialises state accordingly. If the user decides to alter the pomodoro timer configuration the useEffect hook comes into play as soon as the configuration state is updated and then passes the configuration to local storage.

#### Using a nested map to render the grid of calculator keys
```
  keys.map((value, index) => 
      <div key={index} className="row g-1 mb-1">
        {value.map((value, index) => 
          <div key={index} className={`col d-grid ${value.colClassName}`}>
            <Button
              key={value.value}
              color={value.color}
              className={value.buttonClassName}
              onClick={value.onClick}
              value={value.value}
            >
              {value.value}
            </Button>
          </div>
        )}
      </div>
    )
```
Each calculator key\'s properties are organised within an object, representing its column, within an array representing its row. This row, in turn, is enclosed within another array, forming a comprehensive grid structure. In the rendering process, a nested map is employed to dynamically render each calculator key, ensuring their proper placement within this grid. This structured approach to organising and rendering calculator keys streamlines the code and enhances maintainability, making it easier to manage and customise the grid\'s layout and content.

---
## Challenges
The most time consuming challenge I faced was an issue whereby my modals would not be visibile on iOS devices. In order to toggle modal visibility I had written my own function to safely access the modals within the DOM utilising useRef. I had done this to overcome an issue that I can no longer remember. This approach worked well on PCs and Android devices but for some reason was an issue with iOS. I tried many ways to fix the issue but the only viable solution turned out to be reverting back to Bootstrap\'s data attributes in order to toggle the modal visibility. I was not able to pinpoint the exact cause of the bug but it was clear that I failed to \"keep it simple stupid\" when I over-engineered a solution to a problem so insignificant that I can no longer remember what it was.

---
## Wins
I am proud of delivering a fully responsive Single Page Application that looks professional and delivers a seamless user experience. I feel more confident than ever in my ability to build a react-based user interfaces.

---
## Key Learnings

Throughout the process of creating this app, my personal growth has been significant. I\'ve not only expanded my technical expertise but also refined my problem-solving abilities. Working on these projects enabled me to improve my grasp of React\'s component-based structure and utilisation of hooks. It also bolstered my understanding of user interactions and input handling. These skills have allowed me to design and develop applications that prioritise a smooth and intuitive user interface, all while adhering to the principles of atomic design. Overall, this journey has not only improved my coding skills but has also made me a more user-centric and adaptable developer, ensuring the applications I create are not just functional but also a pleasure to use.

---
## Bugs
At this stage, all bugs have been eliminated. However, previous bugs have included modals not working on iOS devices, the calculator display ignoring decimal inputs until the value inputed after the decimal is greater than 0 and the to-do list allowing empty inputs.

---
## Future Improvements
In the future I would like to refactor the project into TypeScript and collaborate with a UI/UX designer to move away from Bootstrap and have the entire project use custom CSS styling.

---