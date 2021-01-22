import Styles from "./VotersWrapper.module.css";

const Wrapper = ({children}) => (
    <div className={Styles.wrapper}>
        {children}
    </div>
);

export default Wrapper;