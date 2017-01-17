import ProjectsRepository from 'repositories/ProjectsRepository';

const repository = new ProjectsRepository();

export const GET_PROJECTS_LIST_STARTED = 'GET_PROJECTS_LIST_STARTED';
export const GET_PROJECTS_LIST_FINISHED = 'GET_PROJECTS_LIST_FINISHED';
export const GET_PROJECTS_LIST_FAILED = 'GET_PROJECTS_LIST_FAILED';

/* Get projects list */
export function getProjectsList() {
    return (dispatch) => {
        dispatch(getProjectsListStart());

        repository.getList()
            .then((projectsList) => {
                dispatch(getProjectsListFinished(projectsList));
            })
            .catch((error) => {
                dispatch(getProjectsListFailed(error));
            });

        return {};
    };
}

function getProjectsListStart() {
    return {
        type: GET_PROJECTS_LIST_STARTED
    };
}

function getProjectsListFinished(projectsList) {
    return {
        type: GET_PROJECTS_LIST_FINISHED,
        projectsList
    };
}

function getProjectsListFailed(data) {
    return {
        type: GET_PROJECTS_LIST_FAILED,
        error: data.error
    };
}
