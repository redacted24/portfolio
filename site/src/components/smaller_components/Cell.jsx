const Cell = ({title, description, skills, link, bookmarked = false}) => {
    const totalSkills = skills.join(', ')
    return (
    <div className={bookmarked ? "cell2" : "cell"}>
        <a href={link}><span className="blocklink"></span></a>

        <div className="celltext">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={"cellSkills redGlow gotham" + (totalSkills.length > 30 ? " font12px spaceEvenly" : "")}>
            {totalSkills}
        </div>
    </div>
    )
}

export default Cell