import styles from './Post.module.css';

function Post({ id, title, content, authorName }) {
	return (
		<div className={styles.post}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.content}>{content}</p>

			<i className={styles.author}>{authorName}</i>
		</div>
	);
}

export default Post;
