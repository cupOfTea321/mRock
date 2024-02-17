export const sliderSwitch = (index) => {
    let imageStyle = {}
    let textStyle = {}
    switch (index) {
        case 1:
            imageStyle = {
                marginTop: '61px',
                width: '277px',
                height: '303px',
                borderRadius: '25px'
            }
            break
        case 2:
            imageStyle = {
                marginTop: '34px',
                width: '254.07px',
                height: '269.8px',
                clipPath: 'polygon(5% 0, 95% 0%, 100% 100%, 0 100%)'

            }
            textStyle = {
                transform: 'rotate(3.21deg)'
            }
            break
        case 3:
            imageStyle = {
                marginTop: '63px',
                width: '222.59px',
                height: '238px',
                borderRadius: '25px',


            }
            textStyle = {
                transform: 'rotate(-5.32deg)'
            }
            break
        default:
            imageStyle = {
                marginTop: '24px',
                width: '279.21px',
                height: '299.58px',
                clipPath: 'polygon(0 0, 90% 0%, 100% 100%, 0 100%)'


            }
            textStyle = {
                transform: 'rotate(-2.36deg)'
            }
    }
    return [imageStyle, textStyle]
}
