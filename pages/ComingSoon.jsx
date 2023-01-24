import styles from './ComingSoon.module.css'
import commonStyles from '../../css/common.module.css'

export default function ComingSoon() {
   return (
      <div className={`${styles.ComingSoon} ${commonStyles.uppercase}`}>
         <h1 className={`${styles.bracketed} `}>coming soon</h1>
      </div>
   )
}
