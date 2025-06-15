const users = [
    {
        email: 'mhb@gmail.com',
        password: '1234'
    },
    {
        email: 'mhc@gmail.com',
        password: '1234'
    },
    {
        email: 'mhd@gmail.com',
        password: '1234'
    },
]

export const getUserByEmail = (email) => {
    const found = users.find(user=> user.email === email)
    return found
}