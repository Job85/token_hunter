import TokenHuntr from './index'

export const LogInUser = async (data) => {
    try {
        const res = await TokenHuntr.post('/auth/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (data) => {
    try {
        const res = await TokenHuntr.post('/auth/register', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CheckSession = async () => {
    try {
        const res = await TokenHuntr.get('/auth/session')
        return res.data
    } catch (error) {
        throw error
    }
}