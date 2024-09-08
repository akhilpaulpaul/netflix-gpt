import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '../utils/firebase';
import { LOGO } from '../utils/asset-urls';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    })
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className={`${user ? 'flex items-center justify-between bg-black text-white': 'absolute'}`}>
        <img src={LOGO} alt="Logo" className="w-40" />
        { user && (
          <div className='flex items-center gap-2'>
            <button 
              className="rounded-lg bg-purple-600 text-white p-2 font-semibold"
              onClick={handleGptToggle}
            >
              { isGptSearch ? 'Home' : 'GPT Search' }
            </button>
            <span className='font-medium mr-4 cursor-pointer' onClick={handleSignOut}>{ user?.displayName }(Sign out)</span>
          </div>
        )}
    </div>
  )
}

export default Header