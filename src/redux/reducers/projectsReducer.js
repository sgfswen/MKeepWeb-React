import {
    GET_PROJECTS_LIST_STARTED,
    GET_PROJECTS_LIST_FINISHED,
    GET_PROJECTS_LIST_FAILED,
    CURRENT_PROJECT_CHANGED
} from 'redux/actions/projectsActions';

/**
 *  {
 *      fetching: {
 *          inProgress: false,
 *          error: null,
 *          lastUpdate: '2017-01-19T04:36:19.867Z'
 *      },
 *      currentProject: '588041f02f8fb735093dac5f',
 *      data: {
 *          588041f02f8fb735093dac5f: {
 *              ...
 *          }
 *      }
 *  }
 */
const initialState = {
    fetching: {
        inProgress: false,
        error: null,
        lastUpdate: null
    },
    currentProject: null,
    data: {}
};

export default function (state = initialState, action) {
    const date = (new Date()).toISOString();

    switch (action.type) {
        case GET_PROJECTS_LIST_STARTED:
            return Object.assign({}, state, {
                fetching: Object.assign({}, state.fetching, {
                    inProgress: true
                })
            });
        case GET_PROJECTS_LIST_FINISHED:
            return getNewStateByProjectsList(state, action.projectsList, date);
        case GET_PROJECTS_LIST_FAILED:
            return Object.assign({}, state, {
                fetching: Object.assign({}, state.fetching, {
                    inProgress: false,
                    error: action.error,
                    lastUpdate: date
                })
            });
        case CURRENT_PROJECT_CHANGED:
            return Object.assign({}, state, {
                currentProject: action.project._id
            });
        default:
            return state;
    }
}

function getNewStateByProjectsList(currentState, projectsList, date) {
    const newState = Object.assign({}, currentState, {
        fetching: Object.assign({}, currentState.fetching, {
            inProgress: false,
            lastUpdate: date
        }),
        data: {}
    });

    for (const project of projectsList) {
        newState.data[project._id] = Object.assign({}, project);
    }

    return newState;
}
