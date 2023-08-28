import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'

export default function Home() {
  return (
    <RootLayout>
    <main className={styles.main}>
     <div>
      hello
     </div>
    </main>
    </RootLayout>
  )
}
