import teamMembers from "../../utils/teamMembers";
import "./index.css";

function Team() {

    return (
        <section className="team-section">
            {teamMembers.map((member, index) => (
                <div className="team-member" key={index}>
                <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p>{member.description}</p>
                </div>
                </div>
            ))}
        </section>
    )

}

export default Team;