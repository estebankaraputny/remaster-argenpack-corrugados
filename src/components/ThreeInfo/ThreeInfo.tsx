import "./threeinfo.css"
import Img1 from "@/assets/image/threeinfoone.png"
import Img2 from "@/assets/image/threeinfotwo.png"

type Props = {
    titleInfo: string,
    descriptionInfo: string,
    titleInfoOne: string,
    titleInfoTwo: string,
    titleInfoThree: string,
    infoOne: string,
    infoTwo: string,
    infoThree: string
}

const ThreeInfo = ({ titleInfoOne, titleInfoTwo, titleInfoThree, infoOne, infoTwo, infoThree, titleInfo, descriptionInfo}: Props) => {
    return(
        <section className="section-three-info">
            <div className="content-three-info">
                <div className="img-three-one">
                    <img src={Img1} alt="" data-aos="fade-down" />
                </div>
                <div className="img-three-two" data-aos="fade-up">
                    <img src={Img2} alt="" />
                </div>
                <div className="three-info-row-one" data-aos="zoom-in-left">
                    <div className="title-three-info">
                        <h2>
                            {titleInfo}
                        </h2>
                    </div>
                    <div className="three-info-row-two">
                        <div className="description-three-info">
                            <p>
                                {descriptionInfo}
                            </p>
                        </div>
                        <div className="three-info-more">
                            <div className="more-info">
                                <a href="">
                                    <span>
                                        01
                                    </span>
                                    <h2>
                                        {titleInfoOne}
                                    </h2>
                                    <p>
                                        {infoOne}
                                    </p>
                                </a>
                            </div>
                            <div className="more-info">
                                <a href="">
                                    <span>
                                        02
                                    </span>
                                    <h2>
                                        {titleInfoTwo}
                                    </h2>
                                    <p>
                                        {infoTwo}
                                    </p>
                                </a>
                            </div>
                            <div className="more-info">
                                <a href="">
                                    <span>
                                        03
                                    </span>
                                    <h2>
                                        {titleInfoThree}
                                    </h2>
                                    <p>
                                        {infoThree}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ThreeInfo;