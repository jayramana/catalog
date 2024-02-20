"use client";
import Link from "next/link";
import styles from "./file.module.css";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function page() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "FLIPKART",
      src: "/image/flip.png",
    },
    {
      id: 2,
      name: "AMAZON",
      src: "/image/amazon.png",
    },
    {
      id: 3,
      name: "MEESHO",
      src: "/image/meesho.png",
    },
    {
      id: 4,
      name: "AJIO",
      src: "/image/ajio.png",
    },
    {
      id: 5,
      name: "MYNTRAA",
      src: "/image/myntra.png",
    },
  ]);
  return (
    <div className={styles.main} >
      <section className={styles.left}>
        <div>
          <Image
            src={"/image/logo.png"}
            alt="Logo"
            width={140}
            height={20}
            className={styles.marg_left}
          />
          <Image
            src={"/image/Separator.png"}
            alt="Logo"
            width={180}
            height={20}
          />
        </div>
        <div className={styles.flxc}>
          <div className={`${styles.flx}`}>
            <Image
              src={"/image/home.png"}
              alt="home"
              width={18.4}
              height={16}
            />
            <p className={`${styles.lp}`}>Dashboard</p>
          </div>
          <div className={styles.flx}>
            <Image
              src={"/image/Icon.png"}
              alt="inventory"
              width={18}
              height={18}
            />
            <p className={styles.lp}>Inventory</p>
          </div>
          <div className={styles.flx}>
            <Image
              src={"/image/catalogue.png"}
              alt="catalogue"
              width={16.66}
              height={18.41}
            />
            <p className={`${styles.lp} ${styles.focus}`}>Catalogue</p>
          </div>
          <div className={styles.flx}>
            <Image
              src={"/image/productintell.png"}
              alt="prod-intelligence"
              width={16.33}
              height={16.33}
            />
            <p className={styles.lp}>Product Intelligence</p>
          </div>
          <div className={styles.flx}>
            <Image
              src={"/image/profile.png"}
              alt="profile"
              width={16}
              height={16}
            />
            <p className={styles.lp}>Profile</p>
          </div>
          <div className={styles.flx}>
            <Image
              src={"/image/signin.png"}
              alt="sign-in"
              width={16}
              height={21}
            />
            <p className={styles.lp}>Sign-In</p>
          </div>
        </div>
        <div className={styles.more}>
          <Image src={"/image/info.png"} alt="info" width={35} height={35} />
          <p className={styles.wh}>
            Get more <br />
            benefits
          </p>
          <button className={`${styles.wh} ${styles.btn}`}>Subscribe</button>
        </div>
      </section>
      <section className={styles.right}>
        <section className={`${styles.flex} ${styles.top}`}>
          <div>
            <p className={styles.catfont}>Link Channels</p>
          </div>
          <div className={`${styles.flex} ${styles.huge} `}>
            <CgProfile style={{fontSize:"x-large"}}/>

            
          </div>
        </section>
        <section className={styles.comp}>
          <ul className={styles.companies} style={{  width: "fit-content"  }}>
            {companies.map((company) => (
              <div>
                <li
                  key={company.id}
                  className={`${styles.flexcol} ${styles.each}`}
                  style={{alignItems:"center"}}
                >
                  <Image
                    src={company.src}
                    alt="icon"
                    width={44}
                    height={44}
                    className={styles.img}
                  />
                  <p className={styles.name}>{company.name}</p>
                  <button className={`${styles.flex}`}>
                    <FaPlus
                      style={{
                        color: "#2C7BE5",
                        marginTop: "0.3rem",
                        marginRight: "0.2rem",
                      }}
                    />
                    <p
                      className={`${styles.font}`}
                      style={{ color: "#2C7BE5", fontSize: "16px" }}
                    >
                      Link Channel
                    </p>
                  </button>
                </li>
              </div>
            ))}
            {companies.map((company) => (
              <div className={styles.contain}>
                <li
                  key={company.id}
                  className={`${styles.flexcol} ${styles.each}`}
                  style={{ alignItems: "center", visibility:"hidden" }}
                  

                >
                  <Image
                    src={company.src}
                    alt="icon"
                    width={44}
                    height={44}
                    className={styles.img}
                  />
                  <p className={styles.name}>{company.name}</p>
                  <button className={styles.flex}>
                    <FaPlus
                      style={{
                        color: "#2C7BE5",
                        marginTop: "0.3rem",
                        marginRight: "0.2rem",
                      }}
                    />
                    <p
                      className={`${styles.font}`}
                      style={{ color: "#2C7BE5" }}
                    >
                      Link Channel
                    </p>
                  </button>
                </li>
              </div>
            ))}
            {companies.map((company) => (
              <div className={styles.contain}>
                <li
                  key={company.id}
                  className={`${styles.flexcol} ${styles.each}`}
                  style={{alignItems:"center",visibility:"hidden"}}

                >
                  <Image
                    src={company.src}
                    alt="icon"
                    width={44}
                    height={44}
                    className={styles.img}
                  />
                  <p className={styles.name}>{company.name}</p>
                  <button className={styles.flex}>
                    <FaPlus
                      style={{
                        color: "#2C7BE5",
                        marginTop: "0.3rem",
                        marginRight: "0.2rem",
                      }}
                    />
                    <p
                      className={`${styles.font}`}
                      style={{ color: "#2C7BE5" }}
                    >
                      Link Channel
                    </p>
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </section>
            <div className={`${styles.flex} ${styles.listbtn}`}>
              {/* <Link href="/">
                <button
                  className={`${styles.flex} ${styles.gap}`}
                  style={{
                    backgroundColor: "#ffa822",
                    padding: "0.4rem 1rem",
                    fontSize: "14px",
                  }}
                >
                  <Image
                    src={"/image/back.png"}
                    height={7}
                    width={14}
                    alt="back"
                  />
                  Back to Listing
                </button>
              </Link> */}
            </div>
      </section>
    </div>
  );
}
