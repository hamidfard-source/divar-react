import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { eraseCookie, getCookie } from 'utils/cookie';
import { useGetQueryData } from 'utils/getQueryData';
import { useOutsideModal } from 'src/hooks/useOutsidemodal';

import Login from './login';

const Dropdown = ({ setOpen }) => {
    const dropRef = useRef(null)
    const navigate = useNavigate()

    // taking Cookie for showing conditional logout BTN and erase cookie
    const token = getCookie('accessToken')

    // taking role -> [Profile] data
    const data = useGetQueryData("profile")

    // close dropDown when clicked outside of box
    useOutsideModal(dropRef, setOpen)
    return (
        <div ref={dropRef} className='absolute bg-slate-100 p-3 w-60 top-16 shadow-lg rounded-sm *:rounded-md border-2 border-slate-200 flex flex-col  items-baseline divide-y gap-1'>
            {token ?
                data?.data.role === "ADMIN" ?
                    <Link className='w-full h-full p-2' to={'/admin'}>پنل ادمین</Link>
                    :
                    <Link className='w-full h-full p-2' to={'/dashboard'}>داشبورد</Link>
                : <Login />
            }


            {token && <button className='w-full h-full p-2 flex justify-start' onClick={() => { eraseCookie(); navigate(0) }}>
                <img
                    className='inline w-6 text-slate-200 h-6  ml-1' src='logout.svg' alt="logout" />
                <span>خروج</span>
            </button>
            }
        </div>
    );
}


export default Dropdown;
