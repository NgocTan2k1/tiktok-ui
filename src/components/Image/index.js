import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img className={classNames(styles.wrapper, className)} src={fallback || src} ref={ref} {...props} onError={handleError} />;
});

export default Image;
