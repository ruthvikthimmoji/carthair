import { FaBeer, FaTypo3, FaUser, FaUserAlt, FaUserEdit, HiUserAdd } from 'react-icons/hi';
export default function AddBtn(){
    return(
       <div className='text-2xl'>
        <button className='border px-6 py-2 rounded-lg hover:text-black hover:bg-white'>
        <HiUserAdd/>
        </button>
       </div> 
    )
}