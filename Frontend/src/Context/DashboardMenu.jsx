import reportIcon from '../assets/img/report.png';
import companyIcon from '../assets/img/company.png';
import filterIcon from '../assets/img/filter.png';
import userIcon from '../assets/img/user.png';
//import settingIcon from '../assets/img/settings.png';

export const dashboardMenu = [
    {
        id: 1,
        title: 'Instrumentos',
        icon: filterIcon,
        url: '/instruments',
    },
    {
        id: 2,
        title: 'Empresas',
        icon: companyIcon,
        url: '/companies',
    },
    {
        id: 3,
        title: 'Reportes SSIB',
        icon: reportIcon,
        url: '/reportssid',
    },
    {
        id: 4,
        title: 'Reportes DIB',
        icon: reportIcon,
        url: '/reportdib',
    },
    {
        id: 5,
        title: 'Usuarios',
        icon: userIcon,
        url: '/users',
    }
];

export const adminMenu = [
    {
        id: 1,
        title: 'Instrumentos',
        icon: filterIcon,
        url: '/instruments',
    },
    {
        id: 2,
        title: 'Empresas',
        icon: companyIcon,
        url: '/companies',
    },
    {
        id: 3,
        title: 'Reportes SSIB',
        icon: reportIcon,
        url: '/reportssid',
    },
    {
        id: 5,
        title: 'Usuarios',
        icon: userIcon,
        url: '/users',
    }
];

export const dajon = "https://verreti-server-production.up.railway.app";
//export const dajon = "http://localhost:2000";
