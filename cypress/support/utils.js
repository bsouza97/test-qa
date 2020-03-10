module.exports = {
    getCurrentDay: (date) => {
        const today = String(date.getDate())
        const day = today <= 9 ? '0' + today : today
    
        return day
    },
    getCurrentMonthName: (date) => {
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        const month = String(date.getMonth())
        
        return months[month]
    }
}