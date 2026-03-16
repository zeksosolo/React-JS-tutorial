export default function Todo({kata, isCompleted, isDeleted = false }) {
    if (isDeleted) {
        return null
    } else if (isCompleted) {
        return (
            <li>
               <del>{kata}</del>
            </li>
        )
    } else {
        return(
            <li>
                {kata}
            </li>
        )
    }
}
