import { getTimeInterval } from '../../scripts/utils/handleTime'
import { fetchSocial, fetchSiteInfo } from '@/api/home'

/**
 * @type {import('vuex').Module}
 */
// 略:后台获取系统运行时间
const runAt = '1589878800000'
let timer = null
const state = {
  users: 'dushenyan',
  loading: false,
  runTimeInterval: '',
  socials: '',
  websiteInfo: '',
}
const mutations = {
  SET_LOADING: (state, v) => {
    state.loading = v
  },
  SET_SOCIALS: (state, v) => {
    state.socials = v
  },
  SET_SITE_INFO: (state, v) => {
    state.websiteInfo = v
  },
  GET_RUNTIME_INTERVAL: state => {
    if (!timer || !state.runTimeInterval) {
      clearInterval(timer)
      timer = setInterval(() => {
        state.runTimeInterval = getTimeInterval(runAt)
      }, 1000)
    }
  },
}
const actions = {
  setLoading: ({ commit }, v) => {
    commit('SET_LOADING', v)
  },
  initComputeTime: ({ commit }) => {
    commit('GET_RUNTIME_INTERVAL')
  },
  getSiteInfo: ({ commit, state }) => {
    return new Promise(resolve => {
      if (state.websiteInfo) {
        resolve(state.websiteInfo)
      } else {
        fetchSiteInfo()
          .then(res => {
            const data = res.data || {}
            commit('SET_SITE_INFO', data)
            resolve(data)
          })
          .catch(() => {
            resolve({})
          })
      }
    })
  },
  getSocials: ({ commit, state }) => {
    return new Promise(resolve => {
      if (state.socials) {
        resolve(state.socials)
      } else {
        fetchSocial()
          .then(res => {
            const data = res.data || []
            commit('SET_SOCIALS', data)
            resolve(data)
          })
          .catch(() => {
            resolve([])
          })
      }
    })
  },
}

const getters = {
  loading: state => state.loading,
  runTimeInterval: state => state.runTimeInterval,
  notice: state => (state.websiteInfo ? state.websiteInfo.notice : ''),
}

export default {
  state,
  getters,
  mutations,
  actions,
}
