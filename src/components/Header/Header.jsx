import Styles from './header.module.css';

const Header = () => {
    return (
        <div className={Styles.header_wrapper}>
            <div className={Styles.header_menu}>
                <div>XtraClass</div>
                <div className={Styles.header_menu_r}>
                    <div>Search</div>
                    <div>Login</div>
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
