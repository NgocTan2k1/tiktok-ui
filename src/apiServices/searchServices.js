import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log('no call api: ', error);
        const fakeresult = [
            {
                tick: true,
                avatar: 'https://ngoctan2k1.github.io/MyHeart/img/33.jpg',
                full_name: 'Ngọc Tân',
                nickname: 'ngoctan',
            },
        ];
        console.log('fakeresult: ', fakeresult);
        return fakeresult;
    }
};
