import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 font-poppins'>
            <Outlet />
        </div>
    );
};

export default MainLayout;