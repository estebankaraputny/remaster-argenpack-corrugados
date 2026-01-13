import "./oneinfo.css"

type Props = {
    titleInfo: string,
    info: string,
    urlImg: string
}

const OneInfo = ({titleInfo, info, urlImg}: Props) => {
    return(
        <section className="container-oneInfo">
            <div className="oneInfo">
                <img src={urlImg} alt="" className="oneInfo-img"/>
                <div className="oneInfo-text">
                    <h3>{titleInfo}</h3>
                    <p>{info}</p>
                </div>
            </div>
        </section>
    )
}

export default OneInfo;