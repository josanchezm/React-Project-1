import ReactIcon from '../assets/react-icon.png'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div>
                <img src={ReactIcon} alt="react-icon" />
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </nav> 
    )
}