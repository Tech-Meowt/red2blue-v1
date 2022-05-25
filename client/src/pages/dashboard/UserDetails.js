import Wrapper from '../../assets/wrappers/AllDbUsers';
import JobsWrapper from '../../assets/wrappers/Job';

export default function UserDetails({ userInfos, editHandler, deleteHandler }) {
  const { _id, firstName, lastName, email, approved, usersDb, volunteersDb, isActive, isEditor, isViewer, isAdmin } = userInfos
  // const [userDetails, setUserDetails] = useState({})
  // const navigate = useNavigate();
  // const { _id } = useParams();

  // useEffect(
  //   function () {
  //     async function getUserById() {
  //       try {
  //         const response = await axios.get(`http://localhost:8000/api/v1/auth/${_id}`);
  //         setUserDetails(response.data);
  //       } catch (error) {
  //         console.log('error', error);
  //       }
  //     }
  //     getUserById();
  //   },
  //   [props]
  // );

  return (
    <div className='jobs' key={_id}>
      <JobsWrapper>
        <header>
          <div className='main-icon'>{firstName.charAt(0)}</div>
          <div className='info'>
            <h5>
              {firstName} {lastName}
            </h5>
            <p className='lowercase'>{email}</p>
          </div>
        </header>
        <div className='content'>
          <div className='content-center'>
            <div>
              Approval Status: {approved ? 'approved' : 'waiting for approval'}
            </div>
            <div>
              User Accounts Database: {usersDb ? 'access' : 'no access'}
            </div>
            <div>
              Volunteers Database: {volunteersDb ? 'access' : 'no access'}
            </div>
            <div>Account Status: {isActive ? 'active' : 'deactivated'}</div>
            <div>
              Role: {''}
              {isAdmin === true
                ? 'admin'
                : isEditor === true
                ? 'editor'
                : 'viewer'}
            </div>
          </div>
          <footer>
            <button className='btn edit-btn' name={_id} onClick={editHandler}>
              Edit
            </button>
            <button
              type='button'
              className='btn delete-btn'
              name={_id}
              onClick={deleteHandler}
            >
              Delete
            </button>
          </footer>
        </div>
      </JobsWrapper>
    </div>
  );
}
