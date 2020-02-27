const initalState = {
    loading: false
}

const asyncActionStarted = (state) => {
    return {
        ...state,
        loading: true
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false
    }
}