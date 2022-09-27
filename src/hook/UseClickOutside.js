import { useEffect, useRef } from "react"

const useClickOutsite = (handleClickOutsite) => {
    const element = useRef()
    useEffect(() => {
        console.log("Hook");
        
        const handleClickOutsiteElement = (e) => {
            if(!element.current){
                return
            }
            if(!element.current.contains(e.target)){
                handleClickOutsite()
            }
        }
        
        document.addEventListener("mousedown", handleClickOutsiteElement)
        return () => {
            document.removeEventListener("mousedown", handleClickOutsiteElement)
        }

    }, [handleClickOutsite])

    return element;
}

export default useClickOutsite