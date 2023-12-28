import { FaRegCircle, FaTimes, FaPen  } from "react-icons/fa";

function Icon ({ name }) {
    let iconClasses = "text-[#8BE8E5]";

    if(name == "O") {
        return <FaRegCircle className={iconClasses} />
    } else if(name == "X") {
        return <FaTimes className={iconClasses}/>
    }else {
        return <FaPen className={iconClasses}/>
    }
}

export default Icon;