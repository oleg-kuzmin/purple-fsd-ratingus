import { Tag } from '@/shared/ui';
import styles from './Like.module.css';

export function Like() {
  return (
    <div>
      <Tag size="m" color="orange" icon="Check" className={styles.like}>
        Like
      </Tag>
    </div>
  );
}
