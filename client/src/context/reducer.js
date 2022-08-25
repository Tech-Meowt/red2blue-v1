import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  ADMIN_UPDATE_USER_BEGIN,
  ADMIN_UPDATE_USER_SUCCESS,
  ADMIN_UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  UNAUTHORIZED
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === UNAUTHORIZED) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    }
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: '',
      userLocation: '',
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
    // eslint-disable-next-line
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    }

    if (action.type === ADMIN_UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true };
    }
    if (action.type === ADMIN_UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        id: action.payload._id,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Updated!',
      };
      if (action.type === ADMIN_UPDATE_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          id: action.payload._id,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
      if (action.type === HANDLE_CHANGE) {
        return { ...state, [action.payload.name]: action.payload.value };
      }
      if (action.type === CLEAR_VALUES) {
        const initialState = {
          isEditing: false,
          editDbUserId: '',
          name: '',
          email: '',
          approved: '',
          password: '',
          usersDb: '',
          volunteersDb: '',
          isActive: '',
          role: '',
          status: 'pending',
        };

        return {
          ...state,
          ...initialState,
        };
      }
      if (action.type === CREATE_USER_BEGIN) {
        return { ...state, isLoading: true };
      }
      if (action.type === CREATE_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'New User Created!',
        };
      }
      if (action.type === CREATE_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
      if (action.type === CREATE_JOB_BEGIN) {
        return { ...state, isLoading: true };
      }

      if (action.type === CREATE_JOB_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'New Job Created!',
        };
      }
      if (action.type === CREATE_JOB_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
      if (action.type === GET_JOBS_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
      }
      if (action.type === GET_JOBS_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          jobs: action.payload.jobs,
          totalJobs: action.payload.totalJobs,
          numOfPages: action.payload.numOfPages,
        };
      }
      if (action.type === SET_EDIT_JOB) {
        const dbUser = state.dbUsers.find(
          (dbUser) => dbUser._id === action.payload.id
        );
        const {
          _id,
          name,
          email,
          password,
          approved,
          usersDb,
          volunteersDb,
          isActive,
          role,
        } = dbUser;
        return {
          ...state,
          isEditing: true,
          editJobId: _id,
          name,
          email,
          password,
          approved,
          usersDb,
          volunteersDb,
          isActive,
          role,
        };
      }
      if (action.type === DELETE_JOB_BEGIN) {
        return { ...state, isLoading: true };
      }
      if (action.type === EDIT_JOB_BEGIN) {
        return {
          ...state,
          isLoading: true,
        };
      }
      if (action.type === EDIT_JOB_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'Job Updated!',
        };
      }
      if (action.type === EDIT_JOB_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
      if (action.type === SHOW_STATS_BEGIN) {
        return {
          ...state,
          isLoading: true,
          showAlert: false,
        };
      }
      if (action.type === SHOW_STATS_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          stats: action.payload.stats,
          monthlyApplications: action.payload.monthlyApplications,
        };
      }
      if (action.type === CLEAR_FILTERS) {
        return {
          ...state,
          search: '',
          searchStatus: 'all',
          searchType: 'all',
          sort: 'latest',
        };
      }
      if (action.type === CHANGE_PAGE) {
        return { ...state, page: action.payload.page };
      }
      throw new Error(`no such action : ${action.type}`);
    }
  }
}

export default reducer;
