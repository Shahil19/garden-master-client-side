import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    const email = user?.email

    useEffect(() => {
        if (email) {
            fetch(`https://whispering-mountain-30344.herokuapp.com/admin/${email}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    setAdminLoading(false)
                    setAdmin(data.admin)
                })
        }
    }, [user, email])

    return [admin, adminLoading]
}

export default useAdmin;