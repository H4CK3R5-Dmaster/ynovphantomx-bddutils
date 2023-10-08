import ContainerBlock from "@/components/ContainerBlock";
import { Box, Center, Image } from "@chakra-ui/react";


export default function NotFound() {
    return (
        <ContainerBlock>
            <Center>
                <Image src="/404.gif" width={"88%"} />
            </Center>
        </ContainerBlock>
    )
}