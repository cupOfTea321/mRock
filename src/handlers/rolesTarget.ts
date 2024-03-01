
export const rolesTarget = (role) => {
    switch (role) {
        case 'VC':
            role = 'Вокалист'
            break
        case 'GT':
            role = 'Гитарист'
            break
        case 'BS':
            role = 'Басист'
            break
        default:
            role = 'Барабанщик'
    }
    return role
}
export const setRolesTarget = (role) => {
    switch (role) {
        case 'Вокалист':
            role = 'VC'
            break
        case 'Гитарист':
            role = 'GT'
            break
        case 'Басист':
            role = 'BS'
            break
        default:
            role = 'DR'
    }
    return role
}
