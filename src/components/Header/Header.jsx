import Styles from './header.module.css';
import Search from "../../images/loupe.svg";
import User from "../../images/user.svg";
import Button from "../Button/Button";

const Header = () => {
    return (
        <div className={Styles.header_wrapper}>
            <div className={Styles.header_menu}>
                <div>XtraClass</div>
                <div className={Styles.header_menu_r}>
                    <span>
                        <img src={Search} alt="" className={Styles.icon} />
                    </span>
                    <span>
                        <Button 
                            text={<span><img src={User} className={Styles.icon}  alt="" />Login</span>}
                        />
                    </span>
                </div>
            </div>
           <div className={Styles.header_content}>
               <div className={Styles.header_overlay}></div>
                <div className={Styles.heading_caption}>
                    <h1>CCHN - Winneba</h1>
                    <div>College of Community Health Nursing</div>
                    <div>2020/21 Academic Year Election</div>
                </div>
            </div>
        </div>
    )
}

export default Header;
