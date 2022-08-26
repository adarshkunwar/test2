import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import {useState} from 'react'


function App() {

  const [tab, settab] = useState('login');
  let activeTab;


  if (tab === 'login') activeTab = <Login/>
  if(tab === 'signUp') activeTab = <SignUp/>
  return (
      <div className=' h-screen bg-neutral-300 '>
        

        
        <div className='flex flex-col justify-center items-center h-screen'>


        {activeTab}
        <div className='flex justify-end w-96 mr-8 mt-4  text-black'>
          <button className={`px-3 py-2  bg-blue-500 rounded-2xl hover:mt-1 hover:shadow-xl transition-all ${tab === 'login' && ' hidden'} `} onClick={()=>settab('login')}>Already Account? login</button>
          <button className={`px-3 py-2 bg-blue-500 rounded-2xl hover:mt-1 hover:shadow-xl transition-all ${tab === 'signUp' && 'hidden'} `} onClick={()=>settab('signUp')}> No Account? signUp</button>
        </div>
        </div>
      </div>
    );
}

export default App;
