"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Logo from "./Seller .svg";
import NavLogo from "./Seller1.svg";
import Pencil from "./pencil.svg";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import profile from './profile.svg';
import left from "./left.svg";
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
} from "@mui/material";
import jsonData from "./list1.json";
import { BiBorderRadius } from "react-icons/bi";

export default function Home() {
  const [Jdata, setDatas] = useState(jsonData);
  let [count, setCount] = useState(0);
  const [det, setDet] = useState(0);
  const [selectValue, setSelectValue] = useState([]);
  let [update, setUpdate] = useState(1);
  console.log(selectValue);
  const dummyRef = useRef(null);
  const [filter, setFilter] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const detRef = useRef(null);
  const mulRef = useRef(null);
  const Customcell1 = { paddingBottom: "2rem" };

  useEffect(() => {
  }, [Jdata]);

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
  const columns = [
    {
      name: "",
      selector: (row: any) => (
        <input
          type="checkbox"
          className={styles.cbx}
          onChange={() => handleClick(row.skuid)}
        />
      ),
    },
    {
      name: "PRODUCT NAME",
      id: "name",
      selector: (row: { name: any }) => row.name,
      wrap: true,
      style: { backgroundColor: "green" },
    },
    { name: "SELLER SKU ID", selector: (row: { skuid: any }) => row.skuid },
    { name: "CATEGORY", selector: (row: { Category: any }) => row.Category },
    {
      name: "PRODUCT DETAILS",
      selector: (row: { Details: any }) => row.Details,
      wrap: true,
    },
    { name: "MODEL NUMBER", selector: (row: { modelno: any }) => row.modelno },
    { name: "PRICE", selector: (row: { Cost_Price: any }) => row.Cost_Price },
    {
      name: "SELLING PRICE",
      selector: (row: { Selling_Price: any }) => row.Selling_Price,
    },
    { name: "QUANTITY", selector: (row: { Quantity: any }) => row.Quantity },
    {
      name: "",
      selector: (row: any) => (
        <img height={30} width={30} src={"/image/pencil.png"} />
      ),
    },
    {
      name: "",
      selector: (row: { name: any; skuid: any }) => (
        <button onClick={() => handleDelete(row.skuid)}>
          <img height={30} width={30} src={"/image/bin.png"} />
        </button>
      ),
    },
    {
      name: "",
      selector: (row: { name: any; skuid: any }) => (
        <button
          onClick={() => {
            handleDet(row.skuid), Detappear();
          }}
        >
          Details
        </button>
      ),
    },
  ];
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

  const menuRef = useRef(null);

  const bodyRef = useRef(null);
  const appearRef = useRef(null);
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
  const viewRef = useRef(null);
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
    const value = e.target.value;
    setSelectValue(value);
  };
  const handleDet = (id: number) => {
    Jdata.map((J) => {
      if (J.skuid === id) {
        setDet(J.skuid);
      }
    });
  };

  const Filter = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFilter(event.target.value);
    NxtFilter();
  };
  const NxtFilter = () => {
    const updlst = Jdata.filter((data) => {
      console.log(filter, data.name);
      console.log(typeof filter, typeof data.name);
      return data.name.toLowerCase().includes(filter.toLowerCase());
    });
    console.log(updlst);
    setDatas(updlst);
  };
  const Seperate = () => {
    Jdata.map((item) => {
      if (item.checked == true) {
        setCount(0);
        count = count + 1;
        setCount(count);
      }
    });
    console.log(count);
  };
  const navRef = useRef(null);
  const sdumRef = useRef(null);
  const handleScroll = (scrollAmount: number) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };
  const MulSelect = () => {
    const upd = Jdata.map((data) => {
      if (data.checked === true) {
        return { ...data, checked: false };
      } else {
        return { ...data, checked: true };
      }
      return data;
    });
    setDatas(upd);
    console.log(Jdata);
  };
  const MulInc = (skuid: number,ky:string) => {
        const upd = Jdata.map((item) => {
          if (item.skuid === skuid) {
            const counts: { [key: string]: number } = item.counts;
            Object.keys(counts).forEach((key) => {
              if (key === ky) {
                counts[key] += 1;
                return {...item.counts,key:counts[key]}
              }
              return {...item,counts:item.counts}
            });
            console.log(item)
          }
        })
        return {...Jdata,upd};
      
        
    
      };
  const handleDelete = (id: number) => {
    console.log("Del");
    const updlst = Jdata.filter((item) => item.skuid != id);
    setDatas(updlst);
    console.log(Jdata);
  };

  const myRef = useRef(null);
  const rRef = useRef(null);
  const chanRef = useRef(null);

  const appear = () => {
    if (count == 1) {
      if ((chanRef.current.style.visibility = "hidden")) {
        chanRef.current.style.visibility = "visible";
        dummyRef.current.style.filter = "brightness(50%)";

        // sdumRef.current.style.zIndex = "1"
        // sdumRef.current.style.filter = "brightness(1)"
        // dummyRef.current.style.filter = "brightness(50%)"
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
  useEffect(() => {
    NxtFilter();
    
  }, [filter]);
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
                <p
                  style={{
                    color: "#A0AEC0",
                    fontFamily: "Inter",
                    fontSize: "small",
                    fontWeight: "500",
                    width: "113px",
                    display: "inline-block",
                    paddingBottom: "0.3rem",
                    borderBottom: "1px solid #f3f5f9",
                  }}
                >
                  Belong Interactive
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
                      style={{ transform: "translateX(-30px)" }}
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
                      style={{ transform: "translateX(30px" }}
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
          <button>
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
              Channels
            </p>
            <p>H</p>
          </div>
          <div>
            <p
              style={{
                color: "#2B3674",
                fontSize: "DM Sans",
                fontWeight: "600",
                textAlign: "center",
                borderTop: "1px solid #f3f5f9",
                borderBottom: "1px solid #f3f5f9",
              }}
            >
              Categories
            </p>

            <ul
              className={styles.flex}
              style={{ gap: "2rem", marginLeft: "8rem" }}
            >
              {complst.map((com) => (
                <li key={com.id}>{com.name}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* /*   {//Now}*/}
        <ul style={{ gap: "1rem" }}>
          {Jdata.filter((data) => {
            // console.log("data======>", data);
            return data.checked === true;
          }).map((data) => (
            <li className={styles.flex}>
              <p>
                {data.name}/{data.skuid}
              </p>
              <div className={styles.flex} style={{ gap: "2rem" }}>
                {Object.entries(data.counts).map(([key, value]) => {
                  return (
                    //
                    <li
                      className={`${styles.flex_ad} ${styles.border}`}
                      style={{ gap: "1rem" }}
                    >
                      <Image src={left} alt="-" width={5} height={5} />
                      <p>{value}</p>
                      <Image
                        src={right}
                        alt="+"
                        width={5}
                        height={5}
                        onClick={() => {
                          MulInc(data.skuid, key);
                          console.log(Jdata)
                          // data.counts[key] += 1;
                          // setDatas(prev=>{... prev , data})
                          return;
                        }}
                      />
                    </li>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>

        {/* <div className={styles.negrid}>
          <div className={`${styles.flex} ${styles.mulcomp} ${styles.overx}`}>
            <div>
              <p className={styles.comp}>Flipkart</p>
            </div>
            <div>
              <p className={styles.comp}>Amazon</p>
            </div>
            <div>
              <p className={styles.comp}>Meesho</p>
            </div>
            <div>
              <p className={styles.comp}>Ajio</p>
            </div>
            <div>
              <p className={styles.comp}>Myntraa</p>
            </div>
          </div>
        </div> */}
        <div>
          {/* <ul>
            <div className={`${styles.flexcol}`}>
              {Jdata.filter((item) => item.checked === true).map((item) => (
                <li key={`${item.skuid}`} className={`${styles.flex}`}>
                  <p className={styles.comp}>
                    {item.Category}({item.Quantity}/{item.stockonhand})
                  </p>
                  {complst.map((comp) => (
                    <div
                      className={`${styles.flex}  ${styles.border} ${styles.lstnum}`}
                      style={{ width: "200px" }}
                    >
                      <button
                        onClick={() => {
                          Dec(comp.id);
                        }}
                      >
                        <Image
                          src={"/image/left.png"}
                          width={5}
                          height={2}
                          alt="Decrease"
                        />
                      </button>
                      <p style={{ marginLeft: ".3rem", marginRight: ".3rem" }}>
                        {comp.quantity}
                      </p>
                      <button
                        onClick={() => {
                          Inc(comp.id);
                        }}
                      >
                        <Image
                          src={"/image/right.png"}
                          width={5}
                          height={2}
                          alt="Increase"
                        />
                      </button>
                    </div>
                  ))}
                </li>
              ))}
            </div>
          </ul> */}
        </div>
      </div>
      <div className={styles.sdummy} ref={sdumRef}>
        <ul className={styles.det} ref={viewRef}>
          <div className={`${styles.flex} ${styles.space}`}>
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
                // color: "#2C7BE5",
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
                      Product Name :
                    </p>
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
                      SELLER SKU DETAILS :
                    </p>
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
                      CATEGORY:
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
                      DESCRIPTION:
                    </p>
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
                  <p style={{ color: "#393939" }}>Quantity & Pricing</p>
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
                      PRICE:
                    </p>
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
                      SELLING PRICE :
                    </p>
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
                      QUANTITY :
                    </p>
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
          <section
            className={styles.left}
            style={{ display: "none", transition: "all 0.3s" }}
            ref={appearRef}
          >
            <div>
              <IoMdClose
                style={{
                  transform: "translate(190px,-10px)",
                  color: "white",
                  fontSize: "medium",
                }}
                onClick={() => {
                  (menuRef.current.style.display = "block"),
                    (appearRef.current.style.display = "none");
                  console.log("Exit");
                }}
              />
              <Image
                src={NavLogo}
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
              <div className={`${styles.flx}`}>
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
          </section>
          <div
            className={`${styles.con}`}
            style={{
              display: "block",
            }}
            ref={menuRef}
          >
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="menu"
              ref={navRef}
              className={styles.navLogo}
              onMouseOver={() => Menu()}
              style={{ transform: "translate(30px,-15px)" }}
            />
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
                        {options.map((opt) => (
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
                              primary={opt.label}
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
                      style={{ fontSize: "9.7px", textTransform: "uppercase" }}
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
                      transform: "translateX(20px)",
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
                      transform: "translateX(20px)",
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
                      transform: "translateX(20px)",
                    }}
                  >
                    Product Details
                  </p>
                  <p
                    className={styles.same}
                    style={{
                      textTransform: "uppercase",
                      fontSize: "10px",
                      transform: "translateX(20px)",
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
                      transform: "translateX(20px)",
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

                {Jdata.map((data) => (
                  <li
                    className={`${styles.title} ${styles.final} ${styles.reduce}`}
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
                      <Image src={Shoe} alt="product" width={45} height={45} />
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
                        transform: "translateX(40px)",
                      }}
                    >
                      {data.skuid}
                    </p>
                    <p
                      className={styles.same}
                      style={{
                        fontSize: "12px",
                        marginLeft: "1rem",
                        transform: "translateX(20px)",
                      }}
                    >
                      {data.Category}
                    </p>
                    <p
                      className={`${styles.same} ${styles.width}`}
                      style={{ fontSize: "12px" }}
                    >
                      {data.Details}
                    </p>
                    <p
                      className={styles.same}
                      style={{
                        fontSize: "12px",
                        transform: "translateX(20px)",
                      }}
                    >
                      {data.modelno}
                    </p>
                    <p
                      className={styles.same}
                      style={{
                        fontSize: "12px",
                        marginLeft: "1.3rem",
                        transform: "translateX(20px)",
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
            </section>
          </section>
        </main>
      </section>
    </>
  );
}
