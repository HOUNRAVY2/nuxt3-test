


const subMenuData = [
                {
                    id: 1,
                    title: 'BÓNG ĐÁ',
                    linkTo: '/',
                    icon: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/ball_1122bcd2d0.png'
                },
                {
                    id: 2,
                    title: 'Đua BI',
                    linkTo: '/',
                    icon: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/card_eab7c6e9f1.png'
                },
                {
                    id: 3,
                    title: 'BÓNG Rổ',
                    linkTo: '/',
                    icon: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/basketball_b63861b7ae.png'
                },
                {
                    id: 4,
                    title: 'e-sports',
                    linkTo: '/',
                    icon: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/game_e8e85ba21f.png'
                },
                {
                    id: 5,
                    title: 'Casino',
                    linkTo: '/',
                    icon: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/casino_8d8cd57943.png'
                },
            ]

const headerData = {
    menu: [
        {
            id: 1,
            title: 'lịch trực tiếp',
            linkTo: '/',
            subMenu: subMenuData
        },
        {
            id: 2,
            title: 'lịch thi đấu',
            linkTo: '/',
            subMenu: subMenuData
        },
        {
            id: 3,
            title: 'tỷ lệ kèo',
            linkTo: '/',
            subMenu: subMenuData
        },
        {
            id: 4,
            title: 'kết quả',
            linkTo: '/',
            subMenu: subMenuData
        },
        {
            id: 5,
            title: 'phòng chat',
            linkTo: '/',
            subMenu: subMenuData
        },
        {
            id: 6,
            title: 'tin tức',
            linkTo: '/',
            subMenu: subMenuData
        },
        
    ],
    subNavBar: [
        {
            id: 1,
            title: 'Bảng Tin',
            linkTo: '/',
            icon: 'ph:chat-text-fill'
        },
        {
            id: 2,
            title: 'Reels',
            linkTo: '/',
            icon: 'bi:file-play-fill'
        },
        {
            id: 3,
            title: 'Highlight',
            linkTo: '/',
            icon: 'ph:video-fill'
        },
        {
            id: 4,
            title: 'Tip Kèo',
            linkTo: '/',
            icon: 'teenyicons:message-text-solid'
        },
        {
            id: 5,
            title: 'Phim Ảnh',
            linkTo: '/',
            icon: 'entypo:video'
        },
        {
            id: 6,
            title: 'Truyện Tranh',
            linkTo: '/',
            icon: 'streamline-cyber:book-open-1'
        },
    ],
    profile: [
        {
            id: 1,
            title: 'Trung tâm Tài khoản',
            linkTo: '/',
            icon: 'fa6-solid:user-tie'
        },
        {
            id: 2,
            title: 'Trang cá nhân',
            linkTo: '/',
            icon: 'ic:baseline-home'
        },
        {
            id: 3,
            title: 'Nhiệm vụ',
            linkTo: '/',
            icon: 'lucide:target'
        },
        {
            id: 4,
            title: 'Ví của bạn',
            linkTo: '/',
            icon: 'clarity:wallet-solid'
        },
        {
            id: 5,
            title: 'lịch sử giao dịch',
            linkTo: '/',
            icon: 'streamline-sharp:decent-work-and-economic-growth-remix'
        },
        {
            id: 6,
            title: 'Thoát tài khoản',
            linkTo: '/',
            icon: 'streamline:logout-1-solid'
        },
    ],
}


import { defineEventHandler } from 'h3';
export default defineEventHandler((event) => {
  console.log('API endpoint /api/header was hit at:', new Date().toISOString());

  return headerData;
});