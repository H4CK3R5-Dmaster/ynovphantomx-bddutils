import ContainerBlock from "@/components/ContainerBlock";
import ScreenComponentUtils from "@/components/utilslayouts/ScreenImageUtils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardInfoUtils from "@/components/utilslayouts/CardinfoUtils";
import Footer from "@/components/Footer";

export default function PageUtils() {
    const router = useRouter()
    const { slug } = router.query
    const [data, setData] = useState(null);
    const [utilsdata, setUtilsdata] = useState([]); // Utilisez le useState pour gérer l'état

    useEffect(() => {
        axios
      .get("/api/getcat")
      .then((response) => {
        response.data.categories.map((ele) => {
            if(ele.name == slug) {
                setData(ele)
            }
        })
      })
      .catch((error) => console.error(error));

        axios.get("/api/getutils")
        .then((elem) => {
            const filteredUtils = elem.data.utils.filter((res) => {
                return res.categories.some((cat) => cat.categoriename === slug || cat.categoriename === slug[0]);
            });
            setUtilsdata(filteredUtils);
        })
        .catch((error) => console.error(error));
    }, [slug]); // Assurez-vous d'inclure slug dans le tableau de dépendances

    return (
        <ContainerBlock>
            <ScreenComponentUtils data={data}/>
            <CardInfoUtils datautils={utilsdata} />
            <Footer/>
        </ContainerBlock>
    )
}
