import { CustomNavbar, BigSidebar, SmallSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/HelpArticle';
import profile from '../../assets/images/profile.gif';
import sandbox from '../../assets/images/sandbox.gif';
import addRecord from '../../assets/images/add-record.gif';
import editRecord from '../../assets/images/edit-record.gif';
import pageScroll from '../../assets/images/scroll.gif';
import deleteRecord from '../../assets/images/delete-record.gif';
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
              <span className='emphasis'>admin </span>
              privileges no matter which role you've been assigned.
            </h5>
            <div className='gif-div'>
              <img
                src={sandbox}
                alt='navigate to sandbox gif'
                className='gif'
              />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Scrolling</h3>
            <h5>
              <span className='emphasis'>All records </span>are located on one
              single page. If you need to{' '}
              <span className='emphasis'>quickly scroll </span>to the{' '}
              <span className='emphasis'>top </span> or{' '}
              <span className='emphasis'>bottom </span> of a page, you can click
              on the <span className='emphasis'>arrow icons </span>located at
              the <span className='emphasis'>right top and right bottom </span>
              sides of your screen.
            </h5>
            <div className='gif-div'>
              <img src={pageScroll} alt='add new record gif' className='gif' />
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
              mind, click on <span className='emphasis'>Cancel</span>. After
              adding a new record, you'll be{' '}
              <span className='emphasis'>redirected</span> back to the
              database's main page, which displays all records in{' '}
              <span className='emphasis'>ascending</span> order based on the
              date that the record was created.{' '}
              <span className='emphasis'>
                To see your new record, just scroll to the bottom of the page
              </span>
              .
            </h5>
            <div className='gif-div'>
              <img src={addRecord} alt='add new record gif' className='gif' />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Editing an existing record</h3>
            <h5>
              To <span className='emphasis'>edit an existing record</span>,
              start by navigating to the record and clicking on the{' '}
              <span className='emphasis'>Edit button</span> located near the
              bottom of the record. The edit form will be{' '}
              <span className='emphasis'>pre-populated</span> with the record's
              current information.{' '}
              <span className='emphasis'>
                Update only the fields that you wish to change
              </span>
              . When you're done, just click on{' '}
              <span className='emphasis'>Submit</span>—or if you've changed your
              mind, click on <span className='emphasis'>Close</span>. Just like
              adding a new record, you'll be{' '}
              <span className='emphasis'>redirected</span> back to the
              database's main page, which displays all records in{' '}
              <span className='emphasis'>ascending </span>
              order based on the date that the record was created. This will be
              updated soon, but{' '}
              <span className='emphasis'>
                to see your edited record, you can use the search option to
                search for the record by first name, last name, or email
              </span>
              . We'll go over searching and filtering at the end of this
              walkthrough.
            </h5>
            <div className='gif-div'>
              <img
                src={editRecord}
                alt='edit existing record gif'
                className='gif'
              />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Deleting a record</h3>
            <h5>
              To <span className='emphasis'>delete a record</span>, start by
              navigating to the record and clicking on the{' '}
              <span className='emphasis'>Delete button</span> located near the
              bottom of the record. Upon{' '}
              <span className='emphasis'>clicking Delete</span>, you'll be{' '}
              <span className='emphasis'>prompted to answer </span>whether you
              really want to delete the record.{' '}
              <span className='emphasis'>
                Clicking on the Delete button will permanently and instantly
                delete the record. There's no going back!
              </span>
            </h5>
            <div className='gif-div'>
              <img
                src={deleteRecord}
                alt='delete existing record gif'
                className='gif'
              />
            </div>
            <hr />
            <br />
            <h3 className='r2b-blue'>Searching and filtering data</h3>
            <h5>
              If you're looking for a{' '}
              <span className='emphasis'>specific record</span>, you can find it
              quickly by <span className='emphasis'>searching</span>. To{' '}
              <span className='emphasis'>search </span>for a specific record,
              enter either into the search bar the{' '}
              <span className='emphasis'>
                first name, last name, or email address{' '}
              </span>
              tied to that record. As you type, you'll begin to see{' '}
              <span className='emphasis'>
                search results that narrow down in real-time
              </span>. If you need to{' '}
              <span className='emphasis'>clear </span>your results, just click
              on <span className='emphasis'>Clear</span>. If you're looking for {' '}
              <span className='emphasis'>several records </span>that share
              something in common, you can{' '}
              <span className='emphasis'>filter </span>through the data to see
              multiple records at once. Each database will have different filtering options based on the data it holds.
            </h5>
            <div className='gif-div'>
              <img
                src={deleteRecord}
                alt='delete existing record gif'
                className='gif'
              />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
