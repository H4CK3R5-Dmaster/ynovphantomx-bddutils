import ContainerBlock from "@/components/ContainerBlock";
import Footer from "@/components/Footer";
import ScreenComponentUtils from "@/components/utilslayouts/ScreenImageUtils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ScreenComponentDetails from "@/components/detailsutilslayout/ScreenComponentDetails";
import DetailsComponents from "@/components/detailsutilslayout/DetailsComponents";


export default function PageDetailsUtils() {
    const router = useRouter()
    const { slug } = router.query
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
        .get("/api/getutils")
        .then((response) => {
          response.data.utils.map((ele) => {
              if(ele.nom == slug) {
                  setData(ele)
              }
          })
        })
    },[])
    return (
        <ContainerBlock>
            <ScreenComponentDetails data={data}/>
            <DetailsComponents dataofutils={data}/>
            <Footer/>
        </ContainerBlock>
    )
}