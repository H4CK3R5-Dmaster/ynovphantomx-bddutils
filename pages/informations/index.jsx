import ContainerBlock from "@/components/ContainerBlock";
import Footer from "@/components/Footer";
import CardInfo from "@/components/informationslayout/Cardsinfo";
import ScreenComponent from "@/components/informationslayout/ScreenImage";


export default function InformationPage() {
    return (
        <ContainerBlock>
            <ScreenComponent/>
            <CardInfo/>
            <Footer/>
        </ContainerBlock>
    )
}