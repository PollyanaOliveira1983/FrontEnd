import "./styles.css";

type Props = {
    text: string;
}

export default function Button({text} : Props) {

    return (
        <div className="button">
            {text}
        </div>
    )
}
