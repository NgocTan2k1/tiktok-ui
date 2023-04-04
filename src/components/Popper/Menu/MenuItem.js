import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onCick }) {
    const classes = cx('menu-item', {
        saparate: data.saparate,
    });
    return (
        <Button className={classes} lefticon={data.icon} to={data.to} onClick={onCick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
