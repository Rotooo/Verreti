import reportIcon from '../assets/img/report.png';
import companyIcon from '../assets/img/company.png';
import filterIcon from '../assets/img/filter.png';
import userIcon from '../assets/img/user.png';
//import settingIcon from '../assets/img/settings.png';

export const dashboardMenu = [
    {
        id: 1,
        title: 'Reportes SSIB',
        icon: reportIcon,
        url: '/reportssid',
    },
    {
        id: 2,
        title: 'Reportes DIB',
        icon: reportIcon,
    },
    {
        id: 3,
        title: 'Empresas',
        icon: companyIcon,
        url: '/companies',
    },
    {
        id: 4,
        title: 'Instrumentos',
        icon: filterIcon,
        url: '/instruments',
    },
    {
        id: 5,
        title: 'Usuarios',
        icon: userIcon,
        url: '/users',
    }
];

export const dajon = "https://verreti-server-production.up.railway.app";