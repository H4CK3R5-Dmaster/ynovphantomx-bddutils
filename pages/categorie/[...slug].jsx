import ContainerBlock from "@/components/ContainerBlock";
import ScreenComponentUtils from "@/components/utilslayouts/ScreenImageUtils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";


export default function PageUtils() {
    const router = useRouter()
    const { slug } = router.query
    const [data, setData] = useState(null);

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
      
    })

    return (
        <ContainerBlock>
            <ScreenComponentUtils data={data}/>
        </ContainerBlock>
    )
}