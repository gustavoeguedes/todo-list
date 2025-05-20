import styles from './styles.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            
                <h1 className={styles.logo}>
                    <img src="../../Logo.svg" alt="" />
                </h1>
            
        </header>
    )
}