import "./titlePage.css";

type Props = {
    title: string,
    description: string
} 

const TitlePage = ({ title, description }: Props) => {
    return (
        <section className="section-title-page">
            <div className="content-title-page">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    )
};

export default TitlePage;