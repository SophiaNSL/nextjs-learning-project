import styles from '../../styles/List.module.css'
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { lists: data }
    }

}

const List = ({lists}) => {


    return ( 
        <div>
            <h1>All Users</h1>
            {lists.map( (list) => (
                <Link href={'/list/' + list.id} key = {list.id}>
                    <a className={styles.single}>
                        <h3>{list.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default List;