import { CustomNavbar, BigSidebar, SmallSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/HelpArticle';
import profile from '../../assets/images/profile.gif';
import sandbox from '../../assets/images/sandbox.gif';
import addRecord from '../../assets/images/add-record.gif';
import { useEffect } from 'react';

export default function HelpGettingStarted() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <CustomNavbar title={'Getting Started'} />
          <div className='dashboard-page'>
            <h3 className='r2b-blue'>Editing your profile</h3>
            <h5>
              After you log in to the database for the first time, you should
              visit your <span className='emphasis'>profile</span> page to
              ensure that your information is correct and make any necessary
              edits. Any edits will take effect immediately. As mentioned on the
              profile page, if you edit your{' '}
              <span className='emphasis'>email address</span>, you'll need to
              use that address to <span className='emphasis'>log in</span>.
              Furthermore, you won't be able to edit your{' '}
              <span className='emphasis'>role</span>. If you think that you need
              different permissions—reach out to an admin.
            </h5>
            <div className='gif-div'>
              <img src={profile} alt='edit profile gif' className='gif' />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Accessing your databases</h3>
            <h5>
              The <span className='emphasis'>databases</span> that you have
              access to will vary based on your{' '}
              <span className='emphasis'>role</span>. In this tutorial, we'll
              navigate to the <span className='emphasis'>Sandbox tab</span>
              —which contains a dummy database. While using the{' '}
              <span className='emphasis'>sandbox</span>, you'll have{' '}
              <span className='emphasis'>admin</span>
              privileges no matter which role you've been assigned.
            </h5>
            <div className='gif-div'>
              <img src={sandbox} alt='navigate to sandbox gif' className='gif' />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Adding a new record</h3>
            <h5>
              To <span className='emphasis'>add a new record </span>to a
              database, click on the{' '}
              <span className='emphasis'>Add button</span> underneath the search
              and filter options.{' '}
              <span className='emphasis'>
                Fill out all fields in the format provided.
              </span>
              When you're done, just click on{' '}
              <span className='emphasis'>Submit</span>—or if you've changed your
              mind, just click on <span className='emphasis'>Cancel</span>.
              After adding a new record, you'll be{' '}
              <span className='emphasis'>redirected</span> back to the
              database's main page, which displays all records in{' '}
              <span className='emphasis'>ascending</span>
              order based on the date that the record was created. This will be
              updated soon, but{' '}
              <span className='emphasis'>
                to see your new record, just scroll to the bottom of the page
              </span>
              .
            </h5>
            <div className='gif-div'>
              <img src={addRecord} alt='add new record gif' className='gif' />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
