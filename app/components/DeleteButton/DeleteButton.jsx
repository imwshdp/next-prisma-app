'use client';
import { useRouter } from 'next/navigation';

import styles from './DeleteButton.module.css';

function DeleteButton({ postId }) {
	const router = useRouter();

	const handleClick = async () => {
		try {
			await fetch(`/api/post/${postId}`, {
				method: 'DELETE'
			});
			router.refresh();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<button type='button' className={styles.button} onClick={handleClick}>
			Delete
		</button>
	);
}

export default DeleteButton;
