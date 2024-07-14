import { useState } from 'react';
import Dropdown from './dropdown';

const Menu = () => {
    const [open,setOpen]=useState(false)
    console.log(open);
    return (
        <div className='relative'>
            <button onClick={()=>setOpen(!open)} className=' active:bg-slate-100 focus:bg-slate-300 rounded p-4'> دیوار من </button>
            {open===true && <Dropdown setOpen={setOpen} />}
        </div>
    );
}

export default Menu;
