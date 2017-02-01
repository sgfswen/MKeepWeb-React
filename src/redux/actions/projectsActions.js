import { ProjectsRepository } from 'repositories';

const repository = new ProjectsRepository();

export const GET_PROJECTS_LIST_STARTED = 'GET_PROJECTS_LIST_STARTED';
export const GET_PROJECTS_LIST_FINISHED = 'GET_PROJECTS_LIST_FINISHED';
export const GET_PROJECTS_LIST_FAILED = 'GET_PROJECTS_LIST_FAILED';
export const CURRENT_PROJECT_CHANGED = 'CURRENT_PROJECT_CHANGED';

export function getProjectsList() {
    return (dispatch) => {
        dispatch(getProjectsListStart());

        repository.getList()
            .then((projects) => {
                dispatch(getProjectsListFinished(projects));

                if (projects.length) {
                    dispatch(currentProjectChanged(projects[0]));
                }
            })
            .catch((error) => {
                dispatch(getProjectsListFailed(error));
            });
    };
}

export function currentProjectChanged(project) {
    return {
        type: CURRENT_PROJECT_CHANGED,
        project
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
