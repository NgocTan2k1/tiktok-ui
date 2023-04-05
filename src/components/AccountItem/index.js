import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem({ srcImg, name, nickname }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={srcImg} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{`@${nickname}`}</span>
            </div>
        </div>
    );
}

export default AccountItem;
