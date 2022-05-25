const FormCheckbox= ({ labelText, name, value, onChange, handleChange }) => {
  return (
    <div className='form-row form-checkbox-container'>
      <label htmlFor={name} className='form-label'>
        <input type="checkbox" checked={value} onChange={handleChange} className='form-checkbox'/>
        {labelText || name}
      </label>
    </div>
  );
};

export default FormCheckbox;

// import { FormRow, FormRowSelect, Alert, FormCheckbox } from '../components';
// import Wrapper from '../assets/wrappers/DashboardFormPage';
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';

// export default function AddUserForm(props) {
//   const initialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     approved: '',
//     usersDb: '',
//     volunteersDb: '',
//     isActive: '',
//     isViewer: '',
//     isEditor: '',
//     isAdmin: '',
//   };
//   const navigate = useNavigate();
//   const [userInfo, setUserInfo] = useState(initialState)
//   const [checked, setChecked] = useState(false)
//   // const {
    
//   // } = useAppContext();

//   const handleCheckbox = (e) => {
// setChecked(!checked)
//   }

//   const handleChange = (e) => {
//     handleCheckbox();
//     setUserInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     async function addUser() {
//       try {
//         const response = await axios.post('http://localhost:8000/api/v1/auth/addUser', userInfo);
//         // navigate(`/cruds/${response.data._id}`);
//         console.log(userInfo);
//       } catch (error) {
//         console.log('error', error);
//       }
//     }
//     addUser();
//   }
  
//   const handleCancel = (e) => {
//     navigate('/')
//   }
//   return (
//     <Wrapper>
//       <form className='form' onSubmit={handleSubmit}>
//         <h3>{'Add new user'} </h3>
//         {/* {showAlert && <Alert />} */}

//         {/* name */}
//         <div className='form-center'>
//           <FormRow
//             placeholder='Enter first name'
//             type='text'
//             name='firstName'
//             labelText={'First name'}
//             value={userInfo.firstName}
//             handleChange={handleChange}
//           />
//           <FormRow
//             placeholder='Enter last name'
//             type='text'
//             name='lastName'
//             labelText={'Last name'}
//             value={userInfo.lastName}
//             handleChange={handleChange}
//           />
//           {/* email */}
//           <FormRow
//             placeholder='jane.doe@gmail.com'
//             type='email'
//             name='email'
//             labelText={'Email'}
//             value={userInfo.email}
//             handleChange={handleChange}
//           />
//           {/* password */}
//           <FormRow
//             placeholder='********'
//             type='password'
//             name='password'
//             labelText={'Password'}
//             value={userInfo.password}
//             handleChange={handleChange}
//           />

         

//           <div className='btn-container'>
//             <button className='btn btn-block submit-btn' type='submit'>
//               submit
//             </button>
//             <button className='btn btn-block clear-btn'>clear</button>
//           </div>
//         </div>
//       </form>
//     </Wrapper>
//   );
// }
