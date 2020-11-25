import api from './data-sources/api'

const todayActivity = () => {
    return api.dashboard.mediaActivity.today
}

export default todayActivity