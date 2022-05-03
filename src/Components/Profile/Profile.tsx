import React from "react";
import styles from "./styles.module.css";
import Sprite from "../../Assets/sprite.png";

const Profile = () => {
    const charInfo = [
        { label: "Name", value: "Shweyin Than" },
        { label: "Age", value: "24" },
        { label: "Country", value: "Canada" },
        { label: "Speaks", value: "English, Japanese" },
        { label: "Hobbies", value: "Games, Cycling, Guitar" },
        { label: "Favourite Show", value: "Hunter x Hunter" },
        { label: "Passive Skill", value: "100% calm" },
    ];

    const charInfo2 = [
        { label: "Weapon", value: "Umbrella" },
        { label: "Attack Power", value: "MAX" },
        { label: "Discipline", value: "64" },
        { label: "Friendliness", value: "MAX" },
        { label: "Intelligence", value: "65" },
        { label: "Laziness", value: "MAX" },
        { label: "Wisdom", value: "66" },
    ];

    return (
        <div className={styles.profilePage}>
            <div className={styles.card}>
                <div className={styles.character}>
                    <div className={styles.name + " " + styles.header}>
                        Shweyin Than
                    </div>
                    <img src={Sprite} />
                    <div className={styles.status}>
                        <div className={styles.hp}>
                            HP: <span>100 / 100</span>
                        </div>
                        <div className={styles.mp}>
                            MP: <span>100 / 100</span>
                        </div>
                        <div className={styles.charClass}>
                            <span className={styles.level}>
                                Lv. {new Date().getFullYear() - 1998}
                            </span>
                            Software Developer
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.charInfo + " " + styles.card}>
                <div className={styles.header}>Stats</div>
                <form>
                    <div className={styles.column}>
                        {charInfo.map((item, index) => (
                            <div
                                className={styles.stat}
                                key={`${item.label}-${index}`}
                            >
                                <label>{item.label}</label>
                                <input disabled value={item.value} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        {charInfo2.map((item, index) => (
                            <div
                                className={styles.stat}
                                key={`${item.label}-${index}`}
                            >
                                <label>{item.label}</label>
                                <input disabled value={item.value} />
                            </div>
                        ))}
                    </div>
                </form>
                <div className={styles.header}>Skills</div>
                <div style={{ opacity: 0.5, padding: "2em" }}>
                    {" "}
                    Coming Soon...
                </div>
            </div>
        </div>
    );
};

export default Profile;
