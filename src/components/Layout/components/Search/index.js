import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';
// import * as request from '~/utils/request';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
        // setLoading(true);

        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get(`users/search`, {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         });
        //         console.log(res.data);
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         console.log('no call api: ', error);
        //         const fakeresult = [
        //             {
        //                 tick: true,
        //                 avatar: 'https://ngoctan2k1.github.io/MyHeart/img/33.jpg',
        //                 full_name: 'Ngọc Tân',
        //                 nickname: 'ngoctan',
        //             },
        //         ];
        //         console.log('fakeresult: ', fakeresult);
        //         setLoading(false);
        //         setSearchResult(fakeresult);
        //     }
        // };
        // fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <HeadlessTippy
            interactive={true}
            // trigger="click"
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result, index) => (
                            <AccountItem key={index} data={result} />
                        ))}

                        <AccountItem
                            name={`Nguyệt Dễ Thương`}
                            nickname={`nguyetdethuong`}
                            srcImg={`https://ngoctan2k1.github.io/MyHeart/img/0.jpg`}
                        />
                        <AccountItem
                            name={`Nguyệt So Cute`}
                            nickname={`nguyetcute`}
                            srcImg={`https://ngoctan2k1.github.io/MyHeart/img/8.jpg`}
                        />
                        <AccountItem
                            name={`Nguyệt Đáng Yêu`}
                            nickname="cobedangyeu"
                            srcImg={`https://ngoctan2k1.github.io/MyHeart/img/9.jpg`}
                        />
                        <AccountItem
                            name={`Nguyệt Nguyễn`}
                            nickname={`nguyetvippro`}
                            srcImg={`https://ngoctan2k1.github.io/MyHeart/img/21.jpg`}
                        />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
