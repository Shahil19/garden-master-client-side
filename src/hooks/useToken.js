import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        if (email) {
            fetch(`https://whispering-mountain-30344.herokuapp.com/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify({ email: email }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }, [user])


    return [token]
}

export default useToken