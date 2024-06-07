"use client";
import { Tree } from "react-organizational-chart";
import bishnu from "./assets/bishnuPun.png";
import dipendra from "./assets/dipendra.png";
import lisa from "./assets/Lisa.png";
import liudmyla from "./assets/Liudmyla.png";
import sanju from "./assets/sanju.png";
import sebastian from "./assets/Sebastian.png";
import styled from "styled-components";
import Image from "next/image";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};
const data = {
  name: "CEO",
  children: [
    {
      name: "Manager 1",
      children: [{ name: "Employee 1" }, { name: "Employee 2" }],
    },
    {
      name: "Manager 2",
      children: [{ name: "Employee 3" }],
    },
  ],
};

const Hierarchy = () => {
  const StyledNode = styled.div`
    // padding: 5px;
    border:black
    border-radius: 28px;
    display: inline-block;
    // border: 1px solid red;
  `;

  return (
    <section className="bg-[#f7f7f7]">
      <div className="container py-16"></div>
    </section>
  );
};

export default Hierarchy;
