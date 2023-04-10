import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
// import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem({ data, name, nickname, srcImg }) {
    const newData = {};
    if (!data) {
        newData['tick'] = true;
        newData['avatar'] = srcImg;
        newData['full_name'] = name;
        newData['nickname'] = nickname;
    } else {
    }
    return (
        <Link to={`/@${newData.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={newData.avatar} alt={newData.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{newData.full_name}</span>
                    {newData.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{`@${newData.nickname}`}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
