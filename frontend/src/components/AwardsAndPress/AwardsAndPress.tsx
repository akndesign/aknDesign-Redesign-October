
import { data } from './AwardsAndPress.copy';
import './AwardAndPress.scss';
import { Marquee } from '../Marquee/Marquee';

const AwardsAndPress = () => {
    return (
        <>
            <Marquee>
                {
                    Array.from({ length: 30 }).map((_, i) => (
                        <span className='title' key={i}>
                            <span>AWARD & PRESS</span>
                        </span>
                    ))
                }
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