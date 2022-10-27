//Layouts
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import DichVu from '~/pages/DichVu';
import DLNuocNgoai from '~/pages/DLNuocNgoai';
import DLTrongNuoc from '~/pages/DLTrongNuoc';
import GioiThieu from '~/pages/GioiThieu';
import KieuTourDuLich from '~/pages/KieuTourDuLich';
import LichKhoiHanh from '~/pages/LichKhoiHanh';
import TinTucDuLich from '~/pages/TinTucDuLich';
import TourDuLichHe from '~/pages/TourDuLichHe';
import UpLoad from '~/pages/UpLoad';

// không cần đăng nhập khách vẫn có thể xem
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/DichVu', component: DichVu },
    { path: '/DLNuocNgoai', component: DLNuocNgoai },
    { path: '/DLTrongNuoc', component: DLTrongNuoc },
    { path: '/GioiThieu', component: GioiThieu },
    { path: '/KieuTourDuLich', component: KieuTourDuLich },
    { path: '/LichKhoiHanh', component: LichKhoiHanh },
    { path: '/TinTucDuLich', component: TinTucDuLich },
    { path: '/TourDuLichHe', component: TourDuLichHe },
    { path: '/UpLoad', component: UpLoad, layout: HeaderOnly },
];
// cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
