'use client'

import { NextPage } from "next";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { Logo } from "@/components/Logo/Logo";
import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Banner } from "@/sections/Banner/Banner";
import Contact from "@/sections/Contact/Contact";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import Works from "@/sections/Works/Works";
import Snackbar from "@/components/Snackbar/Snackbar";
import { Menu } from "@/components/Menu/Menu";
import { useEffect, useState } from "react";
import { client } from "@/libs/sanity/sanity";
import Sidebar from "@/components/Sidebar/Sidebar";
import AwardsAndPress from "@/components/AwardsAndPress/AwardsAndPress";

// Define the structure of your data
interface PortfolioItem {
  _id: string;
  title: string;
  // Add other relevant fields based on your Sanity schema
}

const Home: NextPage = () => {
  const [data, setData] = useState<PortfolioItem[] | null>(null);
  useEffect(() => {

    const categoriesQuery = ` *[_type == "works"]|order(orderRank)`;
    const fetchData = async () => {
      try {
        const response = await client.fetch(categoriesQuery);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data, 'trtrtr');
    }
  }, [data]);

  return (
    <Wrapper>

      <div className="main-wrapper">
        <Menu />
        <Snackbar />
        <Header />
        <Banner />
        <Contact />
        <Works data={data} />
        <AwardsAndPress />
      </div>
      {data && <Sidebar />}
    </Wrapper>
  );
}

export default Home;
