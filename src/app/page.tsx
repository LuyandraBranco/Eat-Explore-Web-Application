"use client";
import { DownloadArea } from "@/components/DownloadArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SearchComponent } from "@/components/SearchComponent";
import { ServiceHome } from "@/components/ServiceHome";
import SlideshowData from "@/data/SlideshowlData";

export default function Home() {
  const showData =SlideshowData();
  return (
    <>
      <Header/>
      <Hero data={showData}/>
      <ServiceHome/>
      <DownloadArea/>
     <Footer/>
    </>
  ) 
}
