import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ContainerBlock from '@/components/ContainerBlock'
import Backgroundbanniere from '@/components/landing/Backgroundbanniere'
import Footer from '@/components/Footer'
import GridCard from '@/components/landing/GridCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(fakeLoading);
  }, []);
  return (

    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerBlock>
          <Backgroundbanniere />
          <GridCard />
          <Footer />
        </ContainerBlock>
      )}
    </>
  )
}
