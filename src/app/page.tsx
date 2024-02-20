"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useReducer } from "react";
import Logo from "./Seller .svg";
import product from "./product.svg";
import smallprofile from "./smallprofile.svg";
import signin from "./sigin.svg";
import seperator from "./Separator.svg";
import inventory from "./inventory.svg";
import catalogue from "./catalogue.svg";
import home from "./home.svg";
import Pencil from "./pencil.svg";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import small from "./smallicon.svg";

import profile from "./profile.svg";
import left from "./left.svg";
import Plus from "./plus.svg";
import right from "./right.svg";
import Shoe from "./shoe.svg";

import {
  FormControl,
  Select,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  SelectChangeEvent,
  OutlinedInput,
  Typography,
} from "@mui/material";
import jsonData from "./list1.json";
import { BiBorderRadius } from "react-icons/bi";

export default function Home() {
  const [Jdata, setDatas] = useState(jsonData);
  const hvrRef: any = useRef(null);
  const oRef: any = useRef(null);
const tRef: any = useRef(null);
  const thRef: any = useRef(null);

  const fRef: any = useRef(null);

  const fiRef: any = useRef(null);

  const sRef: any = useRef(null);

  const moreRef: any = useRef(null);

  const menu1Ref: any = useRef(null);

  let [count, setCount] = useState(0);
  const [det, setDet] = useState(0);
  const [selectValue, setSelectValue] = useState([]);
  let [update, setUpdate] = useState(1);
  console.log(selectValue);
  const dummyRef: any = useRef(null);
  const [filter, setFilter] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef: any = useRef(null);
  const detRef: any = useRef(null);
  const mulRef: any = useRef(null);
  const Customcell1 = { paddingBottom: "2rem" };

  useEffect(() => {}, [Jdata]);

  const [complst, setComplst] = useState([
    {
      id: 1,
      name: "FLIPKART",
      src: "/image/flip.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "AMAZON",
      src: "/image/amazon.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "MEESHO",
      src: "/image/meesho.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "AJIO",
      src: "/image/ajio.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "MYNTRAA",
      src: "/image/myntra.png",
      quantity: 1,
    },
  ]);

  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);

  const Inc = (id: number) => {
    setComplst((prevComp) => {
      return prevComp.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };
  let [menu,setMenu] = useState('small')

  
  
  const menuRef: any = useRef(null);
  
  const bodyRef: any = useRef(null);
  const appearRef: any = useRef(null);
  const Menu = () => {
    menuRef.current.style.display = "none";
    appearRef.current.style.display = "flex";
  };
  const Dec = (id: number) => {
    setComplst((prevComplst) => {
      return prevComplst.map((lst) => {
        if (lst.id === id && lst.quantity > 0) {
          return { ...lst, quantity: lst.quantity - 1 };
        }
        return lst;
      });
    });
  };
  const viewRef: any = useRef(null);
  const Detappear = () => {
    if ((viewRef.current.style.visibility = "hidden")) {
      viewRef.current.style.visibility = "visible";
      sdumRef.current.style.backgroundColor = "white";
      dummyRef.current.style.filter = "brightness(50%)";
      sdumRef.current.style.zIndex = "1";
      sdumRef.current.style.filter = "brightness(1)";
    } else {
      viewRef.current.style.visibility = "hidden";
    }
  };
  const handleClick = (id: number) => {
    const updatedData = Jdata.map((item) => {
      if (item.skuid === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    console.log(updatedData);
    
    setDatas(updatedData);
  };

  const handleValue = (e: SelectChangeEvent<never[]>) => {
    const value: any = e.target.value;
    setSelectValue(value);
  };
  const handleDet = (id: number) => {
    Jdata.map((J) => {
      if (J.skuid === id) {
        setDet(J.skuid);
      }
    });
  };
  const img = menu === "small" ? small : Logo
  
  const Seperate = () => {
    Jdata.map((item) => {
      if (item.checked == true) {
        setCount(0);
        count = count + 1;
        setCount(count);
      }
    });
  };
  const Pop = () => {
    setMenu("large")
    const interval = setInterval(() => {
      menu1Ref.current.style.visibility = "visible";
    }, 300);
    menu1Ref.current.style.width = "100px"
    oRef.current.style.visibility = "visible";
    tRef.current.style.visibility = "visible";
    thRef.current.style.visibility = "visible";
    fRef.current.style.visibility = "visible";
    fiRef.current.style.visibility = "visible";
    sRef.current.style.visibility = "visible";
    moreRef.current.style.visibility = "visible";
    hvrRef.current.style.width = "250px";
    return () => clearInterval(interval);
  };
  const DisPop = () => {
    setMenu("small")
    const interval = setInterval(() => {
      menu1Ref.current.style.visibility = "visible";
    }, 300);
    menu1Ref.current.style.width = "30px"
    oRef.current.style.visibility = "hidden";
    tRef.current.style.visibility = "hidden";
    thRef.current.style.visibility = "hidden";
    fRef.current.style.visibility = "hidden";
    fiRef.current.style.visibility = "hidden";
    sRef.current.style.visibility = "hidden";
    moreRef.current.style.visibility = "hidden";
    hvrRef.current.style.width = "70px";
    return () => clearInterval(interval);
  };
  const navRef: any = useRef(null);
  const sdumRef: any = useRef(null);
  const scrollRef: any = useRef(null);
  const handleScroll = (scrollAmount: number) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };
  const handleMulScroll = (scrollAmount: number) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);
    console.log("move");

    scrollRef.current.scrollLeft = newScrollPosition;
  };
  const Filter = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFilter(event.target.value);
  };
  console.log(filter);

  const MulSelect = () => {
    const upd = Jdata.map((data) => {
      if (data.checked === true) {
        return { ...data, checked: false };
      } else {
        return { ...data, checked: true };
      }
    });
    setDatas(upd);
    console.log(Jdata);
  };
  const MulInc = (skuid: number, ky: string) => {
    const upd = Jdata.map((item) => {
      if (item.skuid === skuid) {
        const counts: { [key: string]: number } = item.counts;
        Object.keys(counts).forEach((key) => {
          if (key === ky) {
            counts[key] += 1;
            return { ...item.counts, key: counts[key] };
          }
          return { ...item, counts: item.counts };
        });
        console.log(item);
      }
    });
    return { ...Jdata, upd };
  };
  const MulDec = (skuid: number, ky: string) => {
    const upd = Jdata.map((item) => {
      if (item.skuid === skuid) {
        const counts: { [key: string]: number } = item.counts;
        Object.keys(counts).forEach((key) => {
          if (key === ky) {
            if (counts[key] > 1) {
              counts[key] -= 1;
              return { ...item.counts, key: counts[key] };
            }
          }
          return { ...item, counts: item.counts };
        });
        console.log(item);
      }
    });
    return { ...Jdata, upd };
  };
  const handleDelete = (id: number) => {
    console.log("Del");
    const updlst = Jdata.filter((item) => item.skuid != id);
    setDatas(updlst);
    console.log(Jdata);
  };

  const myRef: any = useRef(null);
  const rRef: any = useRef(null);
  const chanRef: any = useRef(null);

  const appear = () => {
    if (count == 1) {
      if ((chanRef.current.style.visibility = "hidden")) {
        chanRef.current.style.visibility = "visible";
        dummyRef.current.style.filter = "brightness(50%)";
      } else {
        chanRef.current.style.visibility = "hidden";
      }
    } else {
      chanRef.current.style.visibility = "hidden";
    }
    if (count > 1) {
      if (mulRef.current.style.visibility === "hidden") {
        mulRef.current.style.visibility = "visible";
        dummyRef.current.style.filter = "brightness(50%)";
      } else {
        mulRef.current.style.visibility = "hidden";
      }
    } else {
      mulRef.current.style.visibility = "hidden";
    }
  };

  useEffect(() => {}, [Jdata]);
  const options = [
    { id: 1, value: "Shoes", label: "Shoes" },
    { id: 2, value: "Shirts", label: "Shirts" },
    { id: 3, value: "Bottles", label: "Bottles" },
    { id: 4, value: "Utensils", label: "Utensils" },
    { id: 5, value: "Plastic", label: "Plastic" },
  ];

  return (
    <>
      <div className={`${styles.hid} ${styles.flexcol}`} ref={chanRef}>
        <div
          className={`${styles.flex} ${styles.space} `}
          style={{ paddingBottom: "1rem" }}
        >
          <p className={`${styles.font} ${styles.titl}`}>Linked Channels</p>
          <Link href="/link">
            <button className={`${styles.flex_ad} ${styles.gap}`}>
              <Image
                src={"/image/Plus1.png"}
                alt="add"
                width={24.8}
                height={24.8}
              />
              <p className={styles.sub}>Add new Channel</p>
            </button>
          </Link>
        </div>
        <div
          className={`${styles.flex} ${styles.space}`}
          style={{ paddingBottom: "1rem" }}
        >
          <p className={`${styles.font} ${styles.single}`}>
            Single List Products
          </p>
          <button className={`${styles.move} ${styles.font}`}>
            Move to Listing
          </button>
        </div>
        <div style={{ paddingBottom: "1rem" }}>
          <p style={{ color: "#2B3674" }}>Product: Shoes(25/30)</p>
        </div>
        <div className="companies">
          <ul ref={containerRef} className={`${styles.flex} ${styles.overx}`}>
            {complst.map((comp) => (
              <li
                className={`${styles.flexcol} ${styles.each}`}
                key={comp.id}
                style={{ width: "250px" }}
              >
                <input
                  type="checkbox"
                  className={styles.align}
                  onChange={() => {}}
                />
                <Image
                  src={comp.src}
                  alt={comp.name}
                  width={38.18}
                  height={38.18}
                />
                <p
                  style={{
                    color: "#2D3748",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  {comp.name}
                </p>

                <div
                  className={`${styles.flex_ad}  ${styles.border}`}
                  style={{ padding: "0 1rem" }}
                >
                  <button
                    onClick={() => {
                      Dec(comp.id);
                    }}
                  >
                    <Image
                      src={left}
                      width={5}
                      height={2}
                      style={{ transform: "translateX(-20px)" }}
                      alt="Decrease"
                    />
                  </button>
                  <p style={{ color: "#2C7BE5" }}>{comp.quantity}</p>
                  <button
                    onClick={() => {
                      Inc(comp.id);
                    }}
                  >
                    <Image
                      src={right}
                      width={5}
                      style={{ transform: "translateX(20px" }}
                      height={2}
                      alt="Increase"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={`${styles.flex} ${styles.space}`}>
            <button onClick={() => handleScroll(-300)}>
              <Image
                src={left}
                width={10}
                height={10}
                alt="Decrease"
                style={{ transform: "translate(-10px,10px)" }}
              />
            </button>
            <button onClick={() => handleScroll(200)}>
              <Image src={right} width={10} height={10} alt="Decrease" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.multiple}
        ref={mulRef}
        style={{ visibility: "hidden" }}
      >
        <div className={`${styles.flex} ${styles.flayer}`}>
          <p
            style={{
              color: "#0057AD",
              fontSize: "large",
              fontFamily: "DM Sans",
            }}
          >
            Linked Channels
          </p>
          <button
            style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
          >
            <Image src={Plus} width={20} height={10} alt="plus" />
            <p
              style={{
                color: "#0057AD",
                fontFamily: "DM Sans",
                fontWeight: "400",
              }}
            >
              Add new Channel
            </p>
          </button>
        </div>
        <div className={`${styles.flex} ${styles.flayer}`}>
          <p
            style={{
              color: "#393939",
              fontFamily: "DM Sans",
              fontSize: "17px",
            }}
          >
            Multiple Listing Products
          </p>
          <button className={`${styles.move} ${styles.font}`}>
            Move to Listing
          </button>
        </div>
        <div
          className={`${styles.negrid}`}
          style={{
            paddingLeft: "0.5rem",
            paddingBottom: "0.2rem",
          }}
        >
          <div>
            <p
              style={{
                borderTop: "1px solid #f3f5f9",
                borderBottom: "1px solid #f3f5f9",
                color: "#2B3674",
                fontSize: "DM Sans",
                fontWeight: "600",
              }}
            >
              Categories
            </p>
            <div>
              <p style={{ visibility: "hidden" }}>H</p>
            </div>

            <ul
              style={{
                gap: "0.9rem",
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid #f3f5f9",
              }}
            >
              {Jdata.filter((data) => {
                // console.log("data======>", data);
                return data.checked === true;
              }).map((data) => (
                <li className={styles.flex}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "1rem",
                    }}
                  >
                    <p
                      style={{
                        color: "#393939",
                        fontFamily: "DM Sans",
                        fontSize: "medium",
                      }}
                    >
                      {data.Category}
                    </p>
                    <p
                      style={{
                        color: "#393939",
                        fontFamily: "DM Sans",
                        fontSize: "medium",
                      }}
                    >
                      (
                    </p>
                    <p
                      style={{
                        color: "#0057AD",
                        fontFamily: "DM Sans",
                        fontSize: "medium",
                      }}
                    >
                      {data.Quantity}
                    </p>
                    <p
                      style={{
                        color: "#393939",
                        fontFamily: "DM Sans",
                        fontSize: "medium",
                      }}
                    >
                      /40)
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              transform: "translateX(30px)",
              marginRight: "1rem",
              marginTop: "1rem",
            }}
            className={styles.dv}
            ref={scrollRef}
          >
            {/* //right */}
            <div
              style={{
                display: "flex",
                paddingBottom: ".4rem",
                justifyContent: "space-between",
                transform: "translateX(20px)",
              }}
            >
              {complst.map((com) => (
                <div
                  key={com.id}
                  style={{
                    height: "30px",
                    width: "30px",
                    marginRight: "-3rem",
                  }}
                >
                  <Image src={com.src} width={20} height={20} alt="logo" />
                </div>
              ))}
            </div>
            <ul
              style={{
                gap: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              {Jdata.filter((data) => {
                return data.checked === true;
              }).map((data) => (
                <li
                  className={styles.flex}
                  style={{
                    width: "fit-content",
                    gap: "1.9rem",
                    borderBottom: "1px solid #f3f5f8",
                    paddingBottom: "1rem",
                  }}
                >
                  {Object.entries(data.counts).map(([key, value]) => {
                    return (
                      //
                      <li
                        className={`${styles.flex_ad}`}
                        style={{
                          gap: "1rem",
                          border: "1px solid #dedede",
                          borderRadius: "11px",
                          padding: "0 0.9rem",
                        }}
                      >
                        <Image
                          src={left}
                          alt="-"
                          width={5}
                          height={5}
                          onClick={() => {
                            MulDec(data.skuid, key);
                            console.log(Jdata);
                            forceUpdate();

                            return;
                          }}
                          className={styles.hov}
                        />
                        <p style={{ color: "#2C7BE5", fontSize: "small" }}>
                          {value}
                        </p>
                        <Image
                          src={right}
                          alt="+"
                          width={5}
                          height={5}
                          onClick={() => {
                            MulInc(data.skuid, key);
                            console.log(Jdata);
                            forceUpdate();

                            return;
                          }}
                        />
                      </li>
                    );
                  })}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button>
              <Image
                src={left}
                width={10}
                height={10}
                alt="left"
                onClick={() => handleMulScroll(-200)}
                style={{ transform: "translate(140px,-290px)" }}
              />
            </button>
            <button>
              <Image
                src={right}
                width={10}
                height={10}
                onClick={() => handleMulScroll(200)}
                alt="right"
                style={{ transform: "translate(520px,-290px)" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sdummy} ref={sdumRef}>
        <ul className={styles.det} ref={viewRef}>
          <div
            className={`${styles.flex} ${styles.space}`}
            style={{ marginBottom: "1rem" }}
          >
            <p
              style={{
                color: "#2B3674",
                fontFamily: "DM Sans",
                fontSize: "larger",
                display: "inline",
              }}
            >
              Detail View
            </p>
            <button
              style={{
                color: "#0057AD",
                fontSize: "small",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              <Image src={Pencil} alt="edit" height={14} width={14} />
              <p>Edit</p>
            </button>
          </div>
          {Jdata.map((data) =>
            det == data.skuid ? (
              <section className="j">
                <p style={{ color: "#393939", fontFamily: "DM Sans" }}>
                  Product Info
                </p>
                <section>
                  <div
                    className={`${styles.flex} ${styles.flex_align}  ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginTop: "0.3rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      Product Name
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginTop: "0.1rem",
                        fontWeight: "700",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.name}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      SELLER SKU DETAILS
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.skuid}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      CATEGORY
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Category}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      MODEL NUMBER:
                    </p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Category}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      DESCRIPTION
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Details}
                    </p>
                  </div>
                </section>
                <section>
                  <p style={{ color: "#393939", fontWeight: "600" }}>
                    Quantity & Pricing
                  </p>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      PRICE
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.3rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Cost_Price}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      SELLING PRICE
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.3rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Selling_Price}
                    </p>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flex_align} ${styles.detView}`}
                  >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#565656",
                        marginRight: "0.5rem",
                      }}
                    >
                      QUANTITY
                    </p>
                    <p>:</p>
                    <p
                      style={{
                        color: "#2B3674",
                        fontSize: "small",
                        marginBottom: "0.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {data.Quantity}
                    </p>
                  </div>
                </section>
              </section>
            ) : null
          )}
        </ul>
      </div>
      <section ref={bodyRef} className={styles.dumm}>
        <main className={styles.main} ref={dummyRef}>
          <div
            className={styles.left}
            onMouseEnter={Pop}
            onMouseLeave={DisPop}
            ref={hvrRef}
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src={img}
                height={30}
                width={30}
                alt="logo"
                style={{ marginLeft: "1.3rem", marginBottom: "1rem" }}
                ref={menu1Ref}
              />

              <Image
                src={seperator}
                height={100}
                width={500}
                alt="line"
                style={{ height: "10px", width: "500px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginLeft: "2rem",
              }}
            >
              <div className={`${styles.flex} ${styles.gap}`}>
                <Image src={home} alt="home" height={20} width={20} />
                <p className={styles.lp} ref={oRef}>
                  Dashboard
                </p>
              </div>
              <div className={`${styles.flex} ${styles.gap}`}>
                <Image src={inventory} alt="home" height={20} width={20} />
                <p className={styles.lp} ref={tRef}>
                  Inventory
                </p>
              </div>
              <div className={`${styles.flex} ${styles.gap}`}>
                <Image src={catalogue} alt="home" height={20} width={20} />
                <p
                  className={`${styles.lp}`}
                  style={{ color: "#FFA823" }}
                  ref={thRef}
                >
                  Catalogue
                </p>
              </div>
              <div
                className={`${styles.flex} ${styles.gap}`}
                style={{ height: "29px" }}
              >
                <div style={{ height: "30px", width: "20px" }}>
                  <Image src={product} alt="home" height={20} width={20} />
                </div>
                <div
                  ref={fRef}
                  style={{
                    visibility: "hidden",
                    width: "100px",
                    display: "flex",
                    gap: "0.2rem",
                    marginTop: ".1rem",
                    fontFamily: "DM Sans",
                    color: "#b8b8b8",
                    fontWeight: "590",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  <p>Product</p> <p>Intelligence</p>
                </div>
              </div>
              <div className={`${styles.flex} ${styles.gap}`}>
                <Image src={smallprofile} alt="home" height={20} width={20} />
                <p className={styles.lp} ref={fiRef}>
                  Profile
                </p>
              </div>
              <div className={`${styles.flex} ${styles.gap}`}>
                <Image src={signin} alt="home" height={20} width={20} />
                <p className={styles.lp} ref={sRef}>
                  Sign In
                </p>
              </div>
            </div>
            <div>
              <div className={styles.more} ref={moreRef}>
                <Image
                  src={"/image/info.png"}
                  alt="info"
                  width={35}
                  height={35}
                />
                <p className={styles.wh}>
                  Get more <br />
                  benefits
                </p>
                <button className={`${styles.wh} ${styles.btn}`}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${styles.con}`}
            style={{
              display: "block",
            }}
            ref={menuRef}
          >
            
          </div>
          <section className={styles.right} style={{ width: "1300px" }}>
            <section className={`${styles.flex} ${styles.top}`}>
              <div className={styles.first}>
                <p className={styles.catfont}>Catalogue</p>
              </div>
              <div className={`${styles.flex} ${styles.space} ${styles.huge} `}>
                <Image
                  src={profile}
                  className={styles.icon}
                  alt="notification"
                  width={29.6}
                  height={1.39}
                />
              </div>
            </section>
            <section>
              <div className={`${styles.btnlst}${styles.flex}${styles.space}`}>
                <div className={`${styles.end} ${styles.flex}`}>
                  <div>
                    <FormControl sx={{ width: "180px" }} className={styles.bar}>
                      <Select
                        style={{ height: 40 }}
                        value={selectValue}
                        multiple
                        displayEmpty
                        input={<OutlinedInput />}
                        inputProps={{ "aria-label": "Without label" }}
                        labelId="demo"
                        onChange={(e) => handleValue(e)}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return (
                              <p
                                style={{
                                  fontFamily: "DM Sans",
                                  color: "#2B3674",
                                  fontSize: "small",
                                }}
                              >
                                Select Category
                              </p>
                            );
                          }

                          return selected.join(", ");
                        }}
                      >
                        {/* //FontFamily */}
                        {options.map((opt: any) => (
                          <MenuItem key={opt.id} value={opt.value}>
                            <ListItemIcon>
                              <Checkbox
                                defaultChecked
                                sx={{
                                  "&.MuiSvgIcon-root": {
                                    color: "blue",
                                  },
                                }}
                                name="sel-check"
                                checked={selectValue.includes(opt.value)}
                              ></Checkbox>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  style={{
                                    fontFamily: "DM Sans",
                                    fontSize: "small",
                                  }}
                                >
                                  {opt.label}
                                </Typography>
                              }
                              sx={{ fontWeight: "600", color: "#2B3674" }}
                            ></ListItemText>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.second}>
                    <button
                      className={`${styles.move} ${styles.font}`}
                      onClick={() => {
                        Seperate(), setCount(0), appear();
                      }}
                    >
                      Move to channels
                    </button>
                    <input
                      type="text"
                      placeholder="Search"
                      className={styles.search}
                      onChange={Filter}
                    />
                    <button className={styles.new}>
                      <Image
                        src={"/image/plus.png"}
                        alt="edit"
                        width={16}
                        height={15}
                      />
                      <p>New</p>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <ul className={styles.reduce}>
                <div className={`${styles.title} ${styles.label}`}>
                  <div
                    className={`${styles.flex}`}
                    style={{ width: "100px", marginLeft: "0.9rem" }}
                  >
                    <input
                      type="checkbox"
                      style={{ marginRight: "0.2rem" }}
                      onClick={MulSelect}
                    />
                    <p
                      className={styles.same}
                      style={{
                        fontSize: "9.7px",
                        textTransform: "uppercase",
                        transform: "translateX(10px)",
                      }}
                    >
                      Product Name
                    </p>
                  </div>
                  <p
                    className={styles.same}
                    style={{
                      fontSize: "10px",
                      fontWeight: "900",
                      marginLeft: "1.3rem",
                      transform: "translateX(40px)",
                    }}
                  >
                    SELLER SKU ID
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      display: "inline",
                      fontSize: "10px",
                      transform: "translateX(60px)",
                    }}
                  >
                    Category
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      display: "inline",
                      fontSize: "10px",
                      transform: "translateX(40px)",
                    }}
                  >
                    Product Details
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      transform: "translateX(50px)",
                    }}
                  >
                    Model Number
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      marginLeft: "1.3rem",
                      transform: "translateX(40px)",
                    }}
                  >
                    Price
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      transform: "translateX(20px)",
                    }}
                  >
                    Selling Price
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      transform: "translateX(20px)",
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    className={styles.same}
                    style={{ textTransform: "uppercase", fontSize: "10px" }}
                  ></p>
                  <p
                    className={styles.same}
                    style={{ textTransform: "uppercase", fontSize: "10px" }}
                  ></p>
                  <p
                    className={styles.same}
                    style={{ textTransform: "uppercase", fontSize: "10px" }}
                  ></p>
                </div>
                <ul
                  style={{
                    backgroundColor: "white",
                    borderRadius: "11px",
                  }}
                >
                  {Jdata.filter((item) => {
                    return filter.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(filter);
                  }).map((data) => (
                    <li
                      className={`${styles.title} ${styles.final} ${styles.reduce}`}
                      key={data.skuid}
                    >
                      <div
                        className={`${styles.flex_ad} ${styles.verticalup}`}
                        style={{ marginLeft: "1rem", width: "150px" }}
                      >
                        <input
                          type="checkbox"
                          checked={data.checked}
                          onChange={() => {
                            handleClick(data.skuid);
                            console.log(typeof data.checked);
                          }}
                        />
                        <Image
                          src={data.src}
                          alt="product"
                          width={45}
                          height={45}
                        />
                        <p
                          className={`${styles.same} `}
                          style={{
                            fontSize: "11px",
                            width: "150px",
                            textAlign: "center",
                          }}
                        >
                          {data.name}
                        </p>
                      </div>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "11px",
                          marginLeft: "1.4rem",
                          width: "fit-content",
                          transform: "translateX(60px)",
                        }}
                      >
                        {data.skuid}
                      </p>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "12px",
                          marginLeft: "1rem",
                          transform: "translateX(50px)",
                        }}
                      >
                        {data.Category}
                      </p>
                      <p
                        className={`${styles.same} ${styles.width}`}
                        style={{
                          fontSize: "12px",
                          transform: "translateX(40px)",
                        }}
                      >
                        {data.Details}
                      </p>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "12px",
                          transform: "translateX(55px)",
                        }}
                      >
                        {data.modelno}
                      </p>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "12px",
                          marginLeft: "1.3rem",
                          transform: "translateX(40px)",
                        }}
                      >
                        {data.Cost_Price}
                      </p>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "12px",
                          marginLeft: "1rem",
                          transform: "translateX(20px)",
                        }}
                      >
                        {data.Selling_Price}
                      </p>
                      <p
                        className={styles.same}
                        style={{
                          fontSize: "12px",
                          marginLeft: "1rem",
                          transform: "translateX(20px)",
                        }}
                      >
                        {data.Quantity}
                      </p>
                      <Image
                        src={"/image/pencil.png"}
                        width={20}
                        height={20}
                        alt="edit"
                        style={{ transform: "translateX(20px)" }}
                      />
                      <Image
                        src={"/image/bin.png"}
                        width={20}
                        height={20}
                        alt="delete"
                        onClick={() => handleDelete(data.skuid)}
                        style={{
                          marginRight: "20px",
                          transform: "translateX(-20px)",
                        }}
                      />
                      <p
                        ref={detRef}
                        className={`${styles.same} ${styles.red}`}
                        onClick={() => {
                          handleDet(data.skuid), Detappear();
                        }}
                        style={{ transform: "translateX(-40px)" }}
                      >
                        Details
                      </p>
                    </li>
                  ))}
                </ul>
              </ul>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}
