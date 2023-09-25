import styles from "./style.module.css"
const FactsLists = () =>{
    return(
        
        <main className={styles.mainFunFacts}>
        <h1 className={styles.factsTitle}>Fun facts about React</h1>
        <ul className={styles.fanFactList}>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}

export default FactsLists