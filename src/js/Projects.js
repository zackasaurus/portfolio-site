import React from 'react'
import ReactDOM from 'react-dom'
import MortgageCalculator from '../img/mortgage-calculator-sq.png'
import PlatformGame from '../img/platform-game-sq.png'
import EZBaccaratSim from '../img/ez-baccarat-sim.png'
import Burgerbuilder from '../img/burger-builder.png'
import WebDesign1 from '../img/web-design-1.png'
import WebDesign2 from '../img/web-design-2.png'
import MotionGraphics1 from '../img/motion-graphics-1.jpg'
import MotionGraphics2 from '../img/motion-graphics-2.jpg'
import MotionGraphics3 from '../img/motion-graphics-3.png'


export default function Projects() {

    // SVG
    const view = <svg id="icon-eye" height="24px" width="24px" viewBox="0 0 20 20">
        <title>eye</title>
        <path
            d="M10 4.4c-6.561 0-10 4.832-10 5.6 0 0.766 3.439 5.6 10 5.6s10-4.834 10-5.6c0-0.768-3.44-5.6-10-5.6zM10 14.307c-2.455 0-4.445-1.928-4.445-4.307s1.99-4.309 4.445-4.309c2.455 0 4.444 1.93 4.444 4.309s-1.989 4.307-4.444 4.307zM10 10c-0.407-0.447 0.663-2.154 0-2.154-1.228 0-2.223 0.965-2.223 2.154s0.995 2.154 2.223 2.154c1.227 0 2.223-0.965 2.223-2.154 0-0.547-1.877 0.379-2.223 0z">
        </path>
    </svg>
    const github = <svg id="icon-github" height="24px" width="24px" viewBox="0 0 20 20">
        <title>github</title>
        <path
            d="M13.18 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.3-0.807 1.3-1.801c-0.001-0.992-0.582-1.799-1.3-1.799zM17.706 6.626c0.149-0.365 0.155-2.439-0.635-4.426 0 0-1.811 0.199-4.551 2.080-0.575-0.16-1.548-0.238-2.519-0.238-0.973 0-1.945 0.078-2.52 0.238-2.741-1.881-4.552-2.080-4.552-2.080-0.789 1.987-0.781 4.061-0.634 4.426-0.928 1.008-1.495 2.219-1.495 3.871 0 7.186 5.963 7.301 7.467 7.301 0.342 0 1.018 0.002 1.734 0.002s1.392-0.002 1.732-0.002c1.506 0 7.467-0.115 7.467-7.301 0-1.652-0.566-2.863-1.494-3.871zM10.028 16.915h-0.056c-3.771 0-6.709-0.449-6.709-4.115 0-0.879 0.31-1.693 1.047-2.369 1.227-1.127 3.305-0.531 5.662-0.531 0.010 0 0.020 0 0.029 0s0.018 0 0.027 0c2.357 0 4.436-0.596 5.664 0.531 0.735 0.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zM6.821 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.301-0.807 1.301-1.801c0-0.992-0.582-1.799-1.301-1.799z">
        </path>
    </svg>

    // Project Data
    const projectData = [
        { id: 'mortgage-calculator', name: 'Mortgage Calculator', image: MortgageCalculator, view: 'https://mortgage-calculator.netlify.com/', github: 'https://github.com/Zackasaurus/mortgage-calculator' },
        { id: 'html5-game', name: 'HTML 5 Game', image: PlatformGame, view: 'https://zackasaurus.github.io/shape_running_game/', github: 'https://github.com/Zackasaurus/shape_running_game' },
        { id: 'ez-baccarat-sim', name: 'EZ Baccarat Simulator', image: EZBaccaratSim, view: 'https://zackasaurus.github.io/EZ-BACCARAT-SIMULATOR/', github: 'https://github.com/Zackasaurus/EZ-BACCARAT-SIMULATOR' },
        // { id: 'react-redux-tutorial', name: 'React / Redux / Firebase Tutorial', image: Burgerbuilder, view: 'https://burger-builder-tutorial.netlify.com/', github: 'https://github.com/Zackasaurus/burger-builder' },
        { id: 'web-design-1', name: 'Web Design | UI | UX', image: WebDesign1, view: 'https://www.behance.net/gallery/63629519/Web-Design-UI-UX', github: false },
        { id: 'web-design-2', name: 'Web Design | UI | UX', image: WebDesign2, view: 'https://www.behance.net/gallery/23938703/Web-Design-UI-UX', github: false },
        { id: 'motion-graphics-1', name: 'Motion Graphics', image: MotionGraphics1, view: 'https://www.behance.net/gallery/37610479/Motion-Graphics', github: false },
        { id: 'motion-graphics-3', name: 'Motion Graphics', image: MotionGraphics3, view: 'https://www.behance.net/gallery/52921001/Motion-Graphics', github: false },
        { id: 'motion-graphics-2', name: 'Motion Graphics | Video', image: MotionGraphics2, view: 'https://www.behance.net/gallery/52921257/Motion-Graphics', github: false },
    ]

    // Make JSX Project List
    const List = () => {

        const projectList = projectData.map((i) => {
            return (
                <div className="item">
                    <h3>{i.name}</h3>
                    <div className="item__image">
                        <img src={i.image} alt="" />
                    </div>
                    <div className="btn-group">
                        {i.view ? <a className="btn-view" href={i.view} target="_blank">
                            {view}
                            <span>Project</span>
                        </a> : null}
                        {i.github ? <a className="btn-github" href={i.github} target="_blank">
                            {github}
                            <span>Github</span>
                        </a> : null}
                    </div>
                </div>
            )

        })

        return (
            projectList
        )
    }


    // Render to DOM
    ReactDOM.render(<List />, document.getElementById('project__items'));
}

