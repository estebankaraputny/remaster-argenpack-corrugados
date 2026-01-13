import "./twoinfo.css"

type Props = {
    titleInfo: string,
    info: string,
    urlImg: string
}

const TwoInfo = ({titleInfo, info, urlImg}: Props) => {
    return(
        <section className="container-twoInfo">
            <div className="twoInfo">
                <div className="twoInfo-text">
                    <h3>{titleInfo}</h3>
                    <p>{info}</p>
                </div>
                <img src={urlImg} alt="" className="twoInfo-img"/>
            </div>
        </section>
    )
}

export default TwoInfo;