
import { data } from './AwardsAndPress.copy';
import './AwardAndPress.scss';
// import { Marquee } from '../Marquee/Marquee';
import Marquee from "react-fast-marquee";
import '../../components/Marquee/Marquee.scss';

const AwardsAndPress = () => {
    return (
        <>
            <Marquee className="marquee" speed={100}>
                <div className="marquee-inner">
                    {
                        Array.from({ length: 30 }).map((_, i) => (
                            <span className='title' key={i}>
                                <span>PRESS & AWARDS •</span>
                            </span>
                        ))
                    }
                </div>
            </Marquee>
            <div className="award-and-press">

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="award-and-press__item">
                                <h2 className="award-and-press__item-title">{item.title}</h2>
                                <div className="award-and-press__info">
                                    <h3 className="award-and-press__item-desc">{item.desc}</h3>
                                    <i className='icon-akn icon-diagonal-arrow h3'></i>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AwardsAndPress;