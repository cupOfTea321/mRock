
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
