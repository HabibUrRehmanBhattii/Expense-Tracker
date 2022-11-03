import "./Card.css"

export default function Card(props) {
    const classes = "card " + props.className

    // props.children is a special property that is available on every component.
    // It is a reference to the content between the opening and closing tag of the component.
    return (
        <div className={classes}>{props.children}</div>
    )
}