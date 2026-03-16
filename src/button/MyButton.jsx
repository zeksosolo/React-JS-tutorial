export default function MyButton ({kata, onSmash}) {
    return (
        <button onClick={onSmash}>{kata}</button>
    )
}