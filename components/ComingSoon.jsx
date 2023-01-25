import styles from 'styles/ComingSoon.module.css'
import commonStyles from 'styles/common.module.css'

export default function ComingSoon() {
   return (
      <div className={`${styles.ComingSoon} ${commonStyles.uppercase}`}>
         <h1 className={`${styles.bracketed} `}>coming soon</h1>
      </div>
   )
}
