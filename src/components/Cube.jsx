import './index.scss';
import { c, cpp, java, javascript, php, python } from '../assets';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngular, faJava, faPython, faPhp, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';

const Cube = () => {
    return (
        <>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <img src={javascript} alt='JavaScript' className='icon' />
                </div>
                <div className='face2'>
                    <img src={cpp} alt='C++' className='icon'/>
                </div>
                <div className='face3'>
                    <img src={python} alt='Python' className='icon'/>
                </div>
                <div className='face4'>
                    <img src={java} alt='Java' className='icon'/>
                </div>
                <div className='face5'>
                    <img src={c} alt='C' className='icon'/>
                </div>
                <div className='face6'>
                    <img src={php} alt='Php' className='icon'/>
                </div>
            </div>
        </div>
        </>
    );

}

export default Cube;