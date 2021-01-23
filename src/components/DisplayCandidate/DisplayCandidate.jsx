import Styles from "./display.module.css";

const DisplayCandidate = ({ candidate, category}) => {
    return (
    <>
        <div className={Styles.wrapper}>
            <div className={Styles.thumbnail}>
                <img src={candidate.image} />
            </div>
            <div>
                <h3>{candidate.name}</h3>
                <span className={Styles.label}>{category.toUpperCase().replace("_", " ")}</span>
                <div>{candidate.team}</div>
                <div>{candidate.slogan}</div>
            </div>
        </div>
    </>
    )
}

export default DisplayCandidate;