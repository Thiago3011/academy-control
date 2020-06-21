module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
        
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
                age = age - 1
            }
    
        return age
    },

    date(timestamp) {

        // O html espera uma data no formato - yyyy-MM-dd
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)


        return {
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        } 
    },

    blood(bloodtype) {

        switch (bloodtype) {
            case "A0":
                bloodtype = "A+"
                break;
            case "A1":
                bloodtype = "A-"
                break;
            case "B0":
                bloodtype = "B+"
                break;
            case "B1":
                bloodtype = "B-"
                break;
            case "AB0":
                bloodtype = "AB+"
                break;
            case "AB1":
                bloodtype = "AB-"
                break;
            case "O0":
                bloodtype = "O+"
                break;
            case "O1":
                bloodtype = "O-"
                break;
        
            default:
                break;
        }

        return bloodtype
    }
}