import {SidebarExample} from '../../sideBar';
import Navbar from '../../navbar';
import Footer from '../../footer';

export default function layout ({ children }) {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* <div className='col-span-2 border-end'>
            <SidebarExample  className="h-full"/>
            </div> */}
            <div className='col-span-12'>
            <div className='shadow-black/10 shadow-sm position-sticky top-0 z-50 bg-white'>
            <Navbar/>
            </div>
            <main className="">
                {children}
            </main>
            <Footer />
            </div>
        </div>
    );
}