import React, { useState } from "react";
import styles from "./styles.module.css";
import Sprite from "../../Assets/sprite.png";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { scaleCorrectors } from "framer-motion/types/projection/styles/scale-correction";

const Profile = () => {
    const charInfo = [
        { label: "Name", value: "Shweyin Than" },
        { label: "Weapon", value: "Umbrella" },
        { label: "Age", value: "24" },
        { label: "Attack Power", value: "MAX" },
        { label: "Country", value: "Canada" },
        { label: "Stamina", value: "32" },
        { label: "Speaks", value: "English, Japanese" },
        { label: "Friendliness", value: "MAX" },
        {
            label: "Hobbies",
            value: "Games, Anime, Cycling, Guitar",
        },
        { label: "Intelligence", value: "43" },
        { label: "Favourite Show", value: "Hunter x Hunter" },
        { label: "Laziness", value: "MAX" },
        {
            label: "Passive Skill",
            value: "100% calm - Able to stay calm in situations of high duress",
        },
        { label: "Wisdom", value: "66" },
    ];

    const skills = [
        { title: "Frontend", value: 80, color: "#3a3ae1", id: "frontend" },
        { title: "Backend", value: 70, color: "#3e8c3e", id: "backend" },
        { title: "Wordpress", value: 65, color: "#ff2f2f", id: "wordpress" },
    ];

    const [skillDowns, setSkillDowns] = useState({
        frontend: {
            skills: "React, Javascript, HTML, SCSS, TailwindCSS",
            show: false,
        },
        backend: { skills: "C++, Python, Java, Firebase, SQL", show: false },
        wordpress: { skills: "Oxygen", show: false },
    });

    return (
        <div className={styles.profilePage}>
            <div className={styles.top}>
                <div className={styles.cardShrink}>
                    <div className={styles.character}>
                        <div className={`${styles.name} ${styles.header}`}>
                            Shweyin Than
                        </div>
                        <img
                            className={styles.spriteImg}
                            src={Sprite}
                            alt="Shweyin Than Character Sprite"
                        />
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

                <div className={`${styles.charInfo} ${styles.card}`}>
                    <div className={styles.header}>Stats</div>
                    <form>
                        {charInfo.map((item, index) => (
                            <div
                                className={styles.line}
                                key={`${item.label}-${index}`}
                            >
                                <label>{item.label}</label>
                                <input disabled value={item.value} />
                            </div>
                        ))}
                    </form>

                    <div className={`${styles.skills} ${styles.card}`}>
                        <div className={styles.header}>Skills</div>
                        <div className={styles.skillBars}>
                            {skills.map((item, index) => (
                                <div
                                    className={styles.skillBarContainer}
                                    key={`${item.title}-${index}`}
                                >
                                    <label className={styles.skillBarTitle}>
                                        {item.title}
                                        <button
                                            onClick={() =>
                                                setSkillDowns({
                                                    ...skillDowns,
                                                    [item.id]: {
                                                        ...skillDowns[item.id],
                                                        show: !skillDowns[
                                                            item.id
                                                        ].show,
                                                    },
                                                })
                                            }
                                        >
                                            {skillDowns[item.id].show ? (
                                                <FontAwesomeIcon
                                                    icon={faCaretUp}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                />
                                            )}
                                        </button>
                                    </label>

                                    <AnimatePresence exitBeforeEnter>
                                        {skillDowns[item.id].show && (
                                            <motion.div
                                                key={item.id}
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: 1 }}
                                                exit={{ scaleY: 0 }}
                                                style={{ originY: 0 }}
                                                transition={{
                                                    duration: 0.1,
                                                    type: "tween",
                                                    ease: "linear",
                                                }}
                                            >
                                                {skillDowns[item.id].skills}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div
                                        className={styles.skillBarWrapper}
                                        style={{
                                            width: `${item.value}%`,
                                        }}
                                    >
                                        <span
                                            className={styles.skillBar}
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
