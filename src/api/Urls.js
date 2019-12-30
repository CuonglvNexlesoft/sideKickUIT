import BuildUtils from '../utils/BuildUtils';

export const getURL = (url, splitSign = ':') => BuildUtils.build.serverSchema + splitSign + url + '/' + BuildUtils.build.apiPrefix;

export const SERVER_URL = getURL(BuildUtils.build.serverHost, '://');

export default {
    baseUrl: SERVER_URL,

    products: {
        getProducts: 'products/get-products',
    },
    // remove if dont need
    movies: {
        getMovieDetail: 'movies/movie-detail/{movie_id}',
    },
    clientDetail: {
        mainDetails: 'clientdetail/main-details/{client_id}',
    },
    settings: {
        statusColors: 'settings/get-status-colors',
    },
    drivers: {
        getDrivers: 'members',
        addDriver: 'members/driver',
        editDriver: 'members/detail',
        deleteDriver: 'members/{memberId}/delete'
    },
    ship: {
        addShip: 'trips',
        trips: 'trips',
        getShipHistories: 'trips',
        status: 'trips/status',
        getStatus: 'trips/getstatus',
    },

    logginUser: "User/Login",
    logoutUser: "User/Logout"
    ,signUp: "User/Signup"
    ,updateUserInfo: "User/UpdateUserProfile"
    ,getClassList: "LopHoc/GetDanhSachLopHoc"
};
