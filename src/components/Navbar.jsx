import styles from "./style.module.css"
const Navbar = () =>{
    return (
        <nav className={styles.nav}>

            <img src="./logo192.png" alt="React Logo" />
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
            {/* <FactsLists/> */}
           
        </nav>
    )
}

export default Navbar